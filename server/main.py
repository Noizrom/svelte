"""
Main FastAPI application
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from .config import CORS_ORIGINS, CORS_METHODS, STATIC_DIR, BUILD_DIR
from .routes import router

app = FastAPI(
    title="SvelteKit + Python API",
    description="FastAPI backend for SvelteKit application",
    version="1.0.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=CORS_METHODS,
    allow_headers=["*"],
)

# Include API routes
app.include_router(router)

# Mount static files if build directory exists
if BUILD_DIR.exists():
    app.mount("/assets", StaticFiles(directory=BUILD_DIR / "assets"), name="assets")
    app.mount("/_app", StaticFiles(directory=BUILD_DIR / "_app"), name="app")


@app.get("/")
async def serve_index():
    """
    Serve the main index.html from build directory
    """
    index_file = BUILD_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "Build the frontend first with 'deno task build'"}


@app.get("/favicon.png")
async def serve_favicon():
    """
    Serve favicon from static directory
    """
    favicon = STATIC_DIR / "favicon.png"
    if favicon.exists():
        return FileResponse(favicon)
    return {"error": "Favicon not found"}


# Catch-all route for SvelteKit pages (SPA fallback)
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """
    Serve SvelteKit SPA - falls back to index.html for client-side routing
    """
    # Check if it's a static file in build directory
    file_path = BUILD_DIR / full_path
    if file_path.exists() and file_path.is_file():
        return FileResponse(file_path)

    # Check static directory
    static_file = STATIC_DIR / full_path
    if static_file.exists() and static_file.is_file():
        return FileResponse(static_file)

    # Fall back to index.html for SPA routing
    index_file = BUILD_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)

    return {"error": "File not found", "path": full_path}
