import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
const [people, setPeople] = useState({firstName:'', email:''});
const [person, setPerson] = useState([]);
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setPeople({...people,[name]:value});
}

const handleSubmit = (e) => {
  e.preventDefault();
  const newPeople = {...people, id: new Date().getTime().toString()};
  setPerson([...person, newPeople]);
  setPeople({firstName:'', email:''});
}

const removeHandle = (id) => {
  const remove = person.filter((user)=>user.id !== id)
  setPerson(remove)
}



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  
  
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input name='firstName'
            type='text'
            id='firstName'
            value={capitalizeFirstLetter(people.firstName)}
            onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input name='email'
              type='email'
            id='email'
            value={people.email}
            onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {person.map((data)=>{
          const{firstName, email, id} = data
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <button className='btn' onClick={()=>removeHandle(id)}> sremove</button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
