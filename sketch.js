var database;
var gameState=0;
var playerCount;
var player,form,game;
var allPlayers;
var distance = 0;
var c1,c2,c3,c4,a1;

function setup(){
  createCanvas(displayWidth-550,displayHeight-450);
  database = firebase.database();
 // console.log(database);
 game=new Game();
 game.getstate();
 game.start();

  
}

function draw(){
 if (playerCount ===4){
   game.update(1)
 }
 if (gameState===1){
   clear();
   game.play();
 } 
    
    
  
}
