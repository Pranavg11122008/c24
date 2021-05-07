const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,60,20);
    rubber1 = new Rubber(600,60,20);
    rubber2= new Rubber(600,60,20);
    rubber3 = new Rubber(600,60,20);
    rubber4 = new Rubber(600,60,20);
    rubber5 = new Rubber(600,60,20);
    rubber6 = new Rubber(600,60,20);
    rubber7 = new Rubber(600,60,20);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();

    
 
}