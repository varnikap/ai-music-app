music1 =""; 
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    music1 = loadSound("peter.mp3");
    music2 = loadSound("harry_potter_intro.mp3");
}
function stop()
{
    music1.stop();
    music2.stop();
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(400,250);
    video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("PoseNet is Initialized");
}

function draw()
{
    image( video, 0, 0, 600, 500);
}

function gotPoses(results)
{
if(results>0)
{
    leftWristX = results[0].pose.leftWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    console.log("leftWristX = " + leftWristX  + "leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    console.log("rightWristX = " + rightWristX  + "rightWristY = " + rightWristY);
}
}