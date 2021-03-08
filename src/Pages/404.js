import React from 'react'

const NotFound = (props) => {
  return (
    <div>
      <img src={'https://infinite-journey-69877.herokuapp.com/falco.png'}/>
      <p> No Path Called {props.location.pathname} </p>
    </div>
  )
}

export default NotFound;
