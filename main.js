function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
  image(video,0,0,300,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("NoseX= " + results[0].pose.nose.x);
        console.log("NoseY= " + results[0].pose.nose.y);
    }
}