
import React, { useEffect } from 'react';
import Lotte from '../../../assets/Lottie.component'

const Modal = ({modalContent, closeModal}) => {

  useEffect(()=>{
    setTimeout(()=>{
      closeModal();
    },3000)
  },[])
  return <div className='modal'>
  <Lotte/> {modalContent}
    
  </div>;
};

export default Modal;
