// Select DOM elements
const bubble = document.getElementById('bubble');
const scoreElement = document.getElementById('score');
const timeLeftElement = document.getElementById('time-left');
const title = document.getElementById('title');
const startButton = document.getElementById('start-button');

// Initialize game variables
let score = 0;
let timeLeft = 30;
let gameInterval;

// Function to move the bubble to a random position
function moveBubble() {
    const gameContainer = document.getElementById('game-container');
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    const bubbleSize = bubble.offsetWidth;

    const maxX = containerWidth - bubbleSize;
    const maxY = containerHeight - bubbleSize;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the bubble to a random position
    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;

    // Remove the "popping" class if it exists
    bubble.classList.remove('popping');
}

// Function to handle bubble click/tap
function handleBubbleClick() {
    score++;
    scoreElement.textContent = score;

    // Trigger the pop animation
    bubble.classList.add('popping');

    // Wait for the animation to finish before moving the bubble
    setTimeout(() => {
        moveBubble();
    }, 300); // Match the duration of the animation (0.3s)
}

// Countdown timer
function startTimer() {
    gameInterval = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert(`Game Over! Your score is ${score}`);
            resetGame();
        }
    }, 1000);
}

// Reset the game
function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = score;
    timeLeftElement.textContent = timeLeft;

    // Hide the bubble and show the title/start button
    bubble.style.display = 'none';
    title.style.display = 'block';
    startButton.style.display = 'block';
}

// Start the game
function startGame() {
    // Hide the title and start button
    title.style.display = 'none';
    startButton.style.display = 'none';

    // Show the bubble and start the timer
    bubble.style.display = 'block';
    moveBubble();
    startTimer();
}

// Event listeners
bubble.addEventListener('click', handleBubbleClick);
bubble.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    handleBubbleClick();
});

startButton.addEventListener('click', startGame);

// Initial setup
resetGame();
