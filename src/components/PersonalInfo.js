import React, { useState } from 'react'
import PersonalInfoForm from './PersonalInfoForm'

const PersonalInfo = () => {

  const [ name, setName ] = useState('John Doe');
  const [ location, setLocation ] = useState('Sometown, NH 03824');
  const [ phone, setPhone ] = useState('(555) 555-5555');
  const [ email, setEmail ] = useState('jd@somedomain.com');
  const [ linkedin, setLinkedin ] = useState('LinkedIn url');
  const [ editing, setEditing ] = useState(false);

  const handleFormSwitch = () => {
    setEditing(true);
  };

  const handleSubmission = event => {

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;

    name && setName(name);
    location && setLocation(location);
    phone && setPhone(phone);
    email && setEmail(email);
    linkedin && setLinkedin(linkedin);

    setEditing(false);
  }

  return editing ?
  (
    <PersonalInfoForm name={name} location={location}
        phone={phone} email={email} linkedin={linkedin} handleSubmission={handleSubmission}/>
  ) :
  (
    <div className="text-center mb-2">
      <h1 className="title">{name}</h1>
      <p>{location}</p>
      <p>{phone}</p>
      <p>{email} | {linkedin}</p>
      <button className='btn btn-purple'
        onClick={handleFormSwitch}>Edit</button>
    </div>
  ) 
}

export default PersonalInfo
