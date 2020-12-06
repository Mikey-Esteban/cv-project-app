import React from 'react'

const EditableForm = (props) => {
  console.log(props);

  return (
    <div>
      <form onSubmit={props.handleSubmission}>
        <div>
          <input className='border w-1/2' type="text" name="title" id="title"
            placeholder={props.title}/>
        </div>
        <div>
          <textarea className='border w-1/2' rows="3" type="text" name="description" id="description"
            placeholder={props.description}/>
        </div>
        <button className='btn btn-purple mt-1' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditableForm
