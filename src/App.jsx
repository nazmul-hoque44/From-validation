import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import From from './component/From'
import From1 from './component/From1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      



  <From/>  
  <From1/>  
    </>
  )
}

export default App
