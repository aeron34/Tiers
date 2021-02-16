import React from 'react'
import './Card.css'
import logo from './images/falco.png'
function Card (props)
{
  /*This is the stats
  object, it contains
  the height, weight,
  tier, and origin
  franchise */
  let stats = {
    "Tier": "S",
    "Game": "StarFox",
    "Weight": "180lbs",
    "Height": "5'2 ft",
  }

  let stats_jsx = [];

  for (var prop in stats) {
    stats_jsx.push(
      (<div>
        <p>
          {prop}: <span style={{fontWeight: 'bold'}}>{stats[`${prop}`]}</span>
        </p>
      </div>)
    )
  }

  return (
    <div className='container'>
      <div className='Card'>

        <div className='header'>
          <img src={logo} style={{width: '24px', height:'24px'}}/>
          <h2>FALCO</h2>
        </div>

        {stats_jsx.map(obj => obj)}
      </div>
    </div>
  )
}

export default Card;
