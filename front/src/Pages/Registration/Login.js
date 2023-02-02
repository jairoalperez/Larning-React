import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Registration/style.css'
import axios from 'axios'

function Login() {

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

    const handleSubmit = async e => {
        e.preventDefault()

        var data = JSON.stringify({
            "email": user.email,
            "password": user.password
          });

          var config = {
            method: 'post',
            url: 'http://localhost:8080/apiauth/authenticate',
            mode: "no-cors",
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            data : data
          };

          axios(config)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "email": user.email,
        //     "password": user.password
        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     mode: "no-cors",
        //     //redirect: 'follow'
        // };

        // fetch("http://localhost:8080/api/auth", requestOptions)
        //     .then(response => response.json())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

    }

    return (
        <div className='container border border-dark rounded p-5 bg-dark mt-5'>
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