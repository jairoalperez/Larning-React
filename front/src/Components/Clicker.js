import React, { useState } from 'react'

function Clicker() {

    const [clickCount, setClickCount] = useState(0)

    const handleCount = () => {
        setClickCount(clickCount + 1)
    }

    return (
            <div className='container w-auto p-3 border border-primary rounded mt-5 text-center'>
                <button onClick={handleCount} className='btn btn-primary'>
                    Click me!
                </button>
                <div className='container text-center'>
                    <p className='fs-3 mt-5'>
                        The Button has been clicked {clickCount} times
                    </p>
                </div>
            </div>
    )
}

export default Clicker