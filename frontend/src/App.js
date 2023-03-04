import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Journal from './components/Journal';
import EntryDate from './components/Date';
import Mood from './components/Mood';

function App() {

  let today  = new Date().toLocaleDateString("en-US")
  const [myDate, setMyDate] = useState(today)
  const [myTxt, setMyTxt] = useState('')

  const [getMessage, setGetMessage] = useState({})

  const processDate = (e) => {
    setMyDate(myDate)
    console.log(e.target.value)
  }

  const handleTextArea = (e) => {
    setMyTxt(myTxt)
    console.log(e.target.value)
  }

  const handleFlask = (e) => {
    setGetMessage(getMessage)
  }

  return (
    <div className="App">
      <div className='Body'>
        <h1>My pretty sad journal</h1>
        <EntryDate dateArea={processDate} theDate={myDate}/>
        <Journal textArea={handleTextArea}/>
        <Mood 
          flask={handleFlask} 
          getMessage={getMessage} 
          setGetMessage={setGetMessage}
        />
      </div>
    </div>
  );
}

export default App;
