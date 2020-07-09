var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var grid = 16;
<<<<<<< HEAD
=======
var randomQuestion = 0;
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
var randomQuestionA = 0;
var randomQuestionB = 0;
var randomQuestionC = 0;
var randomQuestionD = 0;
var randomQuestionE = 0;
var randomQuestionF = 0;
var sign;
var result1;
var result2; 
var result3;  
var score = 0;
var gameScore; 
var scoreGameOver;
var displaySnake;
var displayMenu;
var displayGameOver;
var displayQuestion;
var displayCorrectQuestion;
var displayWrongQuestion;
var newGameButton;
var newGameButtonGameOver;
var collision;
var animation;
var storedUserName;

var snake = {
x: 160,
y: 160,
dx: grid,
dy: 0,
cells: [],
maxCells: 3
};
var count = 0;
var apple = {
x: 320,
y: 320
};


function getRandomInt(min, max) {
 	return Math.floor(Math.random() * (max - min)) + min;
}

var display = function(displayOption){
	switch(displayOption){                
		case 0: 
				displaySnake.style.display = "block";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 1: 
				displaySnake.style.display = "none";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "block";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 2: 
				displaySnake.style.display = "none";
				displayMenu.style.display = "block";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 3:
				displaySnake.style.display = "block";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "block";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 4:
				displaySnake.style.display = "block";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "block";
				displayWrongQuestion.style.display = "none";
				break;

		case 5:
				displaySnake.style.display = "block";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "block";
				break;
	}
}

var loop = function() {
	animation = window.requestAnimationFrame(loop);	
	
if (++count < 3) {
	return;	 	
}

count = 0;
<<<<<<< HEAD
context.clearRect(0, 0, canvas.width, canvas.height);
=======
context.clearRect(0, 0,canvas.width,canvas.height);
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d

snake.x += snake.dx;
snake.y += snake.dy;

if (snake.x < 0) {
 	snake.x = canvas.width - grid;
}

else if (snake.x >= canvas.width) {
   snake.x = 0;
}

if (snake.y < 0) {
   snake.y = canvas.height - grid;
}

else if (snake.y >= canvas.height) {
   snake.y = 0;
}

snake.cells.unshift({x: snake.x, y: snake.y});

if (snake.cells.length > snake.maxCells) {
 	snake.cells.pop();
}

context.fillStyle = 'red';
context.fillRect(apple.x, apple.y, grid-1, grid-1);

context.fillStyle = 'green';

snake.cells.forEach(function(cell, index) {

context.fillRect(cell.x, cell.y, grid-1, grid-1);  

if (cell.x === apple.x && cell.y === apple.y) {	
	pause();
	display(3);
}
   for (var i = index + 1; i < snake.cells.length; i++) {
     if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
		collision = true;
		display(1);
		highScore();
	 }
   }
 }); 
}

function pause(){
	window.cancelAnimationFrame(animation);
}

