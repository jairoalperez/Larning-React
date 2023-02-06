import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Registration/style.css'
import axios from 'axios'
import AuthServices from '../../Services/AuthServices'
import { Alert } from 'react-bootstrap'
import { json } from 'react-router-dom'

function Login() {
    const [ authUser,setAuthUser] = useState({});

    const [errState,setErrState]= useState({
        state:false, 
        msg:""

    })
    const [succState,setSuccState]= useState({
        state:false, 
        msg:""
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
    //{"token":"{\"status\":\"NOT_FOUND\",\"errors\":{\"timestamp\":\"2023-02-06T21:08:20.206+00:00\",\"message\":\"Requested user with email - admin.agsddsdencya@gmail.com does not exist.\",\"details\":\"Requested user with email - admin.agsddsdencya@gmail.com does not exist.\"}}"}
    const handleSubmit = ( e) => {
        try
        {
           // localStorage.removeItem("user")
            AuthServices.login(user.email,user.password);
            let userFromLocalStorage = JSON.parse( localStorage.getItem("user"));
            console.log("THE USER",userFromLocalStorage, JSON.stringify(userFromLocalStorage))
            userFromLocalStorage?.token?.errors?setErrState({
                state:true,
                msg:userFromLocalStorage.token.errors[0].details
            }):
            setErrState({
                state:false,
                msg:""
            })
            setSuccState({
                state:true,
                msg:"Yeah ! Logged in successfully"
            })
        }catch(errorMsg){
            setErrState({
                state:true,
                msg:errorMsg
            })
        }
        e.preventDefault()
    }

    return (
        <div className=''>

            {
                errState?.state==true?
                    <>
                        <Alert id='error' variant="danger" onClose={() => setErrState(false)} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                <p>{JSON.stringify( errState.msg)}</p>
                        </Alert>
                    </>
                :
                <>
                    {
                        succState?.state==true?<>
                        <Alert id='success' variant="success" onClose={() => setSuccState(false)} dismissible>
                            <Alert.Heading>Great! You Logged in Successfully!</Alert.Heading>
                                <p>{JSON.stringify(succState.msg)}</p>
                        </Alert>
                        </>:<></>
                    }
                </>
            }

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={(event) => handleForm('email', event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={(event) => handleForm('password', event.target.value)} />
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