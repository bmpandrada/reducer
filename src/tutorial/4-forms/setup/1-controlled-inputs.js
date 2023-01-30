import React, { useState } from 'react';
import Example from '../../../assets/Lottie.component';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    email:'', password:''
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setPerson({...person, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.email && person.password){
      const newPeople = {...person, id: new Date().getTime().toString()}
      setPeople([...people,newPeople])
      setPerson({ email:'', password:''})
    }
  }
  const removeHandle = (id) => {
    const remove = people.filter((persons)=>persons.id !== id)
    setPeople(remove)
  }
  return <>
  <article>
  <Example />
  <form className='form'>
  <div className='form-control'>
  <label htmlFor='email'>
    Email :
  </label>
  <input name='email' type='email' id='email' value={person.email}
    onChange={handleChange}
  />
  </div>

  <div className='form-control'>
  <label htmlFor='email'>
    Password :
  </label>
  <input name='password' type='password' id='password' value={person.password}
    onChange={handleChange}
  />
  </div>
  <button type='submit' onClick={handleSubmit}>Add</button>
  </form>
  {people.map((person)=>{
    const {id, email} = person;
    return<div className='item' key={id}>
        <h4>{email}</h4>
        <button onClick={()=>removeHandle(id)} className='button'>remove</button>
      </div>
    
  })}
  </article>  
  
  
  </>;
};

export default ControlledInputs;
