from flask import Flask, render_template, jsonify
from flask_cors import CORS
import os
from pathlib import Path

# Get the absolute path to the project root
BASE_DIR = Path(__file__).parent.absolute()
TEMPLATE_DIR = BASE_DIR / 'templates'
STATIC_DIR = BASE_DIR / 'static'

# Initialize Flask app with absolute paths
app = Flask(
    __name__,
    template_folder=str(TEMPLATE_DIR),
    static_folder=str(STATIC_DIR),
    static_url_path='/static'
)

CORS(app)

@app.route('/')
def index():
    """Serve the main game page"""
    try:
        return render_template('index.html')
    except Exception as e:
        return jsonify({'error': f'Template error: {str(e)}'}), 500

@app.route('/api/status', methods=['GET'])
def api_status():
    """API endpoint to check game status"""
    return jsonify({
        'status': 'ok',
        'game': 'ping-pong',
        'version': '1.0.0'
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

# For local development only
if __name__ == '__main__':
    app.run(debug=True, port=5000)
