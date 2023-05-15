import { createContext, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'

const initialContext = {
  name:'Jhon Doe',
  changeName: () => {},
  avatarColor:'#47d5bc',
  changeAvatarColor: () => {},
  chatList: [
    {
      uuid: v4(),
      avatarColor: '#ff4785',
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ],
  changeChatList: () => {}
}

export const ProfileContext = createContext(initialContext)

export function ProfileProvider(props) {
  const { children } = props

  const [name, setName] = useState(initialContext.name)
  const [avatarColor, setAvatarColor] = useState(initialContext.avatarColor)
  const [chatList, setChatList] = useState(initialContext.chatList)

  const changeName = useCallback((value) => {
    setName(value)
  }, [setName])

  const changeAvatarColor = useCallback((value) => {
    setAvatarColor(value)
  }, [setAvatarColor])

  const changeChatList = useCallback((value) => {
    setChatList(value)
  }, [setChatList])

  return <ProfileContext.Provider value={{
    name,
    changeName,
    avatarColor,
    changeAvatarColor,
    chatList,
    changeChatList
  }}>
    {children}
  </ProfileContext.Provider>
}

ProfileProvider.propTypes = {
  children: PropTypes.func
}