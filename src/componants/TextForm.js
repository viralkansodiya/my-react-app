import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState();
  const handleOnChenge = (e) =>{
    setText(e.target.value)
  }
  const handleOnClick = () =>{
    console.log("handleOnClick")
    if(text){
      setText(text.toUpperCase())
    }
  }
  const mystyle = {
    backgroundColor : props.mode === "dark" ? "grey" : "white"
  }
  return (
    <>
    <div className="container" style={mystyle}>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label  className="form-label" rows="6">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text}  onChange={handleOnChenge}></textarea>
            <button className='btn btn-primary my-3' onClick={handleOnClick}>Convert to Uppercase</button>
        </div>
    </div>
    </>
  )
}
