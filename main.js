noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/gjJQ1vhK/clown-nose-clipart-2.png');
}
function setup(){
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300, 300);
 video.hide()

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    
}

function gotPoses(results){
    if(results.length > 0){
        
        console.log("nose x = " + noseX.results[0].pose.nose.x);
        console.log("nose y = " + noseY.results[0].pose.nose.y);
    }
}
function draw(){
 
}
function take_snapshot(){
    save('mustache.jpeg')
}