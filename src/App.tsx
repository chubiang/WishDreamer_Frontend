import { useState } from 'react'
import './App.css'
import Login from './layout/Login'
import Container from 'react-bootstrap/Container'



function App() {
 
  const [accessToken, setAccessToken] = useState("")

  return (
    <>
      <Container className="panel">
        <Login />
      </Container>
    </>
  )
}

export default App
