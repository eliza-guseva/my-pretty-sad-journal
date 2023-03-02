import { useState } from 'react';
import './App.css';
import Journal from './components/Journal';

function App() {

  const [myTxt, setMyTxt] = useState('')

  const handleTextArea = (e) => {
    setMyTxt(myTxt)
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <div className='Body'>
        <h1>My pretty sad journal</h1>
        <Journal textArea={handleTextArea}/>
      </div>
    </div>
  );
}

export default App;
