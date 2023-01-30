export const reducer = (state, action) => {
  if(action.type === 'SUBMIT'){
    const newItem = [...state.people,action.payload]
    return {
      ...state, 
      people:newItem,
    isModalOpen:true,
    modalContent:'item added',
  }
  }
  if(action.type === 'NO_VALUE'){
   return {
      ...state, 
    isModalOpen:true,
    modalContent:'no value',
  }
  }
  if(action.type === 'CLOSE_MODAL'){
    return {
      ...state, 
    isModalOpen:false,
    }
  }
  if(action.type === 'REMOVE_ITEM'){
    const removePerson = state.people.filter((user)=>user.id !== action.payload )
    return {...state,people:removePerson, isModalOpen:true, modalContent:'removed'}
  }
  throw new Error ('No Matching Action Type')
}