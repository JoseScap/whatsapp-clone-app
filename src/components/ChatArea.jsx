import BubbleText from './BubbleText';
import PropTypes from 'prop-types'

function ChatArea(props) {
  const { messages = [] } = props

  return <div className="w-full border chat-area">
    {
      messages.map((message) => (
        <div key={message.uuid} className={message.mine ? 'flex justify-end' : 'flex'}>
          <BubbleText
            username={message.username}
            text={message.text}
            timestamp={message.timestamp}
            mine={message.mine}
          />
        </div>
      ))
    }
  </div>
}

ChatArea.propTypes = {
  messages: PropTypes.array.isRequired
}

export default ChatArea