import Avatar from './Avatar'
import PropTypes from 'prop-types'

function ChatPreview(props) {
  const { name, color, lastMessage } = props

  return <div className={$containerClasses} style={$containerStyle}>
    <div className={$itemsWrapper}>
      <Avatar
        color={color}
        size={56}
      />
      <div className={$previewWrapper}>
        <h2 className={$name}>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  </div>
}

const $containerClasses = 'border h-20 px-4 bg-gray-700'
const $containerStyle = { maxHeight: 80 }

const $itemsWrapper = 'flex h-full w-full items-center'
const $previewWrapper = 'h-14 ml-4 flex-grow flex flex-col justify-between text-white'
const $name = 'font-bold'



ChatPreview.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired
}

export default ChatPreview