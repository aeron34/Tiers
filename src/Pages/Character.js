import React, {useState, useEffect} from 'react';
import './Char/Character.css'
import {useParams} from 'react-router-dom';


function Character(props)
{
  let char = useParams().char;
  //let data = [];

  const [data, setData] = useState([])
  const [color, setColor] = useState({});

  useEffect(() => {
    fetch(`https://infinite-journey-69877.herokuapp.com/data/${char}`).then(a => a.json())
    .then(object => {
      for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
          setData(old_data => [...old_data, [prop, object[prop]]]);
        }
        if(prop == 'Color')
        {
          setColor({padding: '20px',
          backgroundColor: `rgba(${object[prop][0]},${object[prop][1]},${object[prop][2]})`})
        }
      }
    })
  }, [])

  let mrgn = '20px'

  return (
    <>
      <div style={color}className="main_box">
        <img src={`https://infinite-journey-69877.herokuapp.com/${char}.png`} style={{width: '24px', height:'24px'}}/>
        <h2 className="h2"style={{margin: mrgn}}>{char.toUpperCase()}</h2>
        {data.map(a => {
          if(a[0] != 'Color')
          {
            return <p className="p"style={{margin: mrgn}}>{a[0]}: {a[1]}</p>
          }
        })}
      </div>
    </>
  )
}

export default Character;
