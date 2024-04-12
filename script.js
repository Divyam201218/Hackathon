
const quizData = [
{
question: '1. What is the target year to achieve access to adequate and equitable sanitation and hygiene for all?', 
options: ['2030', 
'2050', 
'2045',
'2040'],
answer: '2030',
},
{
question: '2. What is one way to improve water quality?', 
options: ['Increasing pollution', 'Eliminating dumping', 'Wasting water', 'Ignoring conservation'],
answer: 'Eliminating dumping',
},
{
question: '3. What is the main focus of Sustainable Development Goal (SDG) 6',
options: ['Quality Education', 'Clean water and sanitation', 'Gender equality', 'Affordable and clean energy'],
answer: 'Clean water and sanitation',
},
{
question: '4. How many targets are associated with SDG 6?',
options: ['5', '6', '7', '8'],
answer: '8',
},
{
question: '5. Which of the following is a key indicator for assessing progress towards achieving SDG 6 targets?',
options: [
'Percentage of households using improved sanitation facilities',
'Percentage of population with access to electricity',
'Percentage of students enrolled in primary education',
'Percentage of urban population living below the poverty line',
],
answer: 'Percentage of households using improved sanitation facilities',
},


{
question: '6. What is the primary aim of Target 6.2 under SDG 6?', 
options: [
'Ensuring sustainable withdrawals and supply of freshwater', 
'Achieving access to adequate and equitable sanitation and hygiene for all',
'Improving water quality by reducing pollution', 
'Increasing water-use efficiency', 
], 
answer: 'Achieving access to adequate and equitable sanitation and hygiene for all',
},
{
question: '7. According to SDG 6, what percentage of wastewater worldwide is not treated before being discharged into the environment?',
options: ['10%',  
'30%', 
'50%',
'80%', 
],
answer: '80%',
},
{
question: '8. Which of the following statements is true regarding SDG 6 and gender equality?',
options: [
'SDG 6 does not address gender issues', 
'Women and girls are disproportionately affected by lack of access to water and sanitation', 
'Men and women have equal access to clean water and sanitation globally', 
'Gender equality is only relevant to urban areas, not rural communities', 
],
answer: 'Women and girls are disproportionately affected by lack of access to water and sanitation',
},
{
question: '9. Which UN agency leads the monitoring and implementation of SDG 6',
options: [
'UNESCO',
'UNICEF',
'WHO',
'UNEP',
],
answer: 'UNEP',
},
{
question: '10. Which of the following is a key challenge in achieving SDG 6 in urban areas?',
options: ['Lack of freshwater sources',
'Inadequate sanitation infrastructure',
'Limited agricultural land',
'Low population density',], 
answer: 'Inadequate sanitation infrastructure',
},
{
question: '11. Which of the following is not a strategy for promoting water conservation and sustainable use as outlined in SDG 6?', 
options: [ 'Implementing water pricing policies',
'Increasing water-intensive industries',
'Promoting efficient irrigation techniques',],
answer:'Increasing water-intensive industries',
},

{
question: '12.  What is the primary goal of Target 6.b under SDG 6?', 
options: [ 'Increasing investments in water infrastructure',
'Enhancing international cooperation to facilitate access to clean water and sanitation',
'Promoting sustainable agricultural practices',
'Improving water quality by reducing pollution', 
],
answer:'Promoting sustainable agricultural practices',
},

{ question: '13. How does SDG 6 contribute to the broader United Nations Sustainable Development Agenda? ', 
options: [ 'By addressing environmental sustainability',
'By promoting economic growth exclusively',
'By focusing solely on social justice issues',
'By ensuring access to clean water and sanitation for all, which is essential for achieving sustainable development goals in health, education, and poverty reduction.', 
],
answer:'By addressing environmental sustainability',}, 

{ question: '14.  What percentage of the global population lacks access to safely managed drinking water services according to SDG 6 indicators? ', 
options: [ '3%-14%',
'25%-31%',
'57%-66%',
'69%-73%', ],

answer:'69%-73%',}, 



{ question: '15. What is the significance of including SDG 6 in the broader agenda of sustainable development? ', 
options: [ 'Clean water and sanitation are prerequisites for achieving other SDGs',
'Address the quality and sustainability of water resources, which are critical to the survival of people and the planet.',
'It has no direct impact on poverty reduction',
'It focuses solely on industrialized nations', ], 

answer:'Address the quality and sustainability of water resources, which are critical to the survival of people and the planet.',},

{ question: '16. What is the primary purpose of SDG 6.5? ', 
options: [ 'Promoting sustainable agricultural practices',
'Implementing integrated water resources management',
'Encouraging innovation in water technology',
'Enhancing international cooperation to facilitate access to clean water and sanitation', ], 

answer:'Implementing integrated water resources management',}, 

{ question: '17. According to SDG 6, what percentage of the global population is estimated to live in areas experiencing water scarcity at least one month per year? ', 
options: [ '5%',
'10%',
'25%',
'50%', ], 

answer:'50%',}, 

{ question: '18. Which of the following is not a dimension of water quality according to SDG 6? ', 
options: [ 'Chemical',
'Biological',
'Economic',
'Physical', ], 

answer:'Economic',},

{ question: '19. What is the primary purpose of Target 6.3 under SDG 6? ', 
options: [ 'Ensuring sustainable withdrawals and supply of freshwater',
'Achieving access to adequate and equitable sanitation and hygiene for all',
'Improving water quality by reducing pollution',
'Increasing water-use efficiency', ], 

answer:'Ensuring sustainable withdrawals and supply of freshwater',},

{ question: '20. What is the primary purpose of Target 6.4 under SDG 6? ', 
options: [ 'Ensuring sustainable withdrawals and supply of freshwater',
'Achieving access to adequate and equitable sanitation and hygiene for all',
'Improving water quality by reducing pollution',
'Increasing water-use efficiency', ], 

answer:'Increasing water-use efficiency',},


{ question: 'Bonus Question: Which indicator under Sustainable Development Goal 6 (SDG 6) directly measures the proportion of wastewater safely treated before discharge into the environment?', 
options: [ 'Indicator 6.3.2: Percentage of bodies of water with good ambient water quality',
'Indicator 6.3.1: Percentage of wastewater safely treated',
'Indicator 6.1.2: Proportion of population using safely managed sanitation services',
'Indicator 6.2.1: Proportion of population using safely managed drinking water services', ], 

answer:' Indicator 6.2.1: Proportion of population using safely managed drinking water services',},





]



