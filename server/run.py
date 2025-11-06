"""
Server runner script
"""

import uvicorn
import sys


def main():
    """
    Run the FastAPI server with appropriate configuration
    """
    dev = False
    port = 7000

    try:
        mode = sys.argv[1]
        if mode == "dev":
            port = 7000
            dev = True
            print(f"🚀 Starting development server on http://localhost:{port}")
            print(f"📚 API docs available at http://localhost:{port}/docs")
        else:
            port = 5000
            dev = False
            print(f"🚀 Starting production server on http://localhost:{port}")
    except IndexError:
        port = 7000
        dev = False
        print(f"🚀 Starting server on http://localhost:{port}")

    uvicorn.run(
        "server.main:app",
        host="0.0.0.0",
        port=port,
        reload=dev,
        log_level="info" if dev else "warning",
    )


if __name__ == "__main__":
    main()
