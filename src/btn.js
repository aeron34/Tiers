import React from 'react';

function Btn(props)
{
   return (
    <button onClick={props.click}>Hello</button>
  )
}

export default React.memo(Btn);
