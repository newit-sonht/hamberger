export default {
  mounted() {
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')

    canvas.width = 1024
    canvas.height = 576

    c.fillRect(0,0, canvas.width, canvas.height)

    const gravity = 0.2

    class Sprite {
      constructor({ position, imageSrc}) {
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
      }

      draw() {}

      update() {
        this.draw()
      }
    }

    class Fighter {
      constructor({ position, velocity, color = 'red', offset}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey = ''
        this.attackBox = {
          position: {
            x: this.position.x,
            y: this.position.y
          },
          offset: {
            x: offset.x,
            y: offset.y
          },
          width: 100,
          height: 50
        }
        this.color = color
        this.isAttacking = false
        this.health = 100
      }

      draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        //attack box
        if(this.isAttacking) {
          c.fillStyle = 'yellow'
          c.fillRect(
            this.attackBox.position.x,
            this.attackBox.position.y,
            this.attackBox.width,
            this.attackBox.height)
        }
      }

      update() {
        this.draw()
        this.attackBox.position.x = this.position.x - this.attackBox.offset.x
        this.attackBox.position.y = this.position.y - this.attackBox.offset.y

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height) {
          this.velocity.y = 0
        } else {
           this.velocity.y += gravity
        }
      }

      attack() {
        this.isAttacking = true
        setTimeout(() => {
          this.isAttacking = false
        }, 100)
      }
    }

    const player = new Fighter({
      position: {
        x: 0,
        y: 0
      },
      velocity: {
        x: 0,
        y: 10
      },
      offset: {
        x: 0,
        y: 0,
      },
      color: 'blue'
    })

    const enemy = new Fighter({
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      offset: {
        x: 50,
        y: 0,
      },
      color: 'purple'
    })

    const keys = {
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
      w: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
      ArrowRight: {
        pressed: false
      }
    }

    function rectangularCollision({ rectangle1, reactangle2 }) {
      return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= reactangle2.position.x &&
        rectangle1.attackBox.position.x <= reactangle2.position.x + reactangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= reactangle2.position.y &&
        rectangle1.attackBox.position.y <= reactangle2.position.y + reactangle2.height
      )
    }

    function determineWinner({player , enemy, timerId}) {
        clearTimeout(timerId)
        document.querySelector('#myTime').style.display = 'block'
        if(player.health === enemy.health) {
          document.querySelector('#myTime').innerHTML = 'Tie'
        } else if (player.health > enemy.health) {
          document.querySelector('#myTime').innerHTML = 'Player 1 Wins'
        } else {
          document.querySelector('#myTime').innerHTML = 'Player 2 Wins'
        }
    }

    let timer = 60
    let timerId
    function decreaseTimer() {
      timerId = setTimeout(decreaseTimer,1000)
      if (timer > 0) {
        timer--
        document.querySelector('#timer').innerHTML  = timer
      }

      if(timer === 0) {
        determineWinner(player, enemy, timerId)
      }
    }

    decreaseTimer()

    function animate() {
      window.requestAnimationFrame(animate)
      c.fillStyle = 'black'
      c.fillRect(0,0,canvas.width, canvas.height)
      player.update()
      enemy.update()

      // player movement
      player.velocity.x = 0
      if(keys.a.pressed && player.lastKey == 'a') {
        player.velocity.x = -5
      } else if (keys.d.pressed && player.lastKey == 'd') {
        player.velocity.x = 5
      }

      // enemy movement
      enemy.velocity.x = 0
      if(keys.ArrowLeft.pressed && enemy.lastKey == 'ArrowLeft') {
        enemy.velocity.x = -5
      } else if (keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight') {
        enemy.velocity.x = 5
      }

      // detect for collision
      if (
        rectangularCollision({rectangle1: player,reactangle2: enemy})
        && player.isAttacking
      )
      {
        player.isAttacking = false
        enemy.health -= 20
        document.querySelector('#enemy').style.width = enemy.health + '%'
      }
      if (
        rectangularCollision({rectangle1: enemy,reactangle2: player})
        && enemy.isAttacking
      )
      {
        enemy.isAttacking = false
        player.health -= 20
        document.querySelector('#player').style.width = player.health + '%'
      }

      // end game
      if (enemy.health <= 0 || player.health <=0) {
        determineWinner({player, enemy, timerId})
      }

    }

    animate()

    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'd':
          keys.d.pressed = true
          player.lastKey = 'd'
          break;
        case 'a':
          keys.a.pressed = true
          player.lastKey = 'a'
          break;
        case 'w':
          player.velocity.y = -10
          break
        case ' ':
          player.attack()
          break

        case 'ArrowRight':
          keys.ArrowRight.pressed = true
          enemy.lastKey = 'ArrowRight'
          break;
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = true
          enemy.lastKey = 'ArrowLeft'
          break;
        case 'ArrowUp':
          enemy.velocity.y = -10
          break
        case 'ArrowDown':
          enemy.attack()
          break
      }
    })
    window.addEventListener('keyup', (e) => {
      switch(e.key) {
        case 'd':
          keys.d.pressed = false
          break;
        case 'a':
          keys.a.pressed = false
          break;
      }

      // enemy key
      switch(e.key) {
        case 'ArrowRight':
          keys.ArrowRight.pressed = false
          break;
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = false
          break;
      }
    })

  },
}
