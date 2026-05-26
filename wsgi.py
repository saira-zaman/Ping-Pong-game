"""
WSGI configuration for Vercel deployment.
This file makes the Flask app compatible with Vercel's serverless environment.
"""

import sys
import os

# Add current directory to path
current_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, current_dir)

from app import app

# Make the app available as a WSGI application
wsgi_app = app

if __name__ == "__main__":
    app.run()
