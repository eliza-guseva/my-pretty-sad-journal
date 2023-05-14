import axios from 'axios';
import { useEffect } from 'react';

const Mood = ({getMessage, setGetMessage, myTxt, setStyle}) => {
    let myArray = myTxt.split(/[.!?]/)
    console.log(myArray)
    let myMessage = myArray.slice(-1)[0]
    console.log(myMessage)
    console.log(process.env.REACT_APP_BACKEND_ADDR)
    console.log("YAY")
    if (myMessage.length < 2) {
        myMessage = myArray.slice(-2)[0]
    };
    
    useEffect(()=>{
        axios.post(process.env.REACT_APP_BACKEND_ADDR, {
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
            console.log(getMessage)
          :
          <h3>LOADING</h3>}
          </div>
    )
}

export default Mood;
