const Journal = ({textArea}) => {
    return (
        <div className='page'>
          <textarea 
            id="textarea1" 
            name="name" 
            rows="15" 
            cols="100" 
            placeholder="Write about it..."
            onInput={textArea}
            >
          </textarea>
        </div>
    )
}

export default Journal
