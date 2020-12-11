const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1;
var backgroundImg,tree;
var rock, slingShot;

function preload() {
    //backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    tree = new Tree(150, 305, 300, 170);

    mango1 = new mango(810, 350);
    
   mango2 = new mango(810, 220);

    bird = new Rock(200,50);

    player= new Player(200,200);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    tree.display();
    mango1.display();

    rock.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
