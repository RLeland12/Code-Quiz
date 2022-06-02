// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score

// ***need to establish global variables****
const startBtn = document.querySelector("#startQuiz");
const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const answerBtnDiv = document.querySelector("#possibleAnswers");
const answerBtn1 = document.querySelector("#Answer1");
const answerBtn2 = document.querySelector("#Answer2");
const answerBtn3 = document.querySelector("#Answer3");
const answerBtn4 = document.querySelector("#Answer4");
const playerForm= document.querySelector("#signUp");
const timer = document.querySelector("#time");
var submitBtn = document.querySelector("#enterScore");
var highScoreBtn = document.querySelector("#highScoreButton");
var answerBtns = document.querySelector("#answerbuttonCSS");
var highS = document.querySelector("#highScore");
var hsInit = document.querySelector("#hsInit")
var score = 100;
var quizTime= 30;
// var timerInterval;

let questions = [
    {
      Q: "What is the diameter of a basketball hoop in inches?",
      choices: ["18 inches", "19 inches", "20 inches", "22 inches"],
      A: "18 inches",
    },
    {
      Q: "The Olympics are held every how many years?",
      choices: ["2", "4", "6", "8"],
      A: "4",
    },
    {
      Q: "What do you call it when a bowler makes three strikes in a row??",
      choices: ["Rabbit", "Horse", "Turkey", "Camel"],
      A: "Turkey"
    },
    {
      Q: "What is the national sport of Canada?",
      choices: ["Football", "Soccer", "Lacrosse", "Hockey"],
      A: "Lacrosse"
    },
    {
      Q: "Which golf tournament did Tiger Woods win by 12 strokes cementing his first-ever major championship win?",
      choices: ["PGA Tour", "The Masters", "The U.S. Open", "The British Open"],
      A: "The Masters"
    },
    {
      Q: "In motor racing, what color is the flag they wave to indicate the winner?'",
      choices: ["Red", "Black", "Yellow", "Checkered"],
      A: "Checkered"
    },
    {
      Q: "In football, how many points does a touchdown hold?",
      choices: ["7", "6", "5", "4"],
      A: "6"
    },
    {
      Q: "In soccer, what body part cannot touch the ball?",
      choices: ["Head", "Shoulders", "Hands", "Back"],
      A: "Hands"
    },
    {
      Q: "What sporting equipment is used for striking a tennis ball?",
      choices: ["A Tennis Bat", "A Tennis Club", "A Tennis Stick", "A Tennis Racquet"],
      A: "A Tennis Racquet"
    },
    {
      Q: "Which of the following sports does not use a ball?",
      choices: ["Golf", " Tennis", "Polo", "Hockey"],
      A: "Hockey"
    }
];
let lastQuestionIndex = questions.length-1;
let runningQuestionIndex = 0;


function renderQuestion(){
    
  let q = questions[runningQuestionIndex];

  questions.innerHTML = q.questions;

  answerBtn1.innerHTML = q.answerBtn1;
  answerBtn1.setAttribute('value', q.answerBtn1)

  answerBtn2.innerHTML = q.answerBtn2;
  answerBtn2.setAttribute('value', q.answerBtn2)
  
  answerBtn3.innerHTML = q.answerBtn3;
  answerBtn3.setAttribute('value', q.answerBtn3)
  
  answerBtn4.innerHTML = q.answerBtn4;
  answerBtn4.setAttribute('value', q.answerBtn4)
};




var quizTime= 30;
function startTimer() {
  var timeInterval = setInterval(function () {
    if (quizTime >= 1) {
      timer.textContent = quizTime + ' seconds remaining';
      quizTime--;
    } else {
      timer.textContent = '';
      clearInterval(timeInterval);
      endQuiz()
    }
  }, 1000);

};

function checkAnswer(){

    
  if(this.innerText === questions[runningQuestionIndex].correct){
      console.log('correct')
      runningQuestionIndex++;
  }
  else{
      console.log('wrong')
      quizTime -= 10
      score -= 25
      if(quizTime < 0){
          quizTime = 0
      }
      timer.textContent = quizTime + ' seconds remaining';
  }
  if(runningQuestionIndex === questions.length){
    localStorage.setItem('score', score);
    console.log(localStorage);
    endQuiz();
}
else{
    renderQuestion();
}
};

function endQuiz(){
  console.log("The quiz has ended");
 playerForm.innerHTML = "Your score was:" + score
};


function start(){
  startTimer();
  renderQuestion();
};





startQuiz.addEventListener("click", start);
answerBtn1.addEventListener("click", checkAnswer);
answerBtn2.addEventListener("click", checkAnswer);
answerBtn3.addEventListener("click", checkAnswer);
answerBtn4.addEventListener("click", checkAnswer);
submitBtn.addEventListener('click', function(event){
  localStorage.setItem('Name',playerForm.value);
  localStorage.setItem('score', score);
  console.log(localStorage);
  highscore()
});

var highscore = function(localStorage){
  if(highS.value < score){
      localStorage.getItem('initials');
      localStorage.getItem('score');
      hsInit.innerHTML = initials
      highS.innerHTML = score
  }
}

    // setTime();
