import { ChatArea, LeftSidebar, Topbar } from './components'
import { v4 } from 'uuid'

function App() {
  return (
    <div className="flex">
      <div style={{
        maxWidth: 500
      }}>
        <LeftSidebar
          name="Jhon Doe"
          avatarColor="#47d5bc"
          chatList={[
            {
              uuid: v4(),
              avatarColor: '#ff4785',
              name: 'Jane Doe',
              lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
          ]}
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
