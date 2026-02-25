import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StrictMode>
      <Exercicio1 />
      <Exercicio2 />
    </StrictMode>
  )
}

export default App
