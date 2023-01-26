import React from 'react'
import '../style.css' 

function Newsletter() {
    return (
        <section className="bg-primary text-light p-5">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

                    <div className="input-group news-input">
                        <input type="text" className="form-control" placeholder="Enter Email" />
                        <button className="btn btn-dark btn-lg" type="button">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter