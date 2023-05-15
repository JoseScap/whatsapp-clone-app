import React from 'react'
import ReactDOM from 'react-dom/client'
import WhatsApp from './WhatsApp.jsx'
import { ProfileProvider } from './context/Profile.context.jsx'
import { ChatProvider } from './context/Chat.context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileProvider>
      <ChatProvider>
        <WhatsApp />
      </ChatProvider>
    </ProfileProvider>
  </React.StrictMode>,
)
