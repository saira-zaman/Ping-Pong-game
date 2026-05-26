"""
Vercel Serverless Function Entry Point
Main WSGI application handler for the Ping Pong game
"""

import sys
import os
from pathlib import Path

# Add parent directory to Python path for imports
project_root = str(Path(__file__).parent.parent)
if project_root not in sys.path:
    sys.path.insert(0, project_root)

# Import the Flask application
from app import app

# Export the app for Vercel to use as WSGI application
# Vercel will look for 'app' in this module
__all__ = ['app']


