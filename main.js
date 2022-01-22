//song1=music=harrypotter=rightwrist song2=music2=peterpan=leftwrist
song1 = "";
song2 = "";
leftWrist_x  = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_score = 0;
rightWrist_score = 0;
song2_status = "";
song1_status = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
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
        leftWrist_score = results[0].pose.keypoints[9].score;
        console.log("leftWrist_score = " + leftWrist_score);
        rightWrist_score = results[0].pose.keypoints[10].score;
        console.log("rightWrist_score = " + rightWrist_score);
    }
}
function draw() {
    image(video, 0, 0, 600, 400);
    fill("red");
    stroke("red");
    song2_status = song2.isPlaying();
    song1_status = song1.isPlaying();
    if (leftWrist_score > 0.2) {
        circle(leftWrist_x, leftWrist_y, 20);
        song1.stop();
        if (song2_status == false) {
            song2.play();
            document.getElementById("song_name").innerHTML = "Song Name: Peter Pan Song";
        }
    }
    if (rightWrist_score > 0.2) {
        circle(rightWrist_x, rightWrist_y, 20);
        song2.stop();
        if (song1_status == false) {
            song1.play();
            document.getElementById("song_name").innerHTML = "Song Name: Harry Potter Theme Song";
        }
    }
}