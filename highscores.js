// grabs the element from the HTML
const highScoresList = document.getElementById("highScoresList");
// grabs object from local storage
const highScores = localStorage.getItem("highScores");
// parses out the object into a new var
var user = JSON.parse(highScores);
// console logs for testing
console.log(user.length);
console.log(user);
//This for loop adds each name and high score from the locally stored object
for (var i = 0; i < user.length; i++){
    var liItem = document.createElement("li");
    highScoresList.appendChild(liItem);
    liItem.textContent = user[i].name + ", Score: " + user[i].score;

}
