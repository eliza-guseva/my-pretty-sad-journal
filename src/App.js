import { useState } from 'react';
import './App.css';
import Journal from './components/Journal';
import EntryDate from './components/Date';

function App() {

  let today  = new Date()
  today = today.toLocaleDateString("en-US")
  const [myDate, setMyDate] = useState(today)
  const [myTxt, setMyTxt] = useState('')

  const processDate = (e) => {
    setMyDate(myDate)
    console.log(e.target.value)
  }

  const handleTextArea = (e) => {
    setMyTxt(myTxt)
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <div className='Body'>
        <h1>My pretty sad journal</h1>
        <EntryDate dateArea={processDate} theDate={myDate}/>
        <Journal textArea={handleTextArea}/>
      </div>
    </div>
  );
}

export default App;
