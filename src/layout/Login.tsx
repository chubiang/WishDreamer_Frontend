import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import api from '@/api'

interface LoginForm {
  id: string;
  pw: string;
}

function Login() {
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    id: '',
    pw: ''
  })

  const handleChangeID = (evt: any) => {
    setFormData(Object.assign(formData, {id: evt.target.value}))
  }
  const handleChangePW = (evt: any) => {
    setFormData(Object.assign(formData, {pw: evt.target.value}))
  }
 
  const loginFn = () => {
    setLoading(true)
    console.log('loginForm', formData)
    api({
      method: 'post',
      url: '/api/procLogin',
      data: {
        id: formData.id,
        pw: formData.pw
      }
    }).then((res: any) => {
      console.log(res)
      setLoading(false)
    }).catch((err: any) => {
      console.log(err)
      setLoading(false)
    })

  }

  return (
    <Card>
      <Card.Title>Login</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="LoginInputID">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChangeID}
              aria-label="ID"
              aria-describedby="login-form-id"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="LoginInputPW">
            <Form.Label>PW</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChangePW}
              aria-label="PW"
              aria-describedby="login-form-pw"
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" type="submit" onClick={!isLoading? loginFn: undefined}>Login</Button>
      </Card.Footer>
    </Card>
  )
}

export default Login