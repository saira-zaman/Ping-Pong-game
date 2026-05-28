# Ping Pong Game - Python Web Version

A modern Ping Pong game built with Python Flask and deployed on Vercel.

## Features

✨ **Interactive Gameplay**
- Real-time multiplayer Ping Pong game
- Smooth ball physics and paddle collisions
- Live score tracking
- **Win condition with first to 11 points** ✅
- **Professional game-over screen** ✅
- **Proper game control flow** ✅

🎮 **Controls**
- **Player 1:** W (Up) / S (Down)
- **Player 2:** ↑ (Up) / ↓ (Down)
- **SPACE:** Start Game / Pause / Play Again
- **Reset Button:** Reset the game anytime

## Recent Updates (v2.0) ✅

Fixed and improved the game with the following features:
- ✅ **Game now stops** when a player reaches 11 points
- ✅ **Winner is declared** with on-screen message
- ✅ **Paddles stop responding** after game ends
- ✅ **Professional game-over screen** with restart instructions
- ✅ **Proper game loop control** - no infinite loops
- ✅ **Better keyboard controls** - responsive and reliable

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
   git add .
   git commit -m "Update: Fix game logic and add win conditions"
   git push origin main
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
    └── game.js           # Game logic (UPDATED v2.0)
```

## Game Rules

- Each player controls one paddle
- The ball bounces between paddles
- Score a point when opponent misses
- **First player to reach 11 points wins** ✅
- Game stops automatically when winner is declared
- Press SPACE to play again

## Game States

1. **Start Screen** - "Press SPACE to start"
2. **Playing** - Ball moving, paddles active
3. **Paused** - Press SPACE to pause/resume
4. **Game Over** - "Player X WINS!" + restart option

## Author

Created for classic retro gaming enthusiasts.
Fixed and enhanced for professional gameplay.

Enjoy! 🎯