const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}


function displayQuestion() {
const questionData = quizData[currentQuestion];

const questionElement = document.createElement('div');
questionElement.className = 'question';
questionElement.innerHTML = questionData.question;

const optionsElement = document.createElement('div');
optionsElement.className = 'options';

const shuffledOptions = [...questionData.options];
shuffleArray(shuffledOptions);

for (let i = 0; i < shuffledOptions.length; i++) {
const optionDiv = document.createElement('div'); // Use <div> for each option
optionDiv.className = 'option';

const radio = document.createElement('input');
radio.type = 'radio';
radio.name = 'quiz';
radio.value = shuffledOptions[i];

const optionText = document.createTextNode(shuffledOptions[i]);
optionDiv.appendChild(radio);
optionDiv.appendChild(optionText);

optionsElement.appendChild(optionDiv);
}

quizContainer.innerHTML = '';
quizContainer.appendChild(questionElement);
quizContainer.appendChild(optionsElement);
}


function checkAnswer() {
const selectedOption = document.querySelector('input[name="quiz"]:checked');
if (selectedOption) {
const answer = selectedOption.value;
if (answer === quizData[currentQuestion].answer) {
score++;
} else {
incorrectAnswers.push({
question: quizData[currentQuestion].question,
incorrectAnswer: answer,
correctAnswer: quizData[currentQuestion].answer,
});
}
currentQuestion++;
selectedOption.checked = false;
if (currentQuestion < quizData.length) {
displayQuestion();
} else {
displayResult();
}
}
}

function displayResult() {
quizContainer.style.display = 'none';
submitButton.style.display = 'none';
retryButton.style.display = 'inline-block';
showAnswerButton.style.display = 'inline-block';
resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
currentQuestion = 0;
score = 0;
incorrectAnswers = [];
quizContainer.style.display = 'block';
submitButton.style.display = 'inline-block';
retryButton.style.display = 'none';
showAnswerButton.style.display = 'none';
resultContainer.innerHTML = '';
displayQuestion();
}

// function showAnswer() {
// quizContainer.style.display = 'none';
// submitButton.style.display = 'none';
// retryButton.style.display = 'inline-block';
// showAnswerButton.style.display = 'none';

// let incorrectAnswersHtml = '';
// for (let i = 0; i < incorrectAnswers.length; i++) {
// incorrectAnswersHtml += `
// \n
// <strong>Question: </strong> ${incorrectAnswers[i].question}
// \n

// <strong>Your Answer: </strong> ${incorrectAnswers[i].incorrectAnswer}
// \n

// <strong>Correct Answer: </strong> ${incorrectAnswers[i].correctAnswer}
// \n

// `;
// }

// resultContainer.innerHTML = `
// You scored ${score} out of ${quizData.length}!


// Incorrect Answers:


// ${incorrectAnswersHtml}
// `;
// }

// submitButton.addEventListener('click', checkAnswer);
// retryButton.addEventListener('click', retryQuiz);
// showAnswerButton.addEventListener('click', showAnswer);

// displayQuestion();

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

