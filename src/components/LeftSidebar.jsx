import { useMemo, useState } from 'react'
import ChatList from './ChatList'
import Input from './Input'
import Topbar from './Topbar'
import PropTypes from 'prop-types'

function LeftSidebar(props) {
  const { name, avatarColor, chatList } = props

  const [filter, setFilter] = useState('')
  const filteredChatlist = useMemo(() => {
    return chatList.filter(chat => chat.name.includes(filter))
  }, [filter, chatList])

  const handleChangeFilter = (value) => {
    setFilter(value)
  }

  return <div className={$container}>
    <div>
      <Topbar avatarColor={avatarColor} name={name} />
    </div>
    <div className={$inputWrapper}>
      <Input
        value={filter}
        onChange={handleChangeFilter}
        search
      />
    </div>
    <div className={$chatListWrapper}>
      <ChatList
        chatList={filteredChatlist}
      />
    </div>
  </div>
}

const $container = 'h-screen overflow-hidden flex flex-col bg-gray-700'

const $inputWrapper = 'px-4 pt-4'

const $chatListWrapper = 'overflow-y-auto'

LeftSidebar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarColor: PropTypes.string.isRequired,
  chatList: PropTypes.array.isRequired
}

export default LeftSidebar