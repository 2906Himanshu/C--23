const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var box1, ground, box2, box3
function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world
  box1 = new Box(200, 300, 50, 50)
  ground = new Ground(300, 590, 700, 20)
  box2 = new Box(240, 100, 50, 100)
  box3 = new Box(220, 20, 60, 60)
}

function draw() {
  background(0);  
  Engine.update(engine)
  box1.display()
  ground.display()
  box2.display()
  box3.display()
}