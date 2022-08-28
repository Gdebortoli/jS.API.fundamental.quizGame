// Quiz Questions, Choices, and Answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title:
            "Which of the following is and example of CamelCase?",
        choices: ["camelcase", "Camelcase", "camel Case", "camelCase"],
        answer: "camelCase"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        title:
            "A function can be nested inside of another function",
        choices: ["Yes", "No", "Sometimes", "I dont know"],
        answer: "Yes"
    },
    {
        title:
            "Which of the following keywords is used to define a variable in JavaScript?",
        choices: ["var", "let", "both var and let", "none of the above"],
        answer: "both var and let"
    }
];

var i = 0;
let score = 0;
let timeLeft = 90;
let globalIndex = 0;
let highScoreIndex = 0;


// #Start Quiz and Remove Homepage Screen after start 
document.querySelector('#start').onclick = function () {
    document.querySelector('.homepage').style.display = "none";
    showQuestions();
    document.addEventListener('#start', () => {
        timeInterval.textContent = timer;
    })
    // Start and Display Timer
    var timerEl = document.getElementById("timer");
    timerEl.textContent = timeLeft;
    function timer() {
        var timeInterval = setInterval(function () {
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft + ' seconds remaining';
                timeLeft--;
            } else if (timeLeft === 1) {
                timerEl.textContent = timeLeft + ' second remaining.';
                timeLeft--;
            } else {
                timerEl.textContent = 'GAME OVER!!';
                clearInterval(timeInterval);
                showScore()
            }
        }, 1000);
    }
    timer();
    // Display questions on the screen after #starting Quiz 

    function showQuestions() {
        if (i < questions.length) {
            document.querySelector('#question-title').innerHTML =
                `<h3>${questions[i].title}</h3>`
            document.querySelector("#question-button").innerHTML=
          `<button class="answerbtn btn btn-secondary btn-lg">${questions[i].choices[0]}</button>
          <button class="answerbtn btn btn-secondary btn-lg">${questions[i].choices[1]}</button>
          <button class="answerbtn btn btn-secondary btn-lg">${questions[i].choices[2]}</button>
          <button class="answerbtn btn btn-secondary btn-lg">${questions[i].choices[3]}</button>`
        } else{
            showScore()
        }

    }
    document.querySelector('#question-button').onclick = function (e) {
        e.preventDefault();
       
        var answer = e.target.innerHTML;
        console.log(answer)
        if (answer === questions[i].answer) {
            document.querySelector('#answers').innerHTML= "Correct!"
            score+=10
        } else {
            document.querySelector('#answers').innerHTML = "Wrong!"
            timeLeft-=10
        }
        // How long it displays whether the answer is wright or wrong
        setTimeout(function () {
            document.querySelector('#answers').innerHTML = ''
            i++;
            showQuestions()
        }, 2000)

    // Subtracting time from your clock when you answer incorrectly

    // Keeping track of points in the Local storage

    // Logging your high score to show up in the high score page
    }}


    function showScore(){
        document.querySelector('#QA').style.display="none";
        document.querySelector('#form').style.display='block';
        document.querySelector('#finalbtn').onclick = function(e){
            e.preventDefault()
            var initials = document.querySelector('#initials').value;
            console.log(initials);
            localStorage.setItem('score', JSON.stringify(score))
            localStorage.setItem('initials', JSON.stringify(initials))

        }

    }


              // <button class="answerbtn btn-secondary btn-lg" onclick="checkAnswer('${questions[i].choices[0]}')">${questions[i].choices[0]}</button>
                // <button class="answerbtn btn-secondary btn-lg" onclick="checkAnswer('${questions[i].choices[1]}')">${questions[i].choices[1]}</button>
                // <button class="answerbtn btn-secondary btn-lg" onclick="checkAnswer('${questions[i].choices[2]}')">${questions[i].choices[2]}</button>
                // <button class="answerbtn btn-secondary btn-lg" onclick="checkAnswer('${questions[i].choices[3]}')">${questions[i].choices[3]}</button>
