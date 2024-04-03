import './App.css';
import { useState } from 'react';
import {NewPhone} from './newPhoneComp'
import { usePhoneListContext } from './usePhoneContext';


function App() {
  const {addPhoneState, setAddPhoneState} = usePhoneListContext()
  return (
    <div className="App">
      <div className='logo'/>
      {addPhoneState && <>
        <NewPhone/>  
      </> }
      <section className='curPhones'>
      <div className='title'> Current Phones to Add </div>
      <div className='butSection'>
        <button className='importBut' onClick={(e)=>{setAddPhoneState(true)}}> Make new Phone </button>
        <button className='importBut'> Import from CSV </button>  
      </div>
      <button className='uploadToServ'> Upload Phones to Server</button>
      </section>
    </div>
  );
}

export default App;
