import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

function Axios() {

    const [elements, setElements] = useState([])

    useEffect(() => {
        async function getMyData() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
                .then(response => {
                    setElements(response.data)
                }
                )
        }
        getMyData()
    }, [])


    const elementsListCard = elements.map(element =>
        <Col className='mt-5' key={element.id}>
            <Card bg='primary' text='light' style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Title>Id: {element.id}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>UserId: {element.userId}</Card.Text>
                    <Card.Text>Title: {element.title}</Card.Text>
                    <Card.Text>Completed: {element.completed.toString()}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

    return (
        <Container className='container border rounded'>
            <Row className='m-3'>
                {elementsListCard}
            </Row>
        </Container>
    )
}

export default Axios