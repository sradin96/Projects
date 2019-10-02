var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var grid = 16;
var score = 0;
var gameScore; 
var scoreGameOver;
var displaySnake;
var displayMenu;
var displayGameOver;
var newGameButton;
var newGameButtonGameOver;
var collision;
var animation;

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
				break;

		case 1: 
				displaySnake.style.display = "none";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "block";
				break;

		case 2: 
				displaySnake.style.display = "none";
				displayMenu.style.display = "block";
				displayGameOver.style.display = "none";
				break;

	}
	
}

var loop = function() {
		
	animation = window.requestAnimationFrame(loop);
	
 if (++count < 3) {

	 return;
	 	
 }

 count = 0;
 context.clearRect(0, 0,canvas.width,canvas.height);

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
    snake.maxCells++;
	score += 1;
	changeScore(score);
	changeScoreGameOver(score);
    apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;

   }

   for (var i = index + 1; i < snake.cells.length; i++) {

     if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
		collision = true;
		display(1);
	 }

   }
 });
 		
}

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
		window.cancelAnimationFrame(animation)
	}
	score = 0;
	
	display(0);	
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

displaySnake = document.getElementById("canvas");
displayGameOver = document.getElementById("gameover");
displayMenu = document.getElementById("menu");

newGameButton = document.getElementById("newGameBtn");
newGameButton.onclick = function(){
		newGame();
};

newGameButtonGameOver = document.getElementById("newGameBtnGameOver");
newGameButtonGameOver.onclick = function(){
	newGame();
};

gameScore = document.getElementById("score1");
scoreGameOver = document.getElementById("score2");
display(2);
