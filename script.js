// Select DOM elements
const fruit = document.getElementById('fruit');
const scoreElement = document.getElementById('score');
const timeLeftElement = document.getElementById('time-left');

// Initialize game variables
let score = 0;
let timeLeft = 30;

// Array of fruit types
const fruitTypes = ['apple', 'green-apple', 'banana', 'lemon', 'grapefruit', 'watermelon'];

// Add both click and touch events for cross-device compatibility
fruit.addEventListener('click', handleFruitClick);
fruit.addEventListener('touchstart', handleFruitClick);

function handleFruitClick(event) {
    event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
    score++;
    scoreElement.textContent = score;
    moveFruit();
}

// Function to move the fruit to a random position and change its type
function moveFruit() {
    const gameContainer = document.getElementById('game-container');
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    // Get the current size of the fruit (since fruits now have different sizes)
    const fruitWidth = fruit.offsetWidth;
    const fruitHeight = fruit.offsetHeight;

    // Calculate the maximum X and Y positions to keep the fruit inside the container
    const maxX = containerWidth - fruitWidth;
    const maxY = containerHeight - fruitHeight;

    // Generate random positions within the valid range
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Randomly select a fruit type
    const randomFruitType = fruitTypes[Math.floor(Math.random() * fruitTypes.length)];

    // Clear previous classes and apply the new fruit type
    fruit.className = ''; // Reset all classes
    fruit.classList.add(randomFruitType); // Add the new fruit class

    // Move the fruit to a random position
    fruit.style.left = `${randomX}px`;
    fruit.style.top = `${randomY}px`;
}

fruit.addEventListener('click', () => {
    fruit.classList.add('clicked');
    setTimeout(() => fruit.classList.remove('clicked'), 300); // Remove the class after animation
});

// Function to increase the score when the fruit is clicked
fruit.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    moveFruit();
});

// Countdown timer
function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
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
    moveFruit();
    startTimer();
}

// Start the game
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide the button
    startTimer();
    moveFruit();
});