import React from 'react';
import App1 from './component/App1';
import App2 from './component/App2';
class App extends React.Component {
  constructor(){
    super();
    this.state={name:"akshay"  };
  }
   render() {
     setTimeout(()=>{
      this.setState({name:"heema"})
     },1000)
      return (
        <div>
        {this.state.name}
       <App1 />
        <App2 />
       </div>
      );
   }
}


export default App;