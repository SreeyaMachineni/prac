const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const ball = {
    x:100,
    y:100,
    size:5,
    dx:5,
    dy:4
}

function update(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawBall()

    ball.x += ball.dx;
    ball.y += ball.dy
    console.log(ball.x,ball.y)

    //detect balls

    if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0){
        ball.dx *= -1
    }

    if(ball.y + ball.size >= canvas.height || ball.y - ball.size <= 0){
        ball.dy *= -1
    }

    requestAnimationFrame(update)
    
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.size,0,Math.PI * 2);
    ctx.fillStyle = 'purple'
    ctx.fill()
}

update()