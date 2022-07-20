mustache_x=0
mustache_y=0

function preload()
{
mustache=loadImage('https://i.postimg.cc/N0hsGHcg/mustache-removebg-preview.png')

}

function setup()
{
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
console.log('poseNet is Initialized')

}

function draw()
{
    image(video,0,0,300,300)
    //fill('red')
    //stroke('red')
    //circle(nose_x,nose_y,30)
    image(mustache,mustache_x-20,mustache_y-10,50,50,)
}

function takeSnapshot()
{
save('myfilterImage.png')
}

function gotPoses(results)
{
if (results.length>0)
{
console.log(results)
console.log('mustace x='+results[0].pose.nose.x)
console.log('mustache y='+results[0].pose.nose.y)
mustache_x=results[0].pose.nose.x
mustache_y=results[0].pose.nose.y
}
}
