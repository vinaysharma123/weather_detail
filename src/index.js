import React from 'react';
import ReactDOM from 'react-dom'
 import SeasonDisplay from './SeasonDisplay'
 import Spinner from './Spinner'
  class App extends React.Component
 {
   state={ lat:null, errmsg:""};


    componentDidMount(){
    	window.navigator.geolocation.getCurrentPosition(
         position =>{this.setState({lat: position.coords.latitude});
     },
         err=>{
         	this.setState({errmsg: err.message});
         }
     );
      } 
       renderContent(){
if(this.state.lat && !this.state.errmsg)
    return <SeasonDisplay lat={this.state.lat} />;

    
      	return <div> <Spinner /> </div>;

       }

   render()
   {  return(
   <div className=" border red">
   {this.renderContent()}
   </div>

   	);
   	 
    }

  }

  ReactDOM.render(<App/>,document.querySelector("#root"));


 