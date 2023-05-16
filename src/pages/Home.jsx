import { ChatArea, LeftSidebar, Topbar } from '../components'
import useChat from '../context/use-chat'
import useProfile from '../context/use-profile'


function Home() {
  const { name: selfUsername, chatList, avatarColor: profileAvatarColor } = useProfile()
  const { name: chatName, avatarColor: chatAvatarColor, messages } = useChat()

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
            name={chatName}
            avatarColor={chatAvatarColor}
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

export default Home