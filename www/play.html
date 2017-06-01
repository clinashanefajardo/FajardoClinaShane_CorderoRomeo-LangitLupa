<!doctype html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8" />
    <title> Score + Game Over + Button </title>
    <script type="text/javascript" src="js/phaser.min.js"></script>
    <style type="text/css">
        body {
            margin: 0;
        }
    </style>
</head>
<body>

<script type="text/javascript">
var w = 800, h = 600;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

var player, keyboard;
var bundle, shinebundle, shinebundles;
var platform, platform1,  platform2, platform3, life, gameOverText, bestScoreText, nafallkaText, timeText;
var stone, stones;
var five, fives;
var button,button1,button2;
var playbutton,pausebutton,pause,play;


function preload() {
	
	/*game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;*/
	
	
    game.load.image("stone","img/lou4.png");
    game.load.image("aq","img/bg1.png");
    game.load.image("platform","img/platform.png");
    game.load.image("five","img/lou4.png");
    game.load.image("platform1","img/tab3.png");
    game.load.image("platform2","img/brick.png");
    
    
    


    game.load.spritesheet("button","img/button.png",100,100);
    game.load.spritesheet("button1","img/button1.png",100,100);
    game.load.spritesheet("button2","img/button2.png",100,100);
    game.load.spritesheet("playbutton","img/PLAYPAUSE.png",100,100);
    game.load.spritesheet("pausebutton","img/PAUSEPLAY.png",100,100);

    // game.load.spritesheet("left","img/left.png",100,100)
    // game.load.spritesheet("right","img/right.png",100,100)
    game.load.spritesheet("le","img/boy1.png",40,112);
    
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,"aq");
    platform = game.add.sprite(0,580,"platform");
    platform.scale.x = 500; 
    platform1 = game.add.sprite(0,280,"platform1");
    platform1.scale.x = 1;
    platform1.scale.y = 1;
    platform2 = game.add.sprite(450,200,"platform2");
    platform2.scale.x = 1;
    platform2.scale.y = 1;
   
    
    player = game.add.sprite(100,0,"le");

    
    button = game.add.button(197,460,"button",walkright);
    button.scale.x = .9;
    button.scale.y= .9;

    button1 = game.add.button(24,460,"button1",walkleft);
    button1.scale.x = .9;
    button1.scale.y= .9;

    button2 = game.add.button(110,372,"button2",jump);
    button2.scale.x = .9;
    button2.scale.y= .9; 

    playbutton = game.add.button(650,480,"playbutton",play);
    playbutton.scale.x = 1.5;
    playbutton.scale.y= 1.0;

    pausebutton = game.add.button(500,480,"pausebutton",pause);
    pausebutton.scale.x = 1.5;
    pausebutton.scale.y= 1.0;
    // pause = game.add.button(650,420,"pause",pauses); // 690
    // pause.scale.x = 1;
    // pause.scale.y = 1;

    // button2 = game.add.button(650,470,"button2",button2); // 690
    // button2.scale.x = 1;
    // button2.scale.y = 1;

    // button3 = game.add.button(650,520,"button3",button3); // 690
    // button3.scale.x = 1;
    // button3.scale.y = 1;
    game.physics.arcade.enable(platform);
    game.physics.arcade.enable(platform1);
    game.physics.arcade.enable(platform2);
       
    
    


   



    game.world.setBounds(0,0,0,0);

    player.animations.add('walk-right',[4,5,6,7],7,true);
    player.animations.add('walk-left',[8,9,10,11],7,true);

    keyboard = game.input.keyboard.createCursorKeys();

    game.physics.arcade.enable(player);
    // game.physics.arcade.enable(diamond);
    game.physics.arcade.enable(platform);

    platform.body.immovable = true;
    platform1.body.immovable = true;
    platform2.body.immovable = true;
    
    
   

    stone = game.add.group();
    stone.enableBody = true;

    five = game.add.group();
    five.enableBody = true;




   

    createfives(500);
    createstones(1000);
    timer(60,1000);



    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1000;
    player.body.bounce.y = 0.2
    player.scale.y = 1;
    player.scale.x = 2;

    

    life = game.add.text(600,30,'Points: 0',{fill:"green"});
    bestScoreText = game.add.text(600,70,'Best Point: '+getScore(),{fill:"blue"});
    gameOverText = game.add.text((w/2)-100,h/2,'',{fill:"white"});
    timeText = game.add.text(100,50,"Time: 60",{fill:"red"});
    gameOverText = game.add.text((w/2)-100,300,""); 

    
   
    /*game.camera.follow(player,Phaser.Camera.FOLLOW_TOPDOWN); 
    life.fixedToCamera = true;
    bestScoreText.fixedToCamera = true;
    gameOverText.fixedToCamera = true;
    button.fixedToCamera = true;
    button1.fixedToCamera = true;
    button2.fixedToCamera = true;
    playbutton.fixedToCamera = true;
    pausebutton.fixedToCamera = true; */
    


}

