let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    displayOptions();
    nextButton.style.display = 'block';
    feedback.textContent = '';
    scoreDisplay.textContent = 'Score: 0';
}

function displayQuestion() {
    questionContainer.textContent = questions[currentQuestionIndex].question;
}

function displayOptions() {
    optionsContainer.innerHTML = '';
    const options = questions[currentQuestionIndex].options;

    for (let i = 0; i < options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.textContent = options[i];
        optionButton.classList.add('btn');
        optionButton.addEventListener('click', () => checkAnswer(options[i]));
        optionsContainer.appendChild(optionButton);
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    }

    scoreDisplay.textContent = `Score: ${score}`;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        displayOptions();
        feedback.textContent = '';
        nextButton.style.display = 'none';
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.textContent = 'Quiz completed!';
    optionsContainer.innerHTML = '';
    feedback.textContent = `Your final score is: ${score} out of ${questions.length}`;
    nextButton.style.display = 'none';
}