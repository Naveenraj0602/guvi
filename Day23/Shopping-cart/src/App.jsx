import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/body'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Body/> 
      <Footer/>
    </>
  ) 
}

export default App
  