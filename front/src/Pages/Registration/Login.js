import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Registration/style.css'

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleForm = (name, value) => {
        setUser({...user,
            [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert('\n\n\nemail: '+user.email+'\n\npassword: '+user.password)
    }

    return (
        <div className='container border border-dark rounded p-5 bg-dark'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={(event)=>handleForm('email', event.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={(event)=>handleForm('password', event.target.value)}/>
                </Form.Group>

                <div className='d-grid gap-2 mt-5'>
                    <Button variant="secondary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login