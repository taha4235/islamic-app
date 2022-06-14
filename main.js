window.prompt('Enter your name to open the app:')
window.alert("some information about the app: click decrease to plus insraese to - reset to make 0")
window.alert("welcome")
let count = 0;
var countLabel = document.getElementById("countLabel")
var increaseBtn = document.getElementById("increaseBtn")
var decreaseBtn = document.getElementById("decreaseBtn")
var resetBtn = document.getElementById("resetBtn")
decreaseBtn.onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
resetBtn.onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
increaseBtn.onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}