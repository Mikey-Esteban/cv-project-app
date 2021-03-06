import React , {useState} from 'react'

const EditableLIForm = (props) => {

  const [cancel, setCancel] = useState(false);

  const handleCancel = event => {
    setCancel(true);
  }

  return (
    <div className='text-center'>
      <form onSubmit={props.handleSubmission}>
        <div>
          <input className='border w-1/2' type="hidden" name="cancel" id="cancel"
            value={cancel}/>
        </div>
        <div>
          <input className='border text-center w-2/3' type="text" name="title" id="title"
            placeholder={props.title || 'bolded part of bullet'}/>
        </div>
        <div>
          <textarea className='border text-center w-2/3' rows="3" type="text" name="description" id="description"
            placeholder={props.description || 'normal text'}/>
        </div>
        <div className='flex flex-row justify-center'>
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

export default EditableLIForm
