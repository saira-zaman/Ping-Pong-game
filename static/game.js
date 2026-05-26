// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game objects
const paddleHeight = 80;
const paddleWidth = 10;
const ballSize = 8;
const gameSpeed = 5;

let player1 = {
    x: 20,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    speed: 6,
    dy: 0,
    score: 0
};

let player2 = {
    x: canvas.width - paddleWidth - 20,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    speed: 6,
    dy: 0,
    score: 0
};

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: ballSize,
    dx: gameSpeed,
    dy: gameSpeed,
    speed: gameSpeed
};

let gameRunning = false;
let gamePaused = false;

// Keyboard input
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    
    if (e.key === ' ') {
        e.preventDefault();
        if (!gameRunning) {
            startGame();
        } else {
            togglePause();
        }
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function startGame() {
    gameRunning = true;
    gamePaused = false;
    gameLoop();
}

function togglePause() {
    if (gameRunning) {
        gamePaused = !gamePaused;
    }
}

function resetGame() {
    gameRunning = false;
    gamePaused = false;
    player1.score = 0;
    player2.score = 0;
    player1.y = canvas.height / 2 - paddleHeight / 2;
    player2.y = canvas.height / 2 - paddleHeight / 2;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = gameSpeed;
    ball.dy = gameSpeed;
    updateScores();
    draw();
}

function updateScores() {
    document.getElementById('score1').textContent = player1.score;
    document.getElementById('score2').textContent = player2.score;
}

function movePaddles() {
    // Player 1 controls (W/S)
    if (keys['w'] || keys['W']) {
        player1.y = Math.max(0, player1.y - player1.speed);
    }
    if (keys['s'] || keys['S']) {
        player1.y = Math.min(canvas.height - player1.height, player1.y + player1.speed);
    }

    // Player 2 controls (Arrow keys)
    if (keys['ArrowUp']) {
        player2.y = Math.max(0, player2.y - player2.speed);
    }
    if (keys['ArrowDown']) {
        player2.y = Math.min(canvas.height - player2.height, player2.y + player2.speed);
    }
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off top and bottom walls
    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
        ball.dy = -ball.dy;
        ball.y = ball.y - ball.radius <= 0 ? ball.radius : canvas.height - ball.radius;
    }

    // Check collision with paddles
    if (
        ball.x - ball.radius <= player1.x + player1.width &&
        ball.y >= player1.y &&
        ball.y <= player1.y + player1.height
    ) {
        ball.dx = -ball.dx;
        ball.x = player1.x + player1.width + ball.radius;
        ball.dy += (ball.y - (player1.y + player1.height / 2)) / 10;
    }

    if (
        ball.x + ball.radius >= player2.x &&
        ball.y >= player2.y &&
        ball.y <= player2.y + player2.height
    ) {
        ball.dx = -ball.dx;
        ball.x = player2.x - ball.radius;
        ball.dy += (ball.y - (player2.y + player2.height / 2)) / 10;
    }

    // Check for scoring
    if (ball.x - ball.radius < 0) {
        player2.score++;
        updateScores();
        resetBall();
    }

    if (ball.x + ball.radius > canvas.width) {
        player1.score++;
        updateScores();
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * gameSpeed;
    ball.dy = (Math.random() > 0.5 ? 1 : -1) * gameSpeed;
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw center line
    ctx.strokeStyle = '#444';
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

    // Draw ball
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw pause indicator
    if (gamePaused) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2);
    }
}

function gameLoop() {
    if (gameRunning) {
        if (!gamePaused) {
            movePaddles();
            moveBall();
        }
        draw();
        requestAnimationFrame(gameLoop);
    }
}

// Initialize
updateScores();
draw();

// Start game on page load
window.addEventListener('load', () => {
    console.log('Press SPACE to start the game!');
});
