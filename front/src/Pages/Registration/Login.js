import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Registration/style.css'
import axios from 'axios'
import AuthServices from '../../Services/AuthServices'
import { Alert } from 'react-bootstrap'
import { json } from 'react-router-dom'
import Animation from './Animation'

function Login() {
    const [authUser, setAuthUser] = useState({});

    const [show, setShow] = useState(true);

    const [loginResponse, setLoginResponse] = useState({
        state: false,
        msg: ""

    })


    const [user, setUser] = useState({
        email: '',
        password: ''
    })



    const handleForm = (name, value) => {
        setUser({
            ...user,
            [name]: value
        })
    }


    const [animation, setAnimation] = useState(true)


    const awaitTimeout = delay =>
        new Promise(resolve => setTimeout(resolve, delay));

    async function handleSubmit(e) {
        e.preventDefault()

        setAnimation(false)

        try {
            await awaitTimeout(2000)
            await AuthServices.login(user.email, user.password)
            const storageUser = JSON.parse(AuthServices.getCurrentUser());
            console.log("THE USER", storageUser)
            if (storageUser) {
                setLoginResponse(storageUser)
            }
            console.log("THE State", loginResponse)
            setAnimation(true)



        } catch (errorMsg) {
            setLoginResponse({
                status: "Fatal ! Need to cotact Admin",
                response: errorMsg
            })
        }

    }

    return (
        <div className=''>

            {!animation === true ? (
                <Animation/>
            ) : (
                <></>
            )}

            {loginResponse?.status == 'error' ?

                <> <Alert id='error' variant="danger" dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>{loginResponse.response}</p>
                </Alert>
                </>
                :
                loginResponse?.status == 'success' ?
                    <>
                        <Alert id='success' variant="success" dismissible>
                            <Alert.Heading>Great ! Good Job</Alert.Heading>
                            <div className='container'>
                                <p>{loginResponse.response}</p>
                            </div>
                        </Alert>
                    </> : <></>
            }

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={(event) => handleForm('email', event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={(event) => handleForm('password', event.target.value)} />
                </Form.Group>

                <div className='d-grid gap-2 mt-5'>
                    <Button variant="secondary" type="submit" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login