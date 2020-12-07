import React from 'react'

const EditableFormBackup = (props) => {
  console.log(props);

  return (
    <div>
      <form onSubmit={props.handleSubmission}>
        <div>
          <input className='border w-1/2' type="text" name="titleOne" id="titleOne"
            placeholder={props.titleOne || ' Work location or University '}/>
        </div>
        <div>
          <input className='border w-1/2' type="text" name="descriptionOne" id="descriptionOne"
            placeholder={props.descriptionOne || ' location details'}/>
        </div>
        <div>
          <input className='border w-1/2' type="text" name="titleTwo" id="titleTwo"
            placeholder={props.titleTwo || ' Role or Major'}/>
        </div>
        <div>
          <input className='border w-1/2' type="text" name="descriptionTwo" id="descriptionTwo"
            placeholder={props.descriptionTwo || ' role or major details'}/>
        </div>
        <button className='btn btn-purple mt-1' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditableFormBackup
