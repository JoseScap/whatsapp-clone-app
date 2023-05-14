import { useState } from 'react'
import ChatList from './ChatList'
import Input from './Input'
import Topbar from './Topbar'

const chatList = [
  {
    uuid: 1,
    avatarColor: '#47d5bc',
    name: 'Jhon Doe',
    lastMessage: 'Lorem ipsum dolor'
  },
  {
    uuid: 2,
    avatarColor: '#47d5bc',
    name: 'Jhon Doe',
    lastMessage: 'Lorem ipsum dolor'
  },
  {
    uuid: 3,
    avatarColor: '#47d5bc',
    name: 'Jhon Doe',
    lastMessage: 'Lorem ipsum dolor'
  },
  {
    uuid: 4,
    avatarColor: '#47d5bc',
    name: 'Jhon Doe',
    lastMessage: 'Lorem ipsum dolor'
  }
]

function LeftSidebar() {
  const [filter, setFilter] = useState('')

  const handleChangeFilter = (value) => {
    setFilter(value)
  }

  return <div className="min-h-screen bg-gray-700">
    <Topbar avatarColor="#47d5bc" name="Juan" />
    <div className={$inputWrapper}>
      <Input
        value={filter}
        onChange={handleChangeFilter}
        search
      />
    </div>
    <ChatList
      chatList={chatList}
    />
  </div>
}

const $inputWrapper = 'px-4 pt-4'

export default LeftSidebar