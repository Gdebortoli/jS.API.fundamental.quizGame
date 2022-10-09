
const highScoreData= JSON.parse(localStorage.getItem("data"))



highScoreData.forEach( datum =>{


    document.getElementById("score").innerHTML +=
    `
    <h3>Initials: ${datum.initials}</h3>
    <h3>Score: ${datum.score}</h3>
    <br>
    `
}


)