import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

function Fetch() {

    const [elements, setElements] = useState([])

    useEffect(()=>{
        async function getMyData(){
              const response= await fetch("https://jsonplaceholder.typicode.com/todos/")
              let json=response.json()
              json.then(data=>{
                  setElements(data)                    
                  console.log("All Data ",elements)
              })
          }
          getMyData()
  },[])


  const elementsListCard = elements.map(element =>
    <div className='m-3 text-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Id: {element.id}</Card.Title>
        <Card.Text>UserId: {element.userId}</Card.Text>
        <Card.Text>Title: {element.title}</Card.Text>
        <Card.Text>Completed: {element.completed.toString()}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    
)

  return (
    <div className='container text-center border rounded mt-5'>
        <div className='m-3'>
            {elementsListCard}
        </div>
            
    </div>
  )
}

export default Fetch