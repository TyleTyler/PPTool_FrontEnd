import './App.css';
import { useState } from 'react';

function App() {
  const [addPhoneState, setAddPhoneState] = useState(false)



  return (
    <div className="App">
      <div className='logo'/>
      {addPhoneState && <form className='addPhoneState'> 
          <input type='text'/>

      
      </form> }
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
