import React from 'react';

function Child(props){
 const triggger=()=>{
   props.parentData("Hi Karthick");

 }

  return(
    <div>

     <button onClick={triggger}>Click Me </button>
      </div>
  )

}
export default Child;