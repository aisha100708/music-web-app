//song1=music=harrypotter song2=music2=peterpan
song1 = "";
song2 = "";
leftWrist_x  = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
function preload() {
    song1 = loadSound("");
    song2 = loadSound("");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 400);
}
function modelLoaded() {
    console.log("Posenet is initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("leftWrist_x = " + leftWrist_x);
        console.log("leftWrist_y = " + leftWrist_y);
        console.log("rightWrist_x = " + rightWrist_x);
        console.log("rightWrist_y = " + rightWrist_y);
    }
}