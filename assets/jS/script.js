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
        timeInterval.textContent = time;
    })
    // Start Timer
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
                timerEl.textContent = '';
                clearInterval(timeInterval);
            }
        }, 1000);
    }
    timer();

    // Display questions on the screen after #starting Quiz 
    function showQuestions() {
        if (i < questions.length) {

            document.querySelector('.questions').innerHTML =
                `<h3>${questions[i].title}</h3>
          <button class="btn btn-secondary">${questions[i].choices[0]}</button>
          <button class="btn btn-secondary">${questions[i].choices[1]}</button>
          <button class="btn btn-secondary">${questions[i].choices[2]}</button>
          <button class="btn btn-secondary">${questions[i].choices[3]}</button>`
        }

    }

    // Funtion to display when questions are RIGHT or WRONG 
    document.querySelector('.questions').onclick = function (e) {
        e.preventDefault()
        var answer = e.target.innerHTML;
        if (answer === questions[i].answer) {
            document.querySelector('.answers').innerHTML = "Correct!"
        } else {
            document.querySelector('.answers').innerText = "Wrong!"
        }
        // How long it displays whether the answer is wright or wrong
        setTimeout(function () {
            document.querySelector('.answers').innerHTML = ''
            i++;
            showQuestions()
        }, 2000)

    };

    // Displaying the time clock on the page 
    // var timeInterval = setInterval(function () {
    //     if (secondsLeft > 1) {
    //         secondsLeft--;
    //         document.querySelector('#timer').textContent - secondsLeft
    //     } else if (secondsLeft === 1) {
    //         document.querySelector('#timer').textContent - secondsLeft
    //         secondsLeft--;
    //     } else {
    //         document.querySelector('#timer').textContent - secondsLeft
    //         clearInterval(timeInterval);
    //         displayMessage();
    //     }
    // }, 60000);
    // }
    // timeInterval = setInterval (function (){
    // document.querySelector('#timer').timer = time;
    // if (time === 0) {
    //     clearInterval(timeInterval)
    // }
    //     document.getElementById('#timer') = 90 - time;
    //     time-= 1;




    // Subtracting time from your score when you answer incorrectly

    // how to display and hold info in local storage - (console log answers?
}