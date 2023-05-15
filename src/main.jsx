import React from 'react'
import ReactDOM from 'react-dom/client'
import WhatsApp from './WhatsApp.jsx'
import './index.css'
import { ProfileProvider } from './context/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileProvider>
      <WhatsApp />
    </ProfileProvider>
  </React.StrictMode>,
)
