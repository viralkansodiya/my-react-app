import React, { useState } from 'react'

export default function Aboutus() {
  const [btnText, setbtnText] = useState("Enable Dark Mode")
  const [mystyle, setmystyle] = useState({
    color : "black",
    backgroundColor : "white",
  })
  const toggledarkmode = () =>{

    if(mystyle.color === "black"){
      setmystyle({
        color : "white",
        backgroundColor : "black"
      })
      setbtnText("Enable Light Mode")
    }
    else{
      setmystyle({
        color : "black",
        backgroundColor : "white"
      })
      setbtnText("Enable Dark Mode")
    }
  }

  return (
    <>
    <div className='container'>
    <section id="about" className="py-5" style={mystyle}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/500x300" alt="About Us" className="img-fluid rounded"/>
                </div>
                <div className="col-md-6">
                    <h2>About Us</h2>
                    <p>We are a team of passionate professionals dedicated to delivering innovative solutions. Our mission is to provide exceptional value to our customers through our expertise and commitment to quality.</p>
                    <p>Founded in 2020, our company has grown to become a leader in the industry, known for our integrity, innovation, and customer-centric approach.</p>
                </div>
            </div>
        </div>
        <button className="btn btn-outline-warning my-3" type="submit" onClick={toggledarkmode} >{btnText}</button>
    </section>
    <section id="team" className="py-5">
        <div className="container">
            <div className="text-center mb-5">
                <h2>Our Team</h2>
                <p>Meet the people behind our success.</p>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-3"/>
                    <h5>John Doe</h5>
                    <p>CEO & Founder</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-3"/>
                    <h5>Jane Smith</h5>
                    <p>CTO</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-3"/>
                    <h5>Mike Johnson</h5>
                    <p>COO</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you. Reach out to us today!</p>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" required/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" required/>
                    </div>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    </section>
    </div>
    </>
  )
}
