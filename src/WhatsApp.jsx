import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ProfileProvider } from './context/Profile.context'
import { ChatProvider } from './context/Chat.context'

function App() {
  return (
    <>
      {/* <ProfileProvider> */}
      {/* <ChatProvider> */}
      <RouterProvider
        router={router}
      />    
      {/* </ChatProvider> */}
      {/* </ProfileProvider> */}
    </>
  )
}

export default App
