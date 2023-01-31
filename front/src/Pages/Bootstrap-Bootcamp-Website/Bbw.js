import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Showcase from './components/Showcase'
import Newsletter from './components/Newsletter'
import Boxes from './components/Boxes'
import Learn from './components/Learn'
import Questions from './components/Questions'
import Instructors from './components/Instructors'
import ContactAndMap from './components/ContactAndMap'
import Footer from './components/Footer'
import './style.css' 


function Bbw() {

  const [menuItems, setMenuItems] = useState()

  useEffect(() => {

    async function getMenus() {
        try {
            const response = await fetch("http://localhost:8080/uisettings/menus")
            let json = response.json()
            json
                .then(data => {
                    setMenuItems(data)
                    console.log("All Data ", menuItems)
                })
        } catch (error) {
            setMenuItems([
                { text: "Home", href: "/" },
                { text: "Contact", href: "/contact" },
                { text: "Abou Us", href: "/about" },
                { text: "Bootcamps", href: "/bootcamps" },
            ])
        }
    }
    getMenus()

}, []) 


  return (
    <div>
        <Nav items={menuItems}/>
        <Showcase/>
        <Newsletter/>
        <Boxes/>
        <Learn/>
        <Questions/>
        <Instructors/>
        <ContactAndMap/>
        <Footer/>
    </div>
  )
}

export default Bbw