import React from 'react'

const EditableLIForm = (props) => {
  console.log(props);

  return (
    <div className='text-center'>
      <form onSubmit={props.handleSubmission}>
        <div>
          <input className='border text-center w-2/3' type="text" name="title" id="title"
            placeholder={props.title}/>
        </div>
        <div>
          <textarea className='border text-center w-2/3' rows="3" type="text" name="description" id="description"
            placeholder={props.description}/>
        </div>
        <button className='btn btn-purple mt-1' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditableLIForm
