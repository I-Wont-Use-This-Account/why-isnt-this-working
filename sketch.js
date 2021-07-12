const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "down"

function setup(){
    var canvas = createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,50);
    floater = new Ground(642,285.71428,389,25);

    polygon = new Polygon(100,350);
    sling = new Sling(polygon.body,{x:100, y:350});

    block1 = new BlockB(642,68,35,45);

    block2 = new BlockP(606.5,113.5,35,45);
    block3 = new BlockP(642,113.5,35,45);
    block4 = new BlockP(677.5,113.5,35,45);

    block5 = new BlockW(571,159,35,45);
    block6 = new BlockW(606.5,159,35,45);
    block7 = new BlockW(642,159,35,45);
    block8 = new BlockW(677.5,159,35,45);
    block9 = new BlockW(713,159,35,45);

    block10 = new BlockP(535.5,204.5,35,45);
    block11 = new BlockP(571,204.5,35,45);
    block12 = new BlockP(606.5,204.5,35,45);
    block13 = new BlockP(642,204.5,35,45);
    block14 = new BlockP(677.5,204.5,35,45);
    block15 = new BlockP(713,204.5,35,45);
    block16 = new BlockP(748.5,204.5,35,45);
    
    block17 = new BlockB(500,250,35,45);
    block18 = new BlockB(535.5,250,35,45);
    block19 = new BlockB(571,250,35,45);
    block20 = new BlockB(606.5,250,35,45);
    block21 = new BlockB(642,250,35,45);
    block22 = new BlockB(677.5,250,35,45);
    block23 = new BlockB(713,250,35,45);
    block24 = new BlockB(748.5,250,35,45);
    block25 = new BlockB(784,250,35,45);
}

function draw(){

    background("gray");

    fill("black")
    textSize(17);
    text("Knock Down the Blocks by Dragging and Releasing the Polygon",20,200);

    Engine.update(engine);

    ground.display();
    floater.display();

    polygon.display();
    sling.display();

    block1.display();

    block2.display();
    block3.display();
    block4.display();

    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

}

//     0     1
//    000    3
//   00000   5
//  0000000  7
// 000000000 9
// 25 blocks needed

function mouseDragged(){
    if(gameState = "down")
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    gameState = "up"
}