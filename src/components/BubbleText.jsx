import PropTypes from 'prop-types'

function BubbleText(props) {
  const { username, text, timestamp, mine = false } = props

  const bubbleClasses = mine ? `${$bubble} alt` : $bubble
  const nameClasses = mine ? `${$name} alt` : $name
  const bubbleArrowClasses = mine ? `${$bubbleArrow} alt` : $bubbleArrow

  return <div className={bubbleClasses}>
    <div className={$text}>
      <p className={nameClasses}>{username}</p>
      <p className={$message}>{text}</p>
      <span className="timestamp">{timestamp}</span>
    </div>
    <div className={bubbleArrowClasses}></div>
  </div>
}

const $bubble = 'bubble'
const $text = 'txt'
const $name = 'name'
const $message = 'message'
const $bubbleArrow = 'bubble-arrow'

BubbleText.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  mine: PropTypes.bool
}

export default BubbleText