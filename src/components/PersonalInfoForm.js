import React from 'react'

const PersonalInfoForm = (props) => {
  console.log(props);

  return (
    <div className='text-center'>
      <form onSubmit={props.handleSubmission}>
        <div>
          <input className='border text-center' type="text" name="name" id="name"
            placeholder={props.name}/>
        </div>
        <div>
          <input className='border text-center' type="text" name="location" id="location"
            placeholder={props.location}/>
        </div>
        <div>
          <input className='border text-center' type="text" name="phone" id="phone"
            placeholder={props.phone}/>
        </div>
        <div>
          <input className='border text-center' type="text" name="email" id="email"
            placeholder={props.email}/> |
          <input className='border text-center ml-1' type="text" name="linkedin" id="linkedin"
            placeholder={props.linkedin}/>
        </div>
        <button className='btn btn-purple mt-1' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PersonalInfoForm
