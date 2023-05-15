import { ChatArea, LeftSidebar, Topbar } from './components'
import { v4 } from 'uuid'
import useProfile from './context/use-profile'

function App() {
  const { name: selfUsername, chatList, avatarColor: profileAvatarColor } = useProfile()

  return (
    <div className="flex">
      <div className="w-full max-w-md">
        <LeftSidebar
          name={selfUsername}
          avatarColor={profileAvatarColor}
          chatList={chatList}
        />
      </div>
      <div className="flex-grow flex flex-col">
        <Topbar
          name={'Jane Doe'}
          avatarColor="#ff4785"
        />
        <div className="flex-grow">
          <ChatArea
            messages={[
              {
                uuid: v4(),
                username: 'Jane Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '10:20 pm',
                mine: false
              },
              {
                uuid: v4(),
                username: 'John Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '05:18 am',
                mine: true
              },
              {
                uuid: v4(),
                username: 'John Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '05:18 am',
                mine: true
              },
              {
                uuid: v4(),
                username: 'Jane Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '10:20 pm',
                mine: false
              },
              {
                uuid: v4(),
                username: 'Jane Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '10:20 pm',
                mine: false
              },{
                uuid: v4(),
                username: 'Jane Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '10:20 pm',
                mine: false
              },
              {
                uuid: v4(),
                username: 'John Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                timestamp: '05:18 am',
                mine: true
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default App
