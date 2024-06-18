let element = new Image()
element.__defineGetter__('id', function () {})
setInterval(function () {
  console.log(element)
  console.error('You are not smart! You opened the console! :D Find the flag in the source code!')
}, 1000)
