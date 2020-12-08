import React, { Component } from 'react'
import EditableLIForm from './EditableLIForm'

class EditableLI extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      title: props.title,
      description: props.description,
      viewForm: false
    }
  }

  mouseOver = (event) => {
  }

  handleFormSwitch = () => {
    this.setState({ viewForm: true })
  }

  handleDelete = event => {
    let li;
    event.target.tagName === 'I' ?
    li = event.target.parentNode.parentNode.parentNode :
    li = event.target.parentNode.parentNode ;
    console.log(li);
    li.remove();
  }

  handleSubmission = event => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title) this.setState({
      title:title
    })
    if (description) this.setState({
      description:description
    })
    this.setState({ viewForm: false })
  }

  render() {
    const { id, title, description, viewForm } = this.state;

    if (viewForm === false) {
      return (
        <li id={id} onMouseOver={this.mouseOver}>
          <span className="font-semibold text-gray-500">{title} </span>
          <span className="text-gray-500">{description}
            <button className="btn-level ml-1"
              onClick={this.handleFormSwitch}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="btn-level"
              onClick={this.handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </span>
        </li>
      )
    } else {
      return (
          <EditableLIForm title={title}
                description={description}
                handleSubmission={this.handleSubmission} />
      )
    }
  }
}

export default EditableLI
