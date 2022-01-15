music1 =""; 
music2 = "";

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
}

function draw()
{
    image( video, 0, 0, 600, 500);
}