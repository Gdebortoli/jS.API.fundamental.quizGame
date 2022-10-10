
// Pulling the data from the homepage function
const highScoreData= JSON.parse(localStorage.getItem("data"));

// How I want the data to show up on the page
highScoreData.forEach( datum =>{


    document.getElementById("score").innerHTML +=
    `
    <h3>Initials: ${datum.initials}</h3>
    <h3>Score: ${datum.score}</h3>
    <br>
    `
}


);