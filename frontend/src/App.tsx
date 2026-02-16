import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [health, setHealth] = useState<string>('loading...')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth('error'))
  }, [])

  return (
    <div>
      <h1>Portal PoC</h1>
      <p>API Health: <strong>{health}</strong></p>
    </div>
  )
}

export default App
