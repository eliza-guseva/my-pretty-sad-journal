import { useState } from 'react';
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
    console.log(e.target.value)
  }

  const handleTextArea = (e) => {
    const inputText = e.target.value
    setMyTxt(inputText)
  }

  return (
    <div className="App">
      <div className='Body'>
        <h1>My pretty sad journal</h1>
        <EntryDate dateArea={processDate} theDate={myDate}/>
        <Journal textArea={handleTextArea}/>
        <Mood 
          getMessage={getMessage} 
          setGetMessage={setGetMessage}
          myTxt={myTxt}
        />
      </div>
    </div>
  );
}

export default App;
