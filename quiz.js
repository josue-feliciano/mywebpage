const questions = [
    {
      question: "What state was i born in?",
      answers: [
        {text: "Arizona", correct: false},
        {text: "Texas", correct: false},
        {text: "California", correct: false},
        {text: "New Jersey", correct: true},
      ]
    },
    {
        question: "What year did i move to Arizona?",
        answers: [
            {text: "2011", correct: true},
            {text: "2012", correct: false},
            {text: "2013", correct: false},
            {text: "2014", correct: false},
        ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
      selectBtn.classList.add("correct");
      score++;
    if (isCorrect){
        selectBtn.textContent = "CORRECT";
        selectBtn.style.color = "green";
    }
    }else{
      selectBtn.classList.add("incorrect");
      selectBtn.textContent = "INCORRECT";
      selectBtn.style.color = "red";
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";

  }
  
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function    handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

  nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  });
  startQuiz();