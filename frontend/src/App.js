import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Journal from './components/Journal';
import EntryDate from './components/Date';

function App() {

  let today  = new Date().toLocaleDateString("en-US")
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

  const [getMessage, setGetMessage] = useState({})
  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <div className='Body'>
        <h1>My pretty sad journal</h1>
        <EntryDate dateArea={processDate} theDate={myDate}/>
        <Journal textArea={handleTextArea}/>
      </div>
      <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
    </div>
  );
}

export default App;
