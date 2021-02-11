const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, ground1, polygon,launch,polyImg;

function preload(){
    polyImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(600,390,1200,20);
    ground2=new Ground(410,305,220,10);
    
    
    ground4=new Ground(300,305,5,15);
    ground5=new Ground(520,305,5,15);
    

    block1= new Block(330,215,30,40);
    block2= new Block(360,220,30,40);
    block3= new Block(390,230,30,40);
    block4= new Block(420,250,30,40);
    block5= new Block(450,270,30,40);
    block6= new Block(360,280,30,40);
    block7= new Block(390,290,30,40);
    block8= new Block(420,299,30,40);
    block9= new Block(390,303,30,40);

    polygon= Bodies.circle(50,200,20)
    World.add(world,polygon);

    launch=new Launcher(this.polygon,{x:100,y:200}); 
    
    textSize(30);

    
}

function draw(){
    background("black");
    Engine.update(engine);

    text("Drag the haxagon and then release it to throw it and to hit the boxes...",30,30);
    
    imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,42,42);

    launch.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    ground1.display();
    ground2.display();
    
    ground4.display();
    ground5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launch.fly(); 
}

function keyPressed(){
    if(keyCode === 32){
        launch.attach(polygon);
    }
}