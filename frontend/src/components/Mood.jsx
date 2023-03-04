import axios from 'axios';
import { useEffect } from 'react';

const Mood = ({getMessage, setGetMessage}) => {
    
    useEffect(()=>{
        axios.post('http://localhost:5000/flask/hello', {
        type: 'words',
        message: "x"
        })
        .then(function (response) {
        console.log(response)
        setGetMessage(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        }, [])
    return (
        <div id='flask'>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}
          </div>
    )
        }

export default Mood