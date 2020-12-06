import React, { Component } from 'react'
import PersonalInfoForm from './PersonalInfoForm'

class PersonalInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'John Doe',
      location: 'Sometown, NH 03824',
      phone: '(555) 555-5555',
      email: 'jd@somedomain.com',
      linkedin: 'LinkedIn url',
      viewForm: false
    }
  }

  handleFormSwitch = () => {
    this.setState({ viewForm: true })
  }

  handleSubmission = event => {

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;

    if (name) this.setState({
      name:name
    })
    if (location) this.setState({
      location:location
    })
    if (phone) this.setState({
      phone:phone
    })
    if (email) this.setState({
      email:email
    })
    if (linkedin) this.setState({
      linkedin:linkedin
    })

    this.setState({ viewForm: false })
  }

  render() {
    const { name, location, phone, email, linkedin } = this.state;

    if (this.state.viewForm === false) {
      return (
        <div className="text-center mb-2">
          <h1 className="title">{name}</h1>
          <p>{location}</p>
          <p>{phone}</p>
          <p>{email} | {linkedin}</p>
          <button className='btn btn-purple'
            onClick={this.handleFormSwitch}>Edit</button>
        </div>
      )
    } else {
      return <PersonalInfoForm name={name} location={location}
          phone={phone} email={email} linkedin={linkedin} handleSubmission={this.handleSubmission}/>
    }
  }

}

export default PersonalInfo
