 class Game {
constructor (){


    
}

getstate (){
   var gamestateref= database.ref('gameState');
   gamestateref.on("value",function (data){
      gameState=data.val();
   })

}

update (state){
   database.ref('/').update({
      gameState:state
   })
}

start (){
   if(gameState===0){
      player=new Player();
      player.getCount();
      form=new Form();
      form.display();
   }
   c1=createSprite (100,200);
   c2=createSprite (300,200);
   c3=createSprite (500,200);
   c4=createSprite (700,200);
   a1=[c1,c2,c3,c4];
}

play (){

   
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getplayerinfo();
  
      if(allPlayers !== undefined){
         var index=0;
         var x=200;
         var y;
       
        for(var plr in allPlayers){
           index=index+1;
           x=x+200;
           y=displayHeight-allPlayers[plr].distance;
           a1[index-1].x=x;
           a1[index-1].y=y;
          if (index ===  player.index)
           a1[index-1].shapeColor="red";
        camera.position.x=displayWidth/2;
        camera.position.y=a1[index-1].y
  
          //display_position+=20;
         // textSize(15);
         // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      
    }
drawSprites();

}



 }
