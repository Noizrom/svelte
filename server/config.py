"""
Configuration settings for the server
"""

from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Static files configuration
STATIC_DIR = BASE_DIR / "static"
BUILD_DIR = BASE_DIR / "build"

# CORS settings
CORS_ORIGINS = ["*"]
CORS_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH"]

# Server settings
DEV_PORT = 7000
PROD_PORT = 5000
