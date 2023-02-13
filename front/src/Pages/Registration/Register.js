import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Registration/style.css'
import axios from 'axios'

function Register() {

    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        password: '',
        vpassword: ''
    })

    const handleForm = (name, value) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (user.vpassword === user.password) {

            var data = JSON.stringify({
                "email": user.email,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "mobileNumber": user.mobileNumber,
                "password": user.password
            });

            var config = {
                method: 'post',
                url: 'http://localhost:8077/api/v1/user/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response));
                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
            alert('The passwords must match!')
        }

    }

    return (
        <div className='container border border-dark rounded p-5 bg-dark mt-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-light'>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={(event) => handleForm('email', event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label className='text-light'>First Name</Form.Label>
                            <Form.Control name="firstName" type="text" placeholder="Enter first name" onChange={(event) => handleForm('firstName', event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label className='text-light'>Last Name</Form.Label>
                            <Form.Control name="lastName" type="text" placeholder="Enter last name" onChange={(event) => handleForm('lastName', event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                            <Form.Label className='text-light'>Mobile Number</Form.Label>
                            <Form.Control name="mobileNumber" type="number" placeholder="Enter mobile number" onChange={(event) => handleForm('mobileNumber', event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-light'>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={(event) => handleForm('password', event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicVerifyPassword">
                            <Form.Label className='text-light'>Verify Password</Form.Label>
                            <Form.Control name="vpassword" type="password" placeholder="Password" onChange={(event) => handleForm('vpassword', event.target.value)} />
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

export default Register