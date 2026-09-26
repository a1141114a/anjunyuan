const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("gameMessage");
const restartButton = document.getElementById("restartButton");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

// 플레이어
const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 50,
    width: 50,
    height: 25,
    speed: 6
};

let balls = [];
let leftPressed = false;
let rightPressed = false;

let score = 0;
let frameCount = 0;
let gameOver = false;
let gameStarted = false;

// 플레이어 그리기
function drawPlayer() {
    ctx.fillStyle = "#315f49";
    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

// 공 그리기
function drawBalls() {
    ctx.fillStyle = "#d9534f";

    balls.forEach(function (ball) {
        ctx.beginPath();
        ctx.arc(
            ball.x,
            ball.y,
            ball.radius,
            0,
            Math.PI * 2
        );
        ctx.fill();
    });
}

// 공 생성
function createBall() {
    const radius = 12 + Math.random() * 10;

    balls.push({
        x: radius + Math.random() * (canvas.width - radius * 2),
        y: -radius,
        radius: radius,
        speed: 2 + Math.random() * 2
    });
}

// 플레이어 이동
function movePlayer() {
    if (leftPressed) {
        player.x -= player.speed;
    }

    if (rightPressed) {
        player.x += player.speed;
    }

    // 화면 밖으로 나가지 않도록 제한
    if (player.x < 0) {
        player.x = 0;
    }

    if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width;
    }
}

// 공 이동
function moveBalls() {
    balls.forEach(function (ball) {
        ball.y += ball.speed;
    });

    balls = balls.filter(function (ball) {
        return ball.y - ball.radius < canvas.height;
    });
}

// 충돌 확인
function checkCollision(ball) {
    const closestX = Math.max(
        player.x,
        Math.min(ball.x, player.x + player.width)
    );

    const closestY = Math.max(
        player.y,
        Math.min(ball.y, player.y + player.height)
    );

    const distanceX = ball.x - closestX;
    const distanceY = ball.y - closestY;

    return (
        distanceX * distanceX +
        distanceY * distanceY <
        ball.radius * ball.radius
    );
}

// 게임 종료 확인
function checkGameOver() {
    balls.forEach(function (ball) {
        if (checkCollision(ball)) {
            gameOver = true;
            messageElement.textContent =
                "Game Over! 다시 시작 버튼을 눌러주세요.";
        }
    });
}

// 게임 화면 업데이트
function update() {
    if (gameOver) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePlayer();

    if (gameStarted) {
        frameCount++;

        // 일정 시간마다 공 생성
        if (frameCount % 55 === 0) {
            createBall();
        }

        moveBalls();
        checkGameOver();

        // 점수 증가
        if (!gameOver && frameCount % 10 === 0) {
            score++;
            scoreElement.textContent = score;
        }
    }

    drawPlayer();
    drawBalls();

    requestAnimationFrame(update);
}

// 게임 시작
function startGame() {
    if (!gameStarted && !gameOver) {
        gameStarted = true;
        messageElement.textContent =
            "게임 진행 중! 떨어지는 공을 피하세요.";
    }
}

// 다시 시작
function restartGame() {
    balls = [];
    score = 0;
    frameCount = 0;
    gameOver = false;
    gameStarted = false;

    player.x = canvas.width / 2 - player.width / 2;

    scoreElement.textContent = "0";

    messageElement.textContent =
        "방향키 또는 버튼을 사용하여 게임을 시작하세요.";

    update();
}

// 키보드 조작
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        leftPressed = true;
        startGame();
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        rightPressed = true;
        startGame();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
        leftPressed = false;
    }

    if (event.key === "ArrowRight") {
        rightPressed = false;
    }
});

// 모바일 버튼
function pressLeft(event) {
    event.preventDefault();
    leftPressed = true;
    startGame();
}

function pressRight(event) {
    event.preventDefault();
    rightPressed = true;
    startGame();
}

function stopMoving(event) {
    event.preventDefault();
    leftPressed = false;
    rightPressed = false;
}

leftButton.addEventListener("touchstart", pressLeft);
rightButton.addEventListener("touchstart", pressRight);

leftButton.addEventListener("touchend", stopMoving);
rightButton.addEventListener("touchend", stopMoving);

leftButton.addEventListener("mousedown", pressLeft);
rightButton.addEventListener("mousedown", pressRight);

leftButton.addEventListener("mouseup", stopMoving);
rightButton.addEventListener("mouseup", stopMoving);

leftButton.addEventListener("mouseleave", stopMoving);
rightButton.addEventListener("mouseleave", stopMoving);

// 다시 시작 버튼
restartButton.addEventListener("click", restartGame);

// 최초 화면
update();
