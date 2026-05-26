# Ping Pong Game - Python Web Version

A modern Ping Pong game built with Python Flask and deployed on Vercel.

## Features

✨ **Interactive Gameplay**
- Real-time multiplayer Ping Pong game
- Smooth ball physics and paddle collisions
- Live score tracking

🎮 **Controls**
- **Player 1:** W (Up) / S (Down)
- **Player 2:** ↑ (Up) / ↓ (Down)
- **SPACE:** Start/Pause Game
- **RESET:** Reset the game

## Technology Stack

- **Backend:** Python Flask
- **Frontend:** HTML5 Canvas, JavaScript
- **Deployment:** Vercel
- **Styling:** Modern CSS3

## Local Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the application:**
   ```bash
   python app.py
   ```

3. **Open in browser:**
   ```
   http://localhost:5000
   ```

## Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Access your game:**
   - Your Ping Pong game is now live on the internet!

## File Structure

```
ping-pong-game/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── vercel.json           # Vercel configuration
├── templates/
│   └── index.html        # Game HTML
└── static/
    ├── style.css         # Styling
    └── game.js           # Game logic
```

## Game Rules

- Each player controls one paddle
- The ball bounces between paddles
- Score a point when opponent misses
- First player to reach desired score wins

## Author

Created for classic retro gaming enthusiasts.

Enjoy! 🎯
