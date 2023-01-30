import React, { useState } from 'react';
import { data } from '../../../data';


// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
   setPeople(()=>{
    return people.filter((person)=>person.id !== id)
   })
  }
  
  return <section >
<h3>prop drilling</h3>
<List people={people} handleRemove={handleRemove} />
  </section>;
};

const List = ({people, handleRemove }) => {
  return(
     <>
  {people.map((person)=>{
    const {name, id} = person
    return <SinglePerson name={name}  key={id} {...person}
      handleRemove={handleRemove}
    />
  })}
  </>
  );
}

const SinglePerson = ({id, name, handleRemove}) => {
  return <div className='item' key={id}>
    <h4>{name}</h4>
    <button onClick={()=>handleRemove(id)}>remove</button>
  </div>
}

export default PropDrilling;
