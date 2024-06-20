;(function () {
  const setAnimationFrames = () => {
    let lastTime = 0

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (callback) => {
        const currentTime = new Date().getTime()
        const timeToCall = Math.max(0, 16 - (currentTime - lastTime))
        lastTime = currentTime + timeToCall

        const id = window.setTimeout(() => {
          callback(currentTime + timeToCall)
        }, timeToCall)

        return id
      }
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = (id) => {
        clearTimeout(id)
      }
    }
  }

  const sakura = (options) => {
    const defaultOptions = {
      blowAnimations: [
        'blow-soft-left',
        'blow-medium-left',
        'blow-hard-left',
        'blow-soft-right',
        'blow-medium-right',
        'blow-hard-right'
      ],
      className: 'sakura',
      fallSpeed: 1,
      maxSize: 14,
      minSize: 9,
      newOn: 300,
      swayAnimations: [
        'sway-0',
        'sway-1',
        'sway-2',
        'sway-3',
        'sway-4',
        'sway-5',
        'sway-6',
        'sway-7',
        'sway-8'
      ]
    }
    options = Object.assign({}, defaultOptions, options)

    let documentHeight = document.documentElement.scrollHeight
    let documentWidth = document.documentElement.scrollWidth
    const sakuraDiv = document.createElement('div')
    sakuraDiv.className = options.className

    document.body.style.overflowX = 'hidden'

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    const createSakura = () => {
      setTimeout(() => {
        requestAnimationFrame(createSakura)
      }, options.newOn)

      const blowAnimation =
        options.blowAnimations[Math.floor(Math.random() * options.blowAnimations.length)]
      const swayAnimation =
        options.swayAnimations[Math.floor(Math.random() * options.swayAnimations.length)]
      const fallSpeed = (Math.round(0.007 * documentHeight) + 5 * Math.random()) * options.fallSpeed
      const animation = `fall ${fallSpeed}s linear 0s 1, ${blowAnimation} ${(fallSpeed > 30 ? fallSpeed : 30) - 20 + getRandomInt(0, 20)}s linear 0s infinite, ${swayAnimation} ${getRandomInt(2, 4)}s linear 0s infinite`
      const sakura = sakuraDiv.cloneNode()
      const size = getRandomInt(options.minSize, options.maxSize)
      const leftPosition = Math.random() * documentWidth - 100
      const marginTop = -(20 * Math.random() + 15)

      sakura.addEventListener('animationend', function () {
        this.remove()
      })

      sakura.addEventListener('animationiteration', function (event) {
        if (options.blowAnimations.includes(event.animationName)) {
          this.remove()
        }
      })

      sakura.style.animation = animation
      sakura.style.height = `${size}px`
      sakura.style.left = `${leftPosition}px`
      sakura.style.marginTop = `${marginTop}px`
      sakura.style.width = `${size}px`

      document.body.appendChild(sakura)
    }

    window.addEventListener('resize', () => {
      documentHeight = document.documentElement.scrollHeight
      documentWidth = document.documentElement.scrollWidth
    })

    requestAnimationFrame(createSakura)
  }

  setAnimationFrames()
  window.sakura = sakura
})()

document.addEventListener('DOMContentLoaded', () => {
  sakura()
})
