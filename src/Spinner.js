import React from 'react';
 const Spinner=(props)=>{
 	 return (
   <div className="ui active dimmer">
   <div className="ui big text loader">{props.ms}</div>
   </div>
   	);
 };

 Spinner.defaultProps={
 	ms:"Loading.. "
 }
  export default Spinner;