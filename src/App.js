import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import api from './API/api.json'
import CardDetails from './components/CardDetails/CardDetails';
import {useSelector} from 'react-redux'

function App() {

  const [cards,setCards]=useState(api);
  const{showModal}=useSelector((store)=>store.modal);
  return (
   <>
  <div className='main'>
   
    {showModal&&<CardDetails />}
   
  <div className='container'>
    {
      cards.map((card,i)=>{
        return(
          <Card data={card} key={i}/>
        )
      })
    }
    
   </div>
   
  </div>
 
   

  
   
   </>
  );
}

export default App;
