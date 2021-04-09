const Bodies = Matter.Bodies;//used for creating object present in the game
const Engine = Matter.Engine;//namespace means giving nickname or small name
const World = Matter.World;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

myengine = Engine.create();
myworld = myengine.world;
var options ={
  isStatic:true
}

ground= Bodies.rectangle(400,390,800,20,options)
World.add(myworld,ground);

/*var balloptions = {
  restitution:1
}

ball = Bodies.circle(400,200,40,balloptions);
World.add(myworld,ball);*/

box1 = new Box(300,150,30,30);
box2 = new Box(290,100,30,100);




console.log(ground);

}

function draw() {

  background("pink");  

  Engine.update(myengine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);

box1.display()
box2.display();


 // ellipseMode(RADIUS);
 // ellipse(ball.position.x,ball.position.y,40,40);
}