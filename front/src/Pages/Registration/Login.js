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

    const [loginResponse,setLoginResponse]= useState({
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
    
    async function handleSubmit  ( e)  {
        e.preventDefault()
        try
        {
           // const storageUser=""
           // localStorage.removeItem("user")
         await AuthServices.login(user.email,user.password)
         
        //  response.then(response=>{
        //     console.log ("Promise" ,response)
        //     storageUser=response
        //    })
        //    .catch(err=>{
        //     console.log("ERRO")
        //    })
           
           // is it correct to get the user here 
            const storageUser=JSON.parse( AuthServices.getCurrentUser());            
             console.log("THE USER",storageUser)
             if(storageUser){
                setLoginResponse(storageUser)
             }
             console.log("THE State",loginResponse)

            // userFromLocalStorage?.token?.errors?setErrState({
            //     state:true,
            //     msg:userFromLocalStorage.token.errors[0].details
            // }):
            // setErrState({
            //     state:false,
            //     msg:""
            // })
            // setSuccState({
            //     state:true,
            //     msg:"Yeah ! Logged in successfully"
            // })
        }catch(errorMsg){
            setLoginResponse({
                status:"Fatal ! Need to cotact Admin",
                response:errorMsg
            })
        }
        
    }

    return (
        <div className=''>

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
                        <p>{loginResponse.response}</p>
                    </Alert>
                </>:<></>
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
                    <Button variant="secondary" type="submit" onClick={(e)=>handleSubmit(e)}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login