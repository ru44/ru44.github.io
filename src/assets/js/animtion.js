;(function (jQuery) {
  function setAnimationFrames() {
    let vendorPrefixes = ['ms', 'moz', 'webkit', 'o']
    let lastTime = 0

    for (let index = 0; index < vendorPrefixes.length && !window.requestAnimationFrame; ++index) {
      window.requestAnimationFrame = window[vendorPrefixes[index] + 'RequestAnimationFrame']
      window.cancelAnimationFrame =
        window[vendorPrefixes[index] + 'CancelAnimationFrame'] ||
        window[vendorPrefixes[index] + 'CancelRequestAnimationFrame']
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback) {
        let currentTime = new Date().getTime()
        let timeToCall = Math.max(0, 16 - (currentTime - lastTime))
        lastTime = currentTime + timeToCall

        let id = window.setTimeout(function () {
          callback(currentTime + timeToCall)
        }, timeToCall)

        return id
      }
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id)
      }
    }
  }

  function sakura(options) {
    let prefixes = ['moz', 'ms', 'o', 'webkit', '']
    let prefixesLength = prefixes.length
    let defaultOptions = {
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
    options = jQuery.extend({}, defaultOptions, options)

    let documentHeight = jQuery(document).height()
    let documentWidth = jQuery(document).width()
    let sakuraDiv = jQuery('<div class="' + options.className + '" />')

    jQuery('body').css({
      'overflow-x': 'hidden'
    })

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function addEventListener(element, event, handler) {
      for (let i = 0; prefixesLength > i; i++) {
        prefixes[i] || (event = event.toLowerCase())
        element.get(0).addEventListener(prefixes[i] + event, handler, !1)
      }
    }

    function createSakura() {
      setTimeout(function () {
        requestAnimationFrame(createSakura)
      }, options.newOn)

      let blowAnimation =
        options.blowAnimations[Math.floor(Math.random() * options.blowAnimations.length)]
      let swayAnimation =
        options.swayAnimations[Math.floor(Math.random() * options.swayAnimations.length)]
      let fallSpeed = (Math.round(0.007 * documentHeight) + 5 * Math.random()) * options.fallSpeed
      let animation =
        'fall ' +
        fallSpeed +
        's linear 0s 1, ' +
        blowAnimation +
        ' ' +
        ((fallSpeed > 30 ? fallSpeed : 30) - 20 + getRandomInt(0, 20)) +
        's linear 0s infinite, ' +
        swayAnimation +
        ' ' +
        getRandomInt(2, 4) +
        's linear 0s infinite'
      let sakura = sakuraDiv.clone()
      let size = getRandomInt(options.minSize, options.maxSize)
      let leftPosition = Math.random() * documentWidth - 100
      let marginTop = -(20 * Math.random() + 15)

      addEventListener(sakura, 'AnimationEnd', function () {
        jQuery(this).remove()
      })

      addEventListener(sakura, 'AnimationIteration', function (event) {
        if (jQuery.inArray(event.animationName, options.blowAnimations) !== -1) {
          jQuery(this).remove()
        }
      })

      sakura
        .css({
          '-webkit-animation': animation,
          '-o-animation': animation,
          '-ms-animation': animation,
          '-moz-animation': animation,
          animation: animation,
          height: size,
          left: leftPosition,
          'margin-top': marginTop,
          width: size
        })
        .appendTo('body')
    }

    jQuery(window).resize(function () {
      documentHeight = jQuery(document).height()
      documentWidth = jQuery(document).width()
    })

    requestAnimationFrame(createSakura)
  }

  setAnimationFrames()
  jQuery.fn.sakura = sakura
})(jQuery)
