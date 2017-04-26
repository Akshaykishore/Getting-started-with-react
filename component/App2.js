import React from 'react';

class App2 extends React.Component {
   render() {
        var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
     return (
        <div>
        this is second app2 file
        <h1 style = {myStyle}>Testing color</h1>
        </div>
      );
   }
}


export default App2;