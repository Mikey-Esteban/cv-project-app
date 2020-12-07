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

  handleFormSwitch = () => {
    this.setState({ viewForm: true })
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
    const { id, title, description } = this.state;

    if (this.state.viewForm === false) {
      return (
        <li id={id}>
          <span className="font-bold">{title} </span>
          <span>{description}
            <button className="btn-level"
              onClick={this.handleFormSwitch}>
              <i className="fas fa-edit"></i>
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
