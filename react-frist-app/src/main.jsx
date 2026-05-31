import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apps, { Greetings } from './App.jsx'
import { UserKey } from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
    <Greetings/>
    <h1>UserKey: {UserKey}</h1>
  </StrictMode>,
)
