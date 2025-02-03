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

function moveBubble() {
    const gameContainer = document.getElementById('game-container');
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    // Generate a random size between 30px and 60px
    const randomSize = Math.floor(Math.random() * 30 + 30); // Random size between 30 and 60
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;

    // Generate a random border thickness between 2px and 6px
    const randomBorderThickness = Math.floor(Math.random() * 5 + 2); // Random thickness between 2px and 6px
    bubble.style.borderWidth = `${randomBorderThickness}px`;

    // Generate a random color using HSL (hue, saturation, lightness)
    const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random hue with fixed saturation and lightness
    bubble.style.borderColor = randomColor;

    // Optional: Add a glowing shadow effect
    const randomShadowSize = Math.floor(Math.random() * 10 + 5); // Random shadow size between 5px and 15px
    bubble.style.boxShadow = `0 0 ${randomShadowSize}px ${randomColor}`;

    // Calculate maximum X and Y positions based on the new size
    const maxX = containerWidth - randomSize;
    const maxY = containerHeight - randomSize;

    // Generate random positions within the valid range
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the bubble to a random position
    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;

    // Remove the "popping" class if it exists
    bubble.classList.remove('popping');
}

const randomBorderThickness = Math.floor(Math.random() * 5 + 2); // Random thickness between 2px and 6px
bubble.style.borderWidth = `${randomBorderThickness}px`;

const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random hue with fixed saturation and lightness
bubble.style.borderColor = randomColor;

const randomShadowSize = Math.floor(Math.random() * 10 + 5); // Random shadow size between 5px and 15px
bubble.style.boxShadow = `0 0 ${randomShadowSize}px ${randomColor}`;

const popSound = new Audio('pop.mp3'); // Replace 'pop.mp3' with your sound file

function handleBubbleClick() {
    score++;
    scoreElement.textContent = score;

    // Play the sound effect
    popSound.play();

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
