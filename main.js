var poseNet;
var noseX, noseY;
var rightWrist, leftWirst;
var D;

function setup() {
    canvas = createCanvas(900, 600);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(470,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if(results.length>0) {
        //console.log(results);
        noseX =  results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
        //console.log("X "+noseX+" Y "+noseY);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        //console.log("wR "+rightWrist+" wL "+leftWrist);
        D = floor(leftWrist - rightWrist)
        console.log(D)
    }
}

function modelLoaded() {
console.log( 'Model Loaded!' );
}

function draw() {
    background('#969A97')
    fill('#f90093')
    stroke('#f90093')
    square(noseX, noseY, D)
}

function preload() {

}