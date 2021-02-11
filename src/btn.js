import React from 'react';

function Btn(props)
{
//  const txt = useSelector(state => state.acting);
   return (
    <button onClick={props.click}>Hello</button>
  )
}

export default React.memo(Btn);
