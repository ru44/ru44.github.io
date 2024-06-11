let direction = 'forward'
// R follow the mouse
function animateTitleBar(index) {
  let titleMessage = '.::RuM Projects::.'
  let animationSpeed = 50
  let position = index
  titleMessage = '' + titleMessage + ''
  let messageLength = titleMessage.length
  let partialMessage = ''

  if (direction == 'forward') {
    if (position < messageLength) {
      position = position + 1
      partialMessage = titleMessage.substr(0, position)
    } else {
      direction = 'backward'
    }
  } else if (position > 0) {
    position = position - 1
    let reverseIndex = messageLength - position
    partialMessage = titleMessage.substr(reverseIndex, messageLength)
  } else {
    direction = 'forward'
  }

  document.title = partialMessage
  window.setTimeout('animateTitleBar(' + position + ')', animationSpeed)
}

animateTitleBar(0)
