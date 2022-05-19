import React from 'react'

export default function TextForm (props) {
  return (
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>

  <button className="btn btn-primary">submit</button>
</div>
  )
}
