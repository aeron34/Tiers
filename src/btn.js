import React from 'react';
import {useSelector} from 'react-redux'

function Btn(props)
{
  const txt = useSelector(state => state.acting);
  console.log(txt);
  return (
    <button onClick={props.click}>Hello</button>
  )
}

export default React.memo(Btn);
