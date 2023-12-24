noseX=0;
noseY=0;

function preload() {
    mustache = loadImage("mustache.png");
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.position(470, 230)
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX =  + results[0].pose.nose.x-40;
    noseY =  + results[0].pose.nose.y;
    }
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 80, 35)
}

function take_snapshot(){
    save('myFilterImage.png')
}