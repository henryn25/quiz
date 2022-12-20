//SELECTORS
const startBtn= document.querySelector("#start-btn");
const displayTimer= document.querySelector(".timer");
const questionContainer= document.querySelector("#questions")
const highScore= document.querySelector(".score");


//VARIABLES
const questionsArray= [
    { question: "Commonly used data types DO NOT include:", options: ["string", "booleans", "alerts", "numbers"], answer: "alerts"},
    { question: "The condition in an if/else statement is enclosed within ______.", options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"], answer: "Parenthesis"},
    { question: "Arrays in JavaScript can be used to store ______.", options: ["numbers and strings", "other arrays", "booleans", "all of the above"], answer: "all of the above"},
    { question: "String values must be enclosed within ______ when being assigned to variables.", options: ["commas", "curly brackets", "quotes", "parenthesis"], answer: "parenthesis"},
    { question: "A very usefull tool used during development and debugging for printing content to the debugger is:", options: ["JavaScript", "terminal/bash", "for loops", "console.log"], answer: "console.log"},
];

let countDown= 75;
let score=0;
let timer;
let renderedQuestion;
const questionLength= questionsArray.length;


//EVENT LISTENERS
startBtn.addEventListener("click", ()=> {
    startBtn.style.display= "none";


     timer= setInterval(()=> {
          countDown -=1;
         displayTimer.innerHTML=`Timer: ${countDown}`;


         if(countDown === 0){
            clearInterval(timer);
            alert("Oops!, your time is up");
    
            highScore.innerHTML= `Score: ${score} out of ${questionLength}`;
            questionContainer.innerHTML= "";
          
        }
    },1000);


    let randomNumber= Math.floor(Math.random() * questionsArray.length);
    let question= questionsArray[randomNumber];
   renderedQuestion= questionsArray.splice(randomNumber, 1);
   
  
    startQuiz(question);
    
})





//FUNCTIONS
function startQuiz(Question){
   if(Question === undefined){
    
    highScore.innerHTML= `Score: ${score} out of ${questionLength}`;
     clearInterval(timer);
     
   }

   questionContainer.innerHTML= "";

    const questionHTML= `
    <div>
    <h2>${Question.question}</h2>
    <ul>
       <li>${Question.options[0]}</li>
       <li>${Question.options[1]}</li>
       <li>${Question.options[2]}</li>
       <li>${Question.options[3]}</li>
    </ul>
</div>  
    `

   

    questionContainer.insertAdjacentHTML("afterbegin", questionHTML)


    const options= document.querySelectorAll("li");
    options.forEach(option=> {
        option.addEventListener("click", ()=> {
        
            if(option.innerHTML === renderedQuestion[0].answer){
                score+=1;
            }

            let randomNumber= Math.floor(Math.random() * questionsArray.length);
            let question= questionsArray[randomNumber];
           renderedQuestion= questionsArray.splice(randomNumber, 1);
         

            startQuiz(question)


        })
       
    });
   
}

