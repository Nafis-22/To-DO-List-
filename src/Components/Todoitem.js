import React, { useState } from 'react'
import Todos from './Todos.js';
export default function Todoitem() {
const [input, setInput]=useState("");
const [items, setItems] = useState([]);
const itemList=(event)=>{
setInput(event.target.value);
};
const listOfItem =()=>{  
  setItems((oldItem)=>{
    return [...oldItem, input];
});
  setInput("")};
const deleteItem=(id)=>{
setItems((oldItems)=>{
  return oldItems.filter((arrElem, index)=>{
    return index !== id;});});}

  return (
    <>
   <div className="main_div">
   <div className="center_div">
     <br/>
     <h1>TO-DO List</h1><br/>
  <input type="text" 
  placeholder="Add to items" 
  value={input}
  onChange={itemList}
  />
  <button  onClick={listOfItem} > + </button>
  <ul>
{
  items.map((itemval, index)=>{
    return<Todos 
   
    key={index}
    id={index}
    text={itemval}
    onSelect={deleteItem}
    />
    
  })
}
</ul>
</div>
</div>

    </>
  )
}
