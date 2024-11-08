// Define a set of questions and answers
const questions = [
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Lettuce", "Onion"],
        correctAnswer: "Avocado"
    },
    {
        question: "What type of food is sushi?",
        options: ["Japanese", "Chinese", "Italian", "Mexican"],
        correctAnswer: "Japanese"
    },
    {
        question: "Which fruit is known as the 'king of fruits'?",
        options: ["Durian", "Mango", "Apple", "Banana"],
        correctAnswer: "Durian"
    },
    {
        question: "Which country is known for inventing pizza?",
        options: ["Italy", "France", "USA", "Mexico"],
        correctAnswer: "Italy"
    },
    {
        question: "What is the main ingredient in a Caesar salad?",
        options: ["Lettuce", "Tomato", "Chicken", "Croutons"],
        correctAnswer: "Lettuce"
    }
];

// Randomize the questions
function getRandomQuestions(numQuestions) {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numQuestions);
}

// Store the selected questions globally
const selectedQuestions = getRandomQuestions(3);

// Display the questions
function displayQuestions() {
    const quizQuestionsContainer = document.getElementById('quiz-questions');

    selectedQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `
            <h2>${index + 1}. ${question.question}</h2>
            ${question.options.map(option => `
                <label>
                    <input type="radio" name="question${index + 1}" value="${option}"> ${option}
                </label>
            `).join('')}
        `;
        quizQuestionsContainer.appendChild(questionDiv);
    });
}

// Handle quiz submission and check answers
document.getElementById('submit-quiz').addEventListener('click', function () {
    let score = 0;

    selectedQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index + 1}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });

    // Store score in localStorage to pass to the result page
    localStorage.setItem('correctAnswers', score);

    // Redirect to result page
    window.location.href = 'result.html';
});

// Initialize the quiz
displayQuestions();
