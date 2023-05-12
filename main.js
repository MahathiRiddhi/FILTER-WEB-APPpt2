function preload() {

}
function setup() {
    canavs = createCanvas(600, 600);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}
function draw() {
    image(600, 600, video);
}
function save() {

}
function modelLoaded() {
    console.log("model Loaded");
}
function gotResult() {
   
}
