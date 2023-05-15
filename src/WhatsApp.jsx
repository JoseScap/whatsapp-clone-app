import { ChatArea, LeftSidebar, Topbar } from './components'
import { v4 } from 'uuid'
import useProfile from './context/use-profile'
import { messages } from './mock/chatArea'

function App() {
  const { name: selfUsername, chatList, avatarColor: profileAvatarColor } = useProfile()

  return (
    <div className="flex">
      <div className="background-image"></div>
      <div className="w-full max-w-md">
        <LeftSidebar
          name={selfUsername}
          avatarColor={profileAvatarColor}
          chatList={chatList}
        />
      </div>
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        <div>
          <Topbar
            name={'Jane Doe'}
            avatarColor="#ff4785"
          />
        </div>
        <div className="overflow-y-auto">
          <ChatArea
            messages={messages}
          />
        </div>
      </div>
    </div>
  )
}

export default App
