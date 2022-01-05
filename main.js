status="";
function preload() {

}
function setup() {
    canvas=createCanvas(480,330);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,480,380);
}
function modelLoaded() {
    console.log("model loaded")
    status=true;
}
function start() {
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    document.getElementById("input").value;
}