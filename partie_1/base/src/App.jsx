
import { useState, useEffect } from 'react'
import './App.css'

function Clock() {
  const [time, setTimer] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
      <h2>Current Time: {time.toLocaleTimeString()}</h2>
  )
}

function PostList() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <button
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause Timer" : "Resume Timer"}
      </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Clock />
      <PostList />
      <Timer />
    </div>
  )
}

export default App
