import { useState } from 'react';
import './App.css';

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
        <div className='page'>
          <textarea 
            id="textarea1" 
            class="input shadow" 
            name="name" 
            rows="15" 
            cols="100" 
            placeholder="Your text here "
            onInput={handleTextArea}>
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
