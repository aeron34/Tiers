import React from 'react'
import './Card.css'
import {NavLink} from 'react-router-dom'

function Card (props)
{
  /*This is the stats
  object, it contains
  the height, weight,
  tier, and origin
  franchise */

  let name = props.name;

  let stats = {};
  Object.assign(stats, props.stats);
  delete stats.Color;
  delete stats.name;
  delete stats.wins;

  let stats_jsx = [];

  for (var prop in stats) {
    stats_jsx.push(
      (<div>
        <p style={{cursor: "default"}}>
          {prop}: <span style={{fontWeight: 'bold'}}>{stats[`${prop}`]}</span>
        </p>
      </div>)
    )
  }

  console.log(props.rgb);

  let nameurl = `/character/${name}`;

  return (
    <NavLink style={{color: 'black', textDecoration: 'none'}}
    to={nameurl}>
    <div className='container'>

      <div className='Card'
    //  `rgba(${props.rgb[0]-170},${props.rgb[1]-113},${props.rgb[2]-86},1)`
      style={{  boxShadow: `6px 6px rgba(${props.rgb[0]-170},${props.rgb[1]-113},${props.rgb[2]-86},1)`,
        backgroundColor: `rgba(${props.rgb[0]},${props.rgb[1]},${props.rgb[2]},1)`,
        borderBottom: `3px solid rgba(${props.rgb[0]-71},${props.rgb[1]-29},${props.rgb[2]-8},1)`
      }}>

        <div className='header'>
          <img src={`http://localhost:5000/${name}.png`} style={{width: '24px', height:'24px'}}/>
          <h2 style={{
            color: `rgba(${props.rgb[0]-255},${props.rgb[1]-255},${props.rgb[2]},1)`
          }}>{name.toUpperCase()}</h2>
        </div>

        {stats_jsx.map(obj => obj)}
      </div>
    </div>
    </NavLink>
  )
}

export default Card;
