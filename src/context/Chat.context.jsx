import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types'
import { messages } from '../mock/chatArea';

const initialContext = {
  name:'Jane Doe',
  changeName: () => {},
  avatarColor: '#ff4785',
  changeAvatarColor: () => {},
  messages: messages,
  changeMessages: () => {}
}

export const ChatContext = createContext(initialContext)

export function ChatProvider(props) {
  const { children } = props

  const [name, setName] = useState(initialContext.name)
  const [avatarColor, setAvatarColor] = useState(initialContext.avatarColor)
  const [messages, setMessages] = useState(initialContext.messages)

  const changeName = useCallback((value) => {
    setName(value)
  }, [setName])

  const changeAvatarColor = useCallback((value) => {
    setAvatarColor(value)
  }, [setAvatarColor])

  const changeMessages = useCallback((value) => {
    setMessages(value)
  }, [setMessages])

  return <ChatContext.Provider value={{
    name,
    changeName,
    avatarColor,
    changeAvatarColor,
    messages,
    changeMessages
  }}>
    {children}
  </ChatContext.Provider>
}

ChatProvider.propTypes = {
  children: PropTypes.func
}