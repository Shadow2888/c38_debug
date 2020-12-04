class Form {
    constructor (){
    
   this.input = createInput("NAME");
    this.button = createButton('play');
    this.greeting=createElement('h3');
    }
    hide (){
        this.input.hide ();
        this.button .hide ();
        this.greeting.hide ();
    }
    display(){

        var title=createElement('h2');
        title.html("car racing");
        title.position(130,0);

      
        this.input.position(200,160);

       
        this.button.position(220,200);
        

       this.button.mousePressed(()=>{
        this.input.hide ();
        this.button .hide ();
      
        player.name = this.input.value();
            playerCount=playerCount+1;
            player.index= playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.hide ();
            this.greeting.html("hello "+player.name);
            this.greeting.position(130,200);
        })
    }
    
    
    
    
    
    
    
    
    
     }