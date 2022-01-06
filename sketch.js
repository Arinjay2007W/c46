var ground,lander
var landerImg
var bgImg
var vx=0
var g=0.05
var vy=0
var thrust,crash,land;
var left_thruster,right_thruster;
var base;
var obstacle;

function preload() {
  landerImg=loadImage("normal.png")
  bgImg=loadImage("bg.png")
  thrust= loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
  crash=loadAnimation("crash1.png","crash2.png","crash3.png")
  land=loadAnimation("landing1.png","landing2.png","landing_3.png")
  left_thruster=loadAnimation("left_thruster_1.png","left_thruster_2.png")
  right_thruster=loadAnimation("right_thruster_1.png","right_thruster_2.png")
  base=loadImage("lz.png")
  obstacle=loadImage("obstacle.png")

  thrust.playing=true
  thrust.looping=false
  right_thruster.looping=false
  left_thruster.looping=false
}

function setup() {
    createCanvas(1200,750)
    frameRate(80)
    timer=1500
    thrust.frameDelay=5
    right_thruster.frameDelay=5
    left_thruster.frameDelay=5

    lander=createSprite(600,90,30,30)
    lander.addImage("lander",landerImg)
    lander.scale=0.1
    
    lander.addAnimation("thrusting",thrust)
    lander.addAnimation("crashing",crash)
    lander.addAnimation("landing",land)
    lander.addAnimation("right",right_thruster)
    lander.addAnimation("left",left_thruster)
    
    rectMode(CENTER)
    textSize(15)
  
}

function draw() {
  background("blue")
  image(bgImg,0,0,1200,750)

  push()
  fill(255)
  text("Vertical Velocity : "+round(vy),1000,50)

  pop()

  vy=vy+g
  lander.position.y=lander.position.y+vy
  
  drawSprites()
}

function keyPressed() {
  if (keyCode===UP_ARROW){
    upward_thrust()
    lander.changeAnimation("thrusting")
    thrust.nextFrame()
  }
}

function upward_thrust() {
  vy=-1
}