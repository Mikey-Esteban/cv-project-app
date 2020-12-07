import React, { Component } from 'react'
import EditableULForm from './EditableULForm'

class EditableUL extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      titleOne: props.titleOne,
      descriptionOne: props.descriptionOne,
      titleTwo: props.titleTwo,
      descriptionTwo: props.descriptionTwo,
      viewForm: false
    }
  }

  handleFormSwitch = () => {
    this.setState({ viewForm: true })
  }

  handleDelete = event => {
    let targetDiv;
    event.target.tagName === 'I' ?
    targetDiv = event.target.parentNode.parentNode.parentNode.parentNode.parentNode :
    targetDiv = event.target.parentNode.parentNode.parentNode.parentNode ;
    targetDiv.remove();
  }

  handleSubmission = event => {

    const titleOne = document.getElementById('titleOne').value;
    const descriptionOne = document.getElementById('descriptionOne').value;
    const titleTwo = document.getElementById('titleTwo').value;
    const descriptionTwo = document.getElementById('descriptionTwo').value;

    if (titleOne) this.setState({
      titleOne:titleOne
    })
    if (descriptionOne) this.setState({
      descriptionOne:descriptionOne
    })
    if (titleTwo) this.setState({
      titleTwo:titleTwo
    })
    if (descriptionTwo) this.setState({
      descriptionTwo:descriptionTwo
    })

    this.setState({ viewForm: false })
  }

  render() {
    const { id, titleOne, descriptionOne, titleTwo, descriptionTwo } = this.state;

    if (this.state.viewForm === false) {
      return (
        <div id={id}>
          <div>
            <span className="font-medium text-gray-500">{titleOne} </span>
            <span className="text-gray-500">{descriptionOne}</span>
          </div>
          <div>
            <span className="font-medium text-gray-500">{titleTwo} </span>
            <span className="text-gray-500">{descriptionTwo}
            <button className="btn-level ml-1"
              onClick={this.handleFormSwitch}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="btn-level"
              onClick={this.handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </span>
          </div>
        </div>
      )
    } else {
      return (
          <EditableULForm titleOne={titleOne} descriptionOne={descriptionOne}
                titleTwo={titleTwo} descriptionTwo={descriptionTwo}
                handleSubmission={this.handleSubmission} />
      )
    }
  }

}

export default EditableUL
