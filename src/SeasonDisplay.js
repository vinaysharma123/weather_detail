import React from 'react';
 import './Season-display.css';
 const sysconfig={

   summer:{

    text:"Let hit the beach",
   	  icon:"sun"
   } ,
    winter:{
    	 text: "Blur its chilly",
    	  icon:"snowflake"

    }
 }

 const getSeason=(lat,month)=>{
    if(month >2 &&month<9){
        	 return lat>0 ? "summer": "winter";

        	}
    	else
    		{return lat>0 ? "winter": "summer";}

 };
 const SeasonDisplay= (props)=>{

    const  season=getSeason(props.lat, new Date().getMonth());
       const { text, icon}= sysconfig[season];
       
   return (
   	<div className={`season-display ${season}`}>
   	<i className={` massive iconimg1 ${icon} icon`}/>
     <h1>{text}</h1>
   	<i className={`massive iconimg2 ${icon} icon`}/>

   </div>
);

 };
  export default SeasonDisplay;