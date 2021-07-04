const c = document.querySelector('canvas')
const ctx = c.getContext('2d')




// ctx.fillRect(5,140,25,5)


const ball = {
    x:15,
    y:110,
    size:7,
    dx:5,
    dy:4
}
const skater = {
    width:50,
    height:5,
    x:5,
    y:140,
    speed:5,
    dx:0,
    dy:0
}


// ball operations

function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.size,0,Math.PI * 2)
    ctx.fillStyle = 'purple'
    ctx.fill()
}


// drawPlayer()
document.addEventListener('keydown',keyDown)
document.addEventListener('keyup',keyUp)

function drawPlayer(){
    ctx.fillRect(skater.x,skater.y,skater.width,skater.height)
}

function drawSky(){
    ctx.fillRect(5,5,25,5)
    ctx.fillRect(35,5,25,5)
    ctx.fillRect(65,5,25,5)
    ctx.fillRect(95,5,25,5)
    ctx.fillRect(125,5,25,5)
    ctx.fillRect(155,5,25,5)
    ctx.fillRect(185,5,25,5)
    ctx.fillRect(215,5,25,5)
    ctx.fillRect(245,5,25,5)
    ctx.fillRect(275,5,25,5)

    ctx.fillRect(5,15,25,5)
    ctx.fillRect(35,15,25,5)
    ctx.fillRect(65,15,25,5)
    ctx.fillRect(95,15,25,5)
    ctx.fillRect(125,15,25,5)
    ctx.fillRect(155,15,25,5)
    ctx.fillRect(185,15,25,5)
    ctx.fillRect(215,15,25,5)
    ctx.fillRect(245,15,25,5)
    ctx.fillRect(275,15,25,5)

    ctx.fillRect(5,25,25,5)
    ctx.fillRect(35,25,25,5)
    ctx.fillRect(65,25,25,5)
    ctx.fillRect(95,25,25,5)
    ctx.fillRect(125,25,25,5)
    ctx.fillRect(155,25,25,5)
    ctx.fillRect(185,25,25,5)
    ctx.fillRect(215,25,25,5)
    ctx.fillRect(245,25,25,5)
    ctx.fillRect(275,25,25,5)
// drawBall()
}

function clear(){
    ctx.clearRect(0,0,c.width,c.height)
}

function update(){
    clear()

    drawSky()

    drawPlayer()

    newPos()

    drawBall()    

    newBallPos()
    
    checkCollision()

    requestAnimationFrame(update)
}

function checkCollision(){
    const skEnd = Number(skater.x)+50;
    
    const skStart = Number(skater.x)
    const ballx = Number(ball.x)
    

    if((skStart <= ballx) && (ballx <= skEnd) && (ball.y >= 140 && ball.y <=145)){
        console.log('hit')
    }
}

function newBallPos(){
    // debugger
    ball.x += ball.dx
    ball.y += ball.dy
    detectWallsC()
}

function newPos(){
    skater.x += skater.dx
    skater.y += skater.dy

    detectWalls()
}

function detectWalls(){
    //left wall
    if(skater.x < 0){
        skater.x = 0
    }

    //right wall
    if(skater.x + skater.width > c.width){
        skater.x = c.width - skater.width
    }

    //
}

function detectWallsC(){
    // console.log('herr')
    // if(ball.x + ball.size > c.width || ball.x - ball.size < 0){
    //     ball.dx *= 1;
    // }
    // if(ball.y +ball.size > c.height || ball.y - ball.size < 0){

    //     ball.dy *= -1
    // }


    if(ball.x + ball.size > c.width || ball.x - ball.size < 0){
        ball.dx *= -1
    }

    if(ball.y + ball.size >= c.height || ball.y - ball.size <= 30){
        ball.dy *= -1
    }


}

function keyDown(e){
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight()
    }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft()
    }
}

function moveRight(){
    skater.dx = skater.speed
}

function moveLeft(){
    skater.dx = -skater.speed
}

function keyUp(e){
    if(e.key === 'Right' || e.key === 'ArrowRight' ||
        e.key === 'Left' || e.key === 'ArrowLeft'){
            skater.dx = 0;
            skater.dy = 0;
        }
}

// drawSky()

update()

// drawBall()