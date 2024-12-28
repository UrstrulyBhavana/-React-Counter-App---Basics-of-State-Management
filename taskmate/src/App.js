import './App.css';
import {useState} from 'react';

function App(){

  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count + 1);
  }

   function handleSub(){
    setCount(count - 1);
   }

   function handleReset(){
    setCount(0);
   }

  return(
    <div className='app'>
      <div className='box'>
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>ADD</button>
        <button onClick={handleSub} className='sub'>SUB</button>
        <button onClick={handleReset} className='reset'>RESET</button>
      </div>
    </div>
  )
}

export default App;

