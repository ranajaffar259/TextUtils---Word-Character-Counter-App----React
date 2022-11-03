import React from 'react'

export default function Contact(props) {
  return (
    <>
      <div className='container my-2'>
        <h1>Contact</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name1" className="form-label">Name</label>
            <input type="text" className={`bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "dark" ? "light" : "dark"} form-control`} id="name1" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email1" className="form-label">Email address</label>
            <input type="email" className={`bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "dark" ? "light" : "dark"} form-control`} id="email1" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your message</label>
            <textarea className={`bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "dark" ? "light" : "dark"} form-control`} id="exampleFormControlTextarea1" rows="3"required></textarea>
          </div>
          <div className="mb-3">
            <button className={`btn btn-dark bg-${props.mode=== "light"?"dark":"light"} text-${props.mode==="dark"?"dark":"light"}`}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
