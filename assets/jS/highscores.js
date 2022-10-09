
const initials = JSON.parse(localStorage.getItem("initials"))
const highScore = JSON.parse(localStorage.getItem("score"))

document.getElementById("score").innerHTML=
`
<h2>High Score</h2>
<h3>Initials: ${initials}</h3>
<h3>Score: ${highScore}</h3>
`