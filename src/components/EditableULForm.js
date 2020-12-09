import React, { useState } from 'react'

const EditableULForm = (props) => {

  const [ cancel, setCancel ] = useState(false);

  const handleCancel = event => {
    setCancel(true);
  };

  return (
    <div>
      <form onSubmit={props.handleSubmission}>
        <div>
          <input className='border w-1/2' type="hidden" name="cancel" id="cancel"
            value={cancel}/>
        </div>
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
        <div className='flex flex-row justify-center w-1/2'>
          <div className='flex-initial'>
            <button className='btn btn-purple mt-1' type="submit">Submit</button>
          </div>
          <div className='flex-initial ml-3'>
            <button className="btn btn-gray mt-1"
              onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditableULForm
