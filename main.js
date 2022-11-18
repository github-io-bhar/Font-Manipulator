var noseX = 0;
var noseY = 0;
var difference = 0;
var leftWristX = 0;
var rightWristX = 0;
function setup() {
    var video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(200, 150);
    var canvas = createCanvas(550, 550);
    canvas.position(560,150);
    var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!'); 
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill('#FFC900');
    text('Notice', noseX, noseY);
    document.getElementById("text_size").innerHTML = "The width and height of the text will be = " + difference + "px";
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}