const canvas = document.querySelector('canvas');
console.log(canvas);
const c = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player{
    constructor(){

        this.velocity = {
            x:0,
            y:0
        }
        this.rotation = 0
        const image = new Image()
        image.src = './img/spaceship.png'
        image.onload = () =>{
        this.image = image
        this.width = image.width * 0.15
        this.height = image.height * 0.15
        this.position = {
            x:canvas.width/2 - this.width /2, 
            y:canvas.height- this.height
        }
        }
    }
    draw(){
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, 
        //     this.position.y,
        //     this.width,
        //     this.height)  
        c.save()
        c.translate(player.position.x + player.width / 2,
                    player.position.y + player.height / 2)
        c.rotate(this.rotation)
        c.translate(-player.position.x - player.width / 2,
                    -player.position.y - player.height / 2)
        if(this.image){
            c.drawImage(this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height)
            }
        c.restore()
        }
        update(){
            if(this.image){
                this.draw()
                this.position.x +=this.velocity.x
            }
    }
}
const player = new Player()
const keys ={
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
    space:{
        pressed:false
    }
}
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle= 'Black'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()


    if(keys.a.pressed && player.position.x>=0){
        player.velocity.x = -7
        player.rotation = -0.15
    }
    else if (keys.d.pressed && player.position.x +player.width <canvas.width){
        player.velocity.x = 7
        player.rotation = +0.15
    }
    else {
        player.velocity.x = 0
        player.rotation = 0
    }
}
animate()

addEventListener('keydown',({key}) => {
    switch(key){
        case 'a':
            console.log('left')
            keys.a.pressed = true
            break
        case 'd':
            console.log('right')
            keys.d.pressed = true

            break
        case ' ':
            console.log('space')
            break
    }
})
addEventListener('keyup',({key}) => {
    switch(key){
        case 'a':
            console.log('left')
            keys.a.pressed = false
            break
        case 'd':
            console.log('right')
            keys.d.pressed = false

            break
        case ' ':
            console.log('space')
            break
    }

})