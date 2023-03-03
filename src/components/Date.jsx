const Date = ({dateArea, theDate}) => {
    return (
        <div className='page'>
          <textarea 
            id="datearea" 
            name="name" 
            rows="1" 
            cols="100" 
            onInput={dateArea}
            >
                {theDate}
          </textarea>
        </div>
    )
}

export default Date