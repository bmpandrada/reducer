import React, { useState, useReducer } from 'react';
import Modal from './Modal'
import { reducer } from './reducer'
// import { data } from '../../../data'

// reducer function

const defaultStat = {
  people:[],
  isModalOpen:false,
  modalContent:''
  
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultStat)
console.log(name)
//handleSubmit
  const handleSubmit = (e) =>{
    console.log(name)
    e.preventDefault();
    if(name){
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type: 'SUBMIT', payload:newItem})
      setName('')
    }else{
      dispatch({type: 'NO_VALUE'})
    }
    
  } 
  //handleChange
  const handleChange = (e) => {
    setName(e.target.value)
  }
//closeModal
  const closeModal= () => {
    dispatch({type: 'CLOSE_MODAL'})
  }
  
// }
const remove = (person) => {
  dispatch({type:'REMOVE_ITEM', payload:person.id})
}
  return <div className='container'>
    {state.isModalOpen && <Modal  modalContent={state.modalContent} closeModal={closeModal}/>}
  <form onSubmit={handleSubmit}
  className='form'>
  <div>
    <input type='text' id='name'
      value={name} onChange={handleChange}
    />
  </div>
  <button type='submit'>add</button>
  </form>
  {state.people.map((person)=>{
   return  <div key={person.id} className='item'>
    <h4>{person.name}</h4>
    <button onClick={()=> remove(person)}>remove item</button>
    </div>
  })}
  </div>;
};

export default Index;
