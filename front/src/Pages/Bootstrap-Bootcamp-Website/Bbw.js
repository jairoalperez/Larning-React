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

    return (
        <div>
            <Showcase />
            <Newsletter />
            <Boxes />
            <Learn />
            <Questions />
            <Instructors />
            <ContactAndMap />
            <Footer />
        </div>
    )
}

export default Bbw