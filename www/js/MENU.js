var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'gameDiv');




var background;
var panuto, tungkol;
var mainState = {

    preload:function(){

    game.load.image("background","img/pretty.png")
    game.load.image("play","img/play.png")
    game.load.image("ins","img/ins.png")
    game.load.image("about","img/about.png")
    game.load.image("set","img/set.png")
    },

    create:function(){

     game.add.sprite(0,0,"background");

    play = game.add.button(200,200,"play",start);
    ins = game.add.button(165,250,"ins",panuto);
    about = game.add.button(505,250,"about",tungkol);
    set = game.add.button(500,200,"set");
    },


    update: function () {

},
}


function start ()
{
     window.location.href="play.html";
  {start.frame=0}  
setTimeout(function(){
    
start.frame=0;
game._paused=false;
},50);
}

function panuto ()
{
     window.location.href="INS.html";
  {panuto.frame=0}  
setTimeout(function(){
    
panuto.frame=0;
game._paused=false;
},50);
}

function tungkol ()
{
     window.location.href="about.html";
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");