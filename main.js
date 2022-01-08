//song1=music=harrypotter song2=music2=peterpan
song1 = "";
song2 = "";
function preload() {
    song1 = loadSound("");
    song2 = loadSound("");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 400);
}