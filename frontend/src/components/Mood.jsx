import axios from 'axios';
import { useEffect } from 'react';

const Mood = ({getMessage, setGetMessage, myTxt}) => {
    let myArray = myTxt.split(/[.!?]/)
    console.log(myArray)
    let myMessage = myArray.slice(-1)[0]
    console.log(myMessage)
    if (myMessage.length < 2) {
        myMessage = myArray.slice(-2)[0]
    };
    
    useEffect(()=>{
        axios.post('http://localhost:5000/flask/hello', {
        type: 'words',
        message: myMessage
        })
        .then(function (response) {
        console.log(response)
        setGetMessage(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        }, [myTxt]) 

    return (
        <div id='flask'>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}
          </div>
    )
}

export default Mood;