function update() {
    game.physics.arcade.collide(player,platform); 
   // game.physics.arcade.collide(fives,platform1);
    game.physics.arcade.collide(stone,platform1);
   // game.physics.arcade.collide(fives,platform2);
    game.physics.arcade.collide(stone,platform2);
   // game.physics.arcade.collide(fives,platform3);
    game.physics.arcade.collide(stone,platform3);
    game.physics.arcade.overlap(player,stone,collectstones);
    game.physics.arcade.overlap(player,five,collectfives);


     if(keyboard.left.isDown){
        // x++
       player.animations.play("walk-left");
        player.body.velocity.x = -300;
    //     // bg.frame = 0;
     }
    else if(keyboard.right.isDown){
    //     // x--;
    //     // bg.frame = 1;
        player.animations.play("walk-right");
        player.body.velocity.x = 300;
     }
     else{
         player.body.velocity.x = 0;
         player.animations.stop();
     }

     if(keyboard.up.isDown/* && player.body.touching.down*/){
         player.body.velocity.y = -500; //-200
         player.body.velocity.x = 0; 
     }
}


    var a = 0;
function collectfives(player,fives){
    a = a + 5;
    fives.kill();
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }

    life.text = "Score: "+a;
}





function collectstones(player,stones){
    player.kill();
    gameOverText.text = "GAME OVER!!";
    game._paused = true;
}
function timer(initTime,microsec){
    setInterval(function(){
        initTime--;
        if(initTime>=0){        
            timeText.text = "Time: "+initTime;
        }
        else{
            game._paused = true;
            gameOverText.text = "Tapos Na.\nHi: "+getData()+"\nScores: "+score;
        }
    },microsec);
}




function createfives(time){
    setInterval(function(){
        var size = Math.random();
        var fives = five.create(Math.random()*w,-500,'five');
        fives.body.gravity.y = 15;
        fives.body.bounce.y = 0.1;
    },time)
}

function createstones(time){
    setInterval(function(){
        var size = Math.random();
        var stones = stone.create(Math.random()*w,-600,'stone');
        stones.body.gravity.y = 20;
        stones.body.bounce.y = 0.1;
    },time)
}


// function paused(){
//     button1.frame = 1;
//     game._paused = true;
//     console.log;
// }

// function paused(){
//     button2.frame = 1;
//     game._paused = true;
//     console.log;
// }

// function paused(){
//     button3.frame = 1;
//     game._paused = true;
//     console.log;
// }

// functions to retrieve and store data in phone memory
function saveScore(Score){
    localStorage.setItem("gameScore",Score);
}

function getScore(){
    return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore");
}

// function lundagNaruto (){
// button.frame = 1;
// if(player.body.touching.down){
// player.body.velocity.y = -500;
// }
// setTimeout(function(){
//     button.frame = 0;

// },100)


// }


// function lundagNaruto1 (){
// left.frame = 0;//([4,5,6,7,8],7,true); //player.animations.add('walk-right',[4,5,6,7],7,true);
// if(player.body.touching.down){
// player.animations.play("walk-left");
// player.body.velocity.x = -300;
// }
// setTimeout(function(){
//     left.frame = 0;

// },100)


// }



// function lundagNaruto2 (){
// right.frame = 0;//([4,5,6,7,8],7,true); //player.animations.add('walk-right',[4,5,6,7],7,true);
// if(player.body.touching.down){
// player.animations.play("walk-right");
// player.body.velocity.x = 300;

// }
// setTimeout(function(){
//     right.frame = 0;

// },100)

function walkright(){
button.frame =1;
if(player.body.touching.down){
player.animations.play("walk-right");
player.body.velocity.x = 300;

}
setTimeout(function(){
button.frame=0;
})
}
function walkleft(){
button1.frame =1;
if(player.body.touching.down){
player.animations.play("walk-left");
player.body.velocity.x = -300;

}
setTimeout(function(){
button1.frame=0;
})
}
function jump(){
button2.frame =1;
if(player.body.touching.down){
player.body.velocity.y=-500;
}
setTimeout(function(){
button2.frame=0;
})
}
function play(){
  {playbutton.frame=1}  
// setTimeout(function(){
    
// playbutton.frame=1;
// game._paused=false;
// });
game._paused=false;
}
function pause(){
  {pausebutton.frame=1}  
setTimeout(function(){
    
pausebutton.frame=1;
game._paused=true;
});
game._paused=true;
}


</script>


</body>
</html