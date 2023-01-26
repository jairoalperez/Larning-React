import React from 'react'
import '../style.css' 
import img from '../img/fundamentals.svg'
import img2 from '../img/react.svg'

function Learn() {
    return (
        <div>
            <section id="learn" className="p-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                            <img src={img} className="img-fluid" alt="Logo" />
                        </div>
                        <div className="col-md p-5">
                            <h2>Learn The Fundamentals</h2>
                            <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Similique deleniti possimus magnam corporis ratione facere!
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                                quae similique laboriosam iste minus placeat odit velit quos,
                                nulla architecto amet voluptates?
                            </p>
                            <a href="#" className="btn btn-light mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="learn" class="p-5 bg-dark text-light">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md p-5">
                            <h2>Learn React</h2>
                            <p class="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Similique deleniti possimus magnam corporis ratione facere!
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                                quae similique laboriosam iste minus placeat odit velit quos,
                                nulla architecto amet voluptates?
                            </p>
                            <a href="#" class="btn btn-light mt-3">
                                <i class="bi bi-chevron-right"></i> Read More
                            </a>
                        </div>
                        <div class="col-md">
                            <img src={img2} class="img-fluid" alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Learn