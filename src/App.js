import React from 'react';
import Profili from './profile/profile';
import Ppic from "./pic.jpg";
import Ppiic from "./piiic.jpg" 

function App() {
  let msg ="Hi! Im Ridha "
  const handleName = () => alert(msg)
  return (
    <div className="App" style={{ background:"grey", minHeight:"100vh", textAlign:"center"}} >
      
      <img style={{width:230 ,height:230, borderRadius:"50%", marginTop:10}} src={Ppic} alt ='pic' />
      
      <Profili fullName="Mouhamed Ridha" old= {27} hobby="photography" job="marine mechanic" handleName={handleName} >
        <img style={{width:250 ,height:250  }} src={Ppiic} alt ='piiic'  />
      </Profili>
    
    </div>
  );
}

export default App;
