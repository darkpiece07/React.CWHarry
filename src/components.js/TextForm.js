import React, { useState } from 'react'

export default function TextForm (props) {
const [text, setText] = useState('')

const handleOnChange = (event) => {
     setText(event.target.value)
}

const handleUpClick = (event) => {
     const newText = text.toUpperCase();
     setText(newText)
}
const handleLoClick = (event) => {
  const newText = text.toLowerCase();
  setText(newText)
}

  return (
  <>
    <div className="container">
      <label htmlFor="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
      <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <div className='container my-3'>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
          <button className="btn btn-primary" onClick={handleLoClick}>convert to lowercase</button>
    </div>
    <div className="container">
      <h2>The word and character counts that you entered</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}
