"""
Vercel serverless function entry point for the Flask Ping Pong game.
"""

import sys
import os
from pathlib import Path

# Get the parent directory (project root)
project_root = str(Path(__file__).parent.parent)
sys.path.insert(0, project_root)

# Import and configure the Flask app
from app import app

# This is the WSGI application that Vercel will run
application = app

# Ensure Flask is in production mode
app.config['ENV'] = 'production'
app.config['DEBUG'] = False

# Export for Vercel
__all__ = ['app', 'application']

