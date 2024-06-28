import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'
import Movielist from './Movielist'
import Descriptions from './Descriptions'
import Remove from './Remove'
import Genre from './Genre'










function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile />
      <Movielist />
      <Descriptions />
      <Remove />
      <Genre />
    </>
  )
}

export default App
