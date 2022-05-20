import React from 'react'

export default function Todos(props) {
  return (
<>
<div className='todo_style'>
<i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id);}}/> 
<li >{props.text}</li>
</div>
    </>
    
    
  )
}
