import { useState, useEffect } from 'react';
import './App.css';
import Journal from './components/Journal';
import EntryDate from './components/Date';
import Mood from './components/Mood';

function App() {

  let today  = new Date().toLocaleDateString("en-US")
  const [myDate, setMyDate] = useState(today)
  const [myTxt, setMyTxt] = useState('')
  const [style, setStyle] = useState({backgroundColor: "#666f84"})
  const [getMessage, setGetMessage] = useState({})
  
  useEffect(() => {
    if (getMessage.data) {
        const color = {backgroundColor: getMessage.data.message}
        setStyle(color)
        console.log("setting style")
        console.log(getMessage.data.message)
        console.log(color)
    }
  },[getMessage] )

  const processDate = (e) => {
    console.log(e.target.value)
  }

  const handleTextArea = (e) => {
    const inputText = e.target.value
    setMyTxt(inputText)
  }

  return (
    <div className="App" style={style}>
      <div className='Body' >
        <h1>My pretty sad journal</h1>
        <EntryDate dateArea={processDate} theDate={myDate}/>
        <Journal textArea={handleTextArea}/>
        <Mood 
          getMessage={getMessage} 
          setGetMessage={setGetMessage}
          myTxt={myTxt}
          setStyle={setStyle}
        />
      </div>
    </div>
  );
}

export default App;
