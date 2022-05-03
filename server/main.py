
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


app = FastAPI()
app.mount("/public", StaticFiles(directory="./public"), name="public")
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["GET","POST","PUT","DELETE"],
    allow_headers=["*"]
)

@app.get("/")
async def home():
    return FileResponse("./public/index.html")
    

@app.get("/build/{localfile}")
async def manifest(localfile):
    # add check of that file is part of static
    return FileResponse(f"./public/build/{localfile}")

@app.get("/checkserver")
async def manifest():
    # add check of that file is part of static
    return 'This is a response from the server'
    
# favioncs
@app.get("/{localfile}")
async def manifest(localfile):
    # add check of that file is part of static
    return FileResponse(f"./public/{localfile}")