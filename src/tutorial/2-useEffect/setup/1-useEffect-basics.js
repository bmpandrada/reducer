import React, { useState, useEffect } from 'react';
import Example from '../../../assets/Lottie.component';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [show, setShow] = useState(false);

  const showWidth = () =>{
    setShow(window.innerWidth)
  }

  useEffect(()=>{
  window.addEventListener('resize',showWidth)
  return ()=> {
    window.removeEventListener('resize',showWidth)
  } 
  },[]);
  return <>
  <button className='btn' onClick={()=>setShow(!show)}>click</button>
  <h3>{show}</h3>
  {show && <Example />}
  </>;
};

export default UseEffectBasics;
