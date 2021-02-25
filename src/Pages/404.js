import React from 'react'

const NotFound = (props) => {
  return (
    <div>
      <img src={'http://localhost:5000/static/images/falco.png'}/>
      <p> No Path Called {props.location.pathname} </p>
    </div>
  )
}

export default NotFound;
