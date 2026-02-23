# Ping-Pong-game
This is attractive and responsive game that is built by assembly language

Classic Pong Game in x86 Assembly (DOS)
A fully functional Pong game implemented in x86 Assembly language for DOS environments. This project showcases low-level programming, including direct video memory manipulation, BIOS interrupt handling, and real-time game logic, offering a classic gaming experience in a purely text-based interface.

Features
Two-player mode with custom player names.
Real-time ball and paddle movement with collision detection.
Score tracking with automatic win/tie detection.
Adjustable playing field with boundary checks for fair gameplay.
On-screen display of player names, scores, and game messages.
Lightweight and efficient, using direct VGA memory access.

Technical Overview
Programming Language: x86 Assembly (16-bit real mode)
Environment: DOS
Video Rendering: Direct manipulation of VGA text memory (0xB800)
Input Handling: Keyboard input via BIOS interrupt int 0x16
Timing/Delays: BIOS interrupt int 0x15 for smooth ball motion

Game Logic:
Ball movement is updated frame by frame with collision checks for paddles and walls.
Paddle movement is restricted to the field area.
Scores are updated automatically when a player misses the ball.

Controls
Player 1: Up – Arrow Up, Down – Arrow Down
Player 2: Up – Q, Down – A
Pause/Resume: Space key (toggle)
Exit Game: Esc key
Gameplay Flow
Players enter their names at the start.
The ball moves across the field, bouncing off walls and paddles.
Each time a player misses the ball, the opponent scores.
The game continues until a player reaches the winning score, after which the winner or tie message is displayed.
Credits are displayed at the end of the game
