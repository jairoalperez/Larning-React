import React, { useRef, useState } from 'react'

function MTC() {


    const inputRef = useRef()

    const user = 'jairo'

    const onClick = (e) => {
        
        switch(e.target.id) {
            case 'log':
                console.log("Input Value: ", inputRef.current?.value)
            break

            case 'focus':
                console.log("Focus Log: ")
                inputRef.current?.focus()
            break

            case 'login':
                if (inputRef.current?.value==user){
                    alert('Loged')
                } else {
                    alert('Not Loged')
                }

            default: break
        }

    }

    return (
        <div>
            <input type='text' ref={inputRef}/>
            
            <button id="login" onClick={e => onClick(e)}>Login</button>
        </div>
    )
}

export default MTC