function unpause(){
	window.requestAnimationFrame(loop);
}
var enterKey;
window.addEventListener('keydown', function (e) {
	var key = e.keyCode;
	if(key === 80){
		pause();
	}else if(key === 79){
		unpause();
	}
<<<<<<< HEAD
	if(key === 13){
		document.getElementById("questionBtn").click();
		document.getElementById("newGameBtn").click();
		document.getElementById("newGameBtnGameOver").click();
		document.getElementById("correctQBtn").click();
		document.getElementById("wrongQBtn").click();
=======
	if(key === 13){	
		 if(displayCorrectQuestion.style.display == "block"){
			document.getElementById("correctQBtn").click();
		}else if(displayWrongQuestion.style.display == "block"){
			document.getElementById("wrongQBtn").click();
		}else if(displayMenu.style.display = "block"){
			document.getElementById("newGameBtn").click();
		}else if(displayGameOver.style.display == "block"){
			document.getElementById("newGameBtnGameOver").click();
		}
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
	}
});

document.addEventListener('keydown', function(e) {
	if (e.which === 37 && snake.dx === 0) {
   		snake.dx = -grid;
   		snake.dy = 0;
	}
 	else if (e.which === 38 && snake.dy === 0) {

   		snake.dy = -grid;
   		snake.dx = 0;
	}
 	else if (e.which === 39 && snake.dx === 0) {
   		snake.dx = grid;
   		snake.dy = 0;
	}
 	else if (e.which === 40 && snake.dy === 0) {
   		snake.dy = grid;
   		snake.dx = 0;
	}
});

function changeScore(scoreValue){
	gameScore.innerHTML = String(scoreValue);
}

function changeScoreGameOver(scoreValue){
	scoreGameOver.innerHTML = String(scoreValue);
}

var newGame = function(){	
	if (animation) {
		pause();
	}
	if(snake.maxCells < 10){
		randomLevelOne();
		document.getElementById("levelOne").style.color = "#4CAF50";
<<<<<<< HEAD
=======
		document.getElementById("levelTwo").style.color = "white";
		document.getElementById("levelThree").style.color = "#white";
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
	}else if(snake.maxCells >= 10 && snake.maxCells < 20){
		randomLevelTwo();
		document.getElementById("levelOne").style.color = "white";
		document.getElementById("levelTwo").style.color = "#4CAF50";
<<<<<<< HEAD
=======
		document.getElementById("levelThree").style.color = "#white";
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
	}else if(snake.maxCells >= 20){
		randomLevelThree();
		document.getElementById("levelOne").style.color = "white";
		document.getElementById("levelTwo").style.color = "white";
		document.getElementById("levelThree").style.color = "#4CAF50";
	}
	if(document.getElementById("myBtnUser").innerHTML !== storedUserName){		
		myFunction();
	}else{
		display(0);
	}
	score = 0;
	operationSign();	
	changeScore(0);
	changeScoreGameOver(0);
	snake.x = 160;
	snake.y = 160;
	snake.cells = [];
	snake.maxCells = 3;
	snake.dx = grid;
	snake.dy = 0;	
	apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;	
	loop();	
}

var continueGame = function(){
	display(0);	
	unpause();
	if(snake.maxCells < 10){
		randomLevelOne();
		document.getElementById("levelOne").style.color = "#4CAF50";
	}else if(snake.maxCells >= 10 && snake.maxCells < 20){
		randomLevelTwo();
		document.getElementById("levelOne").style.color = "white";
		document.getElementById("levelTwo").style.color = "#4CAF50";
	}else if(snake.maxCells >= 20){
		randomLevelThree();
		document.getElementById("levelOne").style.color = "white";
		document.getElementById("levelTwo").style.color = "white";
		document.getElementById("levelThree").style.color = "#4CAF50";
	}
	operationSign();
	var a = document.getElementById("inputAnswer").autofocus;
	inputAnswer.value = null;	
}

var correctQuestion = function(){	
	display(4);
	apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;
}

var wrongQuestion = function(){
	display(5);	
	apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;
<<<<<<< HEAD
	if(score < 10){
		document.getElementById("questionsAS").innerHTML = result1;
	}else if(score >= 10 && score < 20){
		document.getElementById("questionsAS").innerHTML = result2;
	}else if(score >= 20){
=======
	if(snake.maxCells < 10){
		document.getElementById("questionsAS").innerHTML = result1;
	}else if(snake.maxCells >= 10 && snake.maxCells < 20){
		document.getElementById("questionsAS").innerHTML = result2;
	}else if(snake.maxCells >= 20){
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
		document.getElementById("questionsAS").innerHTML = result3;	
	}	
}

function operationSign(){
	var operation = ['+', '-', '*', '/'];
	var randomOperation = operation[Math.floor(Math.random() * operation.length)];
	sign = randomOperation;
	document.getElementById("operation").innerHTML = randomOperation;
}

function randomLevelOne(){
	var randomA = Math.floor(Math.random() * 10) + 1;
	var randomB = Math.floor(Math.random() * 10) + 1;

	var resDivide;
	var divide = randomA % randomB === 0;
	var belongs;
	var undivide = ['1', '2', '3', '5', '7'];
	belongs = undivide.includes(randomA);

	while(belongs==true){
		randomA = Math.floor(Math.random() * 10) + 1;
		belongs = undivide.includes(randomA);

		if(belongs==false){
			break;
		}
	}
	while(randomA % randomB != 0){
		divide = false;
		randomB = Math.floor(Math.random() * 10) + 1;
		if(randomA % randomB == 0){
			divide = true;
			break;
		}
	}
	resDivide = randomA / randomB;

	document.getElementById("questionsA").innerHTML = randomA;
	document.getElementById("questionsB").innerHTML = randomB;
	randomQuestionA = randomA;
	randomQuestionB = randomB;
}

function newGameLevelOne(){
	document.getElementById("levelOne").style.color = "#4CAF50";
	document.getElementById("levelTwo").style.color = "white";
	document.getElementById("levelThree").style.color = "white";
	if(document.getElementById("myBtnUser").innerHTML !== storedUserName){		
		myFunction();
		display(2);
	}else{
		newGame();
		randomLevelOne();
		changeScore(score);
		changeScoreGameOver(score);
	}	
}

function randomLevelTwo(){
	var randomC = Math.floor(Math.random() * 20) + 1;
	var randomD = Math.floor(Math.random() * 20) + 1;
	var resDivide2;
	var divide2 = randomC % randomD === 0;
	var belongs2;
	var undivide2 = ['1', '2', '3', '5', '7', '11', '13', '17', '19'];
	belongs2 = undivide2.includes(randomC);

	while(belongs2==true){
		randomC = Math.floor(Math.random() * 20) + 1;
		belongs2 = undivide2.includes(randomC);

		if(belongs2==false){
			break;
		}
	}
	while(randomC % randomD != 0){
		divide2 = false;
		randomD = Math.floor(Math.random() * 20) + 1;
		if(randomC % randomD == 0){
			divide2 = true;
			break;
		}
	}
	resDivide2 = randomC / randomD;
	if(sign == '*' && randomC > 10){
		randomD = randomC <= 10 ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 10) + 1;
	}
	document.getElementById("questionsA").innerHTML = randomC;
	document.getElementById("questionsB").innerHTML = randomD;
	randomQuestionC = randomC;
	randomQuestionD = randomD;
}

function newGameLevelTwo(){
	document.getElementById("levelOne").style.color = "white";
	document.getElementById("levelTwo").style.color = "#4CAF50";
	document.getElementById("levelThree").style.color = "white";
	if(document.getElementById("myBtnUser").innerHTML !== storedUserName){		
		myFunction();
		display(2);
	}else{
<<<<<<< HEAD
		newGame();
=======
		newGame();	
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
		snake.maxCells += 10;
		randomLevelTwo();	
		changeScore(score); 
		changeScoreGameOver(score);
	}
		
}

function randomLevelThree(){
	var randomE = Math.floor(Math.random() * 100) + 1;
	var randomF = Math.floor(Math.random() * 100) + 1;
	var resDivide3;
	var divide3 = randomE % randomF === 0;
	var belongs3;
	var undivide3 = ['1', '2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31', '37', '41', '43', '47', '49', '53', '59', '61', '67', '71', '73', '77', '79', '83', '89', '97'];
	belongs3 = undivide3.includes(randomE);
	while(belongs3==true){
		randomE = Math.floor(Math.random() * 100) + 1;
		belongs3 = undivide3.includes(randomE);

		if(belongs3==false){
			break;
		}
	}
	while(randomE % randomF != 0){
		divide3 = false;
		randomF = Math.floor(Math.random() * 100) + 1;
		if(randomE % randomF == 0){
			divide3 = true;
			break;
		}
	}
	resDivide3 = randomE / randomF;

	if(sign == '*' && randomE > 10){
		randomF = randomE <= 10 ? Math.floor(Math.random() * 100) + 1 : Math.floor(Math.random() * 10) + 1;
	}	
	document.getElementById("questionsA").innerHTML = randomE;
	document.getElementById("questionsB").innerHTML = randomF;
	randomQuestionE = randomE;
	randomQuestionF = randomF;
}

function newGameLevelThree(){
	document.getElementById("levelOne").style.color = "white";
	document.getElementById("levelTwo").style.color = "white";
	document.getElementById("levelThree").style.color = "#4CAF50";
	if(document.getElementById("myBtnUser").innerHTML !== storedUserName){		
		myFunction();
		display(2);
	}else{
		newGame();
<<<<<<< HEAD
		randomLevelThree();	
=======
		randomLevelThree();			
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
		snake.maxCells += 20;
		changeScore(score);
		changeScoreGameOver(score);
	}	
}

function submitAnswers(){
	var i = inputAnswer.value;
	var outcome1;
	if(document.getElementById("questionsA").innerHTML == randomQuestionA && document.getElementById("questionsB").innerHTML == randomQuestionB){
		if(sign == '+'){
			outcome1 = randomQuestionA + randomQuestionB;
			result1 = outcome1;
		}else if(sign == '-'){
			outcome1 = randomQuestionA - randomQuestionB;
			result1 = outcome1;
		}else if(sign == '*'){
			outcome1 = randomQuestionA * randomQuestionB;
			result1 = outcome1;							
		}else if(sign == '/'){
				outcome1 = randomQuestionA / randomQuestionB;
				result1 = outcome1;						
		}if(i == result1){
			correctQuestion();
			snake.maxCells++;
			score += 1;
			changeScore(score);
			changeScoreGameOver(score);
		}else{
			wrongQuestion();
		}
	}
	var outcome2;
	if(document.getElementById("questionsA").innerHTML == randomQuestionC && document.getElementById("questionsB").innerHTML == randomQuestionD){
		if(sign == '+'){
			outcome2 = randomQuestionC + randomQuestionD;
			result2 = outcome2;
		}else if(sign == '-'){
			outcome2 = randomQuestionC - randomQuestionD;
			result2 = outcome2;
		}else if(sign == '*'){
			outcome2 = randomQuestionC * randomQuestionD;
			result2 = outcome2;							
		}else if(sign == '/'){
			outcome2 = randomQuestionC / randomQuestionD;
			result2 = outcome2;	
		}if(i == result2){
			correctQuestion();
			snake.maxCells++;
			score += 1;
			changeScore(score);
			changeScoreGameOver(score);
		}else{
			wrongQuestion();
		}
	}
	var outcome3;
	if(document.getElementById("questionsA").innerHTML == randomQuestionE && document.getElementById("questionsB").innerHTML == randomQuestionF){
		if(sign == '+'){
			outcome3 = randomQuestionE + randomQuestionF;
			result3 = outcome3;
		}else if(sign == '-'){
			outcome3 = randomQuestionE - randomQuestionF;
			result3 = outcome3;
		}else if(sign == '*'){
			outcome3 = randomQuestionE * randomQuestionF;
			result3 = outcome3;							
		}else if(sign == '/'){
			outcome3 = randomQuestionE / randomQuestionF;
			result3 = outcome3;	
		}if(i == result3){
			correctQuestion();
			snake.maxCells++;
			score += 1;
			changeScore(score);
			changeScoreGameOver(score);
		}else{
			wrongQuestion();
		}
	}
}

var nm = document.getElementById("nm");
var pw = document.getElementById("pw");
var unm = document.getElementById("unm");
document.getElementById("myBtn3").style.display = "none";
document.getElementById("myBtnEdit").style.display = "none";

function storeUser(){
	localStorage.setItem("nm", nm.value);
	localStorage.setItem("pw", pw.value);
	localStorage.setItem("unm", unm.value);
	modal.style.display = "none";
	nm.value = null;
	unm.value = null;
	pw.value = null;
}

function checkUser(){
    var storedName = localStorage.getItem("nm");
    var storedPw = localStorage.getItem("pw");
	var storedUnm = localStorage.getItem("unm");
	storedUserName = storedUnm;
    if(document.getElementById("userName").value === storedName && document.getElementById("userPw").value === storedPw){		
		document.getElementById("myBtnUser").innerHTML = storedUnm;
		document.getElementById("myBtn3").style.display = "block";
		document.getElementById("myBtn2").style.display = "none";
		document.getElementById("myBtn").style.display = "none";
<<<<<<< HEAD
		document.getElementById("myBtnUser").style.display = "block";			
=======
		document.getElementById("myBtnUser").style.display = "block";		
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
		modal2.style.display = "none";
		display(2);
		userName.value = null;
		userPw.value = null;
    }	
}

function logoutUser(){
	document.getElementById("myBtn2").style.display = "block";
	document.getElementById("myBtn").style.display = "block";
	document.getElementById("myBtn3").style.display = "none";
	document.getElementById("myBtnEdit").style.display = "none";
	document.getElementById("myBtnUser").style.display = "none";
	localStorage.setItem("nm", null);
	localStorage.setItem("pw", null);
	localStorage.setItem("unm", null);
	display(2);
	checkUser();
}

function highScore(){
	if(storedUserName !== localStorage.getItem("unm")){
		document.getElementById("scoreUser1").innerHTML = score;
<<<<<<< HEAD
	}else{
		document.getElementById("user1").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser1").innerHTML = score;
	}if(document.getElementById("user1").innerHTML !== storedUserName && document.getElementById("user2").innerHTML !== document.getElementById("user1").innerHTML){
		document.getElementById("user2").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser2").innerHTML = score;
	}else{
		document.getElementById("user2").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser2").innerHTML = score;
	}if(document.getElementById("user3").innerHTML !== storedUserName && document.getElementById("user2").innerHTML !== document.getElementById("user1").innerHTML){
		document.getElementById("user2").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser2").innerHTML = score;
	}else{
		document.getElementById("user3").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser3").innerHTML = score;
=======
	}else if(document.getElementById("user1").innerHTML !== storedUserName && document.getElementById("user2").innerHTML !== document.getElementById("user1").innerHTML){
		document.getElementById("user2").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser2").innerHTML = score;
	}else{
		document.getElementById("user1").innerHTML = localStorage.getItem("unm");
		document.getElementById("scoreUser1").innerHTML = score;
>>>>>>> 20d2d34bde0db056c7b5ad6e21baad01438cfa7d
	}
}

function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

displaySnake = document.getElementById("canvas");
displayGameOver = document.getElementById("gameover");
displayMenu = document.getElementById("menu");
displayQuestion = document.getElementById("question");
displayCorrectQuestion = document.getElementById("correctquestion");
displayWrongQuestion = document.getElementById("wrongquestion");

newGameButton = document.getElementById("newGameBtn");
newGameButton.onclick = function(){
		newGame();
};

newGameButtonGameOver = document.getElementById("newGameBtnGameOver");
newGameButtonGameOver.onclick = function(){
	newGame();
};

questionButton = document.getElementById("questionBtn");
questionButton.onclick = function(){
	submitAnswers();
};

correctQuestionButton = document.getElementById("correctQBtn");
correctQuestionButton.onclick = function(){
	continueGame();
};

wrongQuestionButton = document.getElementById("wrongQBtn");
wrongQuestionButton.onclick = function(){
	continueGame();
};

gameScore = document.getElementById("score1");
scoreGameOver = document.getElementById("score2");
display(2);

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close");

btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("myPopup").style.display = "none";
}

btn2.onclick = function() {
	modal2.style.display = "block";
	document.getElementById("myPopup").style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
	modal.style.display = "none";
	modal2.style.display = "none";
  }
}

