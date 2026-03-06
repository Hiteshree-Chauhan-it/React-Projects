
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostCard from './PostCard'

function App() {

  return (
    <div className="app">
        <h1>Social Media Post</h1>
        <PostCard></PostCard>
    </div>
  )
}

export default App
