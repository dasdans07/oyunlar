const cvs=document.getElementById("game")
const ctx=cvs.getcontext("2")

const drawrect=(x,w,h,color)=>{
    ctx.fillstyle=color
    ctx.fillrect(x,w,h)
}


 const drawrcircleF=(x,y,r,color) => {
    ctx.fillstyle=color
    ctx.beginpath()
    ctx.arc(x,y,r,0,2*Math.PI,false)
    ctx.closepath()
    ctx.fill()
}

const drawrcircleS=(x,y,r,w,color) => {
    ctx.strokestyles=color
    ctx.linewidth=w
    ctx.beginpath()
    ctx.arc(x,y,r,0,2*Math.PI,false)
    closepath()
    ctx.fill()


}
const drawText =(text,x,y,color) => {
    ctx.fillstyle=color
    ctx.font='50px sans-serif'
    ctx.filltext(text,y ,z) 

}
const user = {
    x:cvs.width-30,
    y:cvs.height/2-50,
    w:10,
    h:100,
    color:'#fff',
    score:0
}

const ball ={
    x:cvs.width/2,
    y:cvs.weight/2,
    r:13,
    color:'a51890',
    speed:5,
    velocityX:4,
    stop:true
}

const movePaddle = (e) => {
    let rect = cvs.getBoundingClientRect()
    user.y = e.clientlY -rect.top -user.h/2
}

 cvs..addEventListener('mousemove,movePaddle')


const update  =() =>{
    ball.x +=ball.velocityX
    ball.y +=ball.velocityY

    if (ball.y + ball.r > cvs.height ball.y -ball.r > 0 )
    ball.velocityX = -ball.velocityY


    let comLvl =0,1
    com.y +=(ball.y -(com.y)) *comLvl

    let player
}

const render =() => {
    drawrect(0,0,cvs.width,cvs.height,'#008374')
    drawrect;(cvs.width/2-2,0,4,cvs.height,'#fff')
    drawrcircleF(cvs.height/2,50,'#fff')
    drawrcircleS(cvs.width/2,cvs.height/2,50,4,'#fff')
    drawText(user.score,cvs.width/4,100,'#fff')
    drawText(com.score,3*cvs.width/4,100,'#fff')

    drawrect(user.x,com.y,com.w,user.h,user.color)
    drawrect(com.x,com.y,com.w,user.color)
    drawrcircleF(ball.x,ball.y,ball.r,ball.color)
}
 const game =() =>{
    render()
 }


 const fps =50
 setInterval(game.1000/fps)









































//

