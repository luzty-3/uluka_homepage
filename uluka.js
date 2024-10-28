function omikujishow(){
var omikuji1 = ["大吉","中吉","小吉"];
var number = Math.floor(Math.random() * 3);
var message = omikuji1[number];
var object = document.getElementById("omikuji");
object.innerText = message
}