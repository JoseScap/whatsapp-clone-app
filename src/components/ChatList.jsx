import ChatPreview from './ChatPreview'
import PropTypes from 'prop-types'

function ChatList(props) {
  const { chatList } = props

  return <div>
    {
      chatList.map((chat) => (
        <ChatPreview
          key={chat.uuid}
          avatarColor={chat.avatarColor}
          name={chat.name}
          lastMessage={chat.lastMessage}
        />
      ))
    }
  </div>
}

ChatList.propTypes = {
  chatList: PropTypes.array.isRequired
}

export default ChatList