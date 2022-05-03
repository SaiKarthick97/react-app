import React,{useState} from 'react';
import Child from './Child';

function Parent(){
  const [val,setVal]=useState("");
  const handleClick=(data)=>{setVal(data);
     }
  return(
    <div>

     {val} 
     <Child parentData={handleClick}/> 
      </div>
  )

}
export default Parent;