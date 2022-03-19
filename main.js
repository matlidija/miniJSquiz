var questions = [
  {
    text : "Is javascript a programming language?" ,
    correctAnswwer : true
  },
  {
    text : "PHP is the same as JS?" ,
    correctAnswwer : false
  },
  {
    text : "CSS is a stylistic language?" ,
    correctAnswwer : true
  }
];

var questionIndex = 0;
var userScore = 0;

function askQuestion() {
  var userAnswwer = confirm(questions[questionIndex].text + "n\ Ok = Da   Cancel = Ne");
  if (questions[questionIndex].correctAnswwer === userAnswwer) {
    userScore++;
  }
  questionIndex++;
  if (questionIndex !== questions.length) {
    askQuestion();
  }

}
askQuestion();

alert("Odgovorili ste na " +userScore +" od " +questions.length);
