import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mt-32">
      <h1 className="text-3xl font-bold">
        Template Vite (React + Tailwind)
      </h1>
      <button className='px-5 py-2 mt-5 text-white bg-blue-500 rounded-full hover:bg-blue-600'>Check Version</button>
    </div>
  )
}

export default App
