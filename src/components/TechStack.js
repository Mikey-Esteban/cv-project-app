import React, { Component} from 'react'
import EditableLI from './EditableLI'
import EditableLIForm from './EditableLIForm'
import { v4 as uuid } from 'uuid';

class TechStack extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: props.title,
      list: props.listData,
      viewForm: false
    }
  }

  handleFormSwitch = () => {
    this.setState({ viewForm: true })
  }

  handleListSubmission = event => {
    event.preventDefault();

    // create new list item
    const id = uuid();
    const title = event.target.querySelector('#title').value;
    const description = event.target.querySelector('#description').value;
    const newListItem = { id: id, title: title, details: description };

    // copy old list
    const listDataCopy = [...this.state.list];
    listDataCopy.push(newListItem);

    this.setState({ list: listDataCopy })
    this.setState({ viewForm: false })
  }


  render() {
    const { title, list } = this.state;
    return (
      <div className="container px-6 mx-auto max-w-screen-lg mb-6">
        <h2 className="header-title mb-4">{title}</h2>
        <ul className='list-disc list-inside pl-6'>
        {
           list.map(item => <EditableLI key={item.id} id={item.id} title={item.title} description={item.details} />)
        }
        </ul>
        <button className='ml-6'
          onClick={ this.handleFormSwitch }>
          <i className="fas fa-plus text-purple-300"></i>
          <span className="ml-4 text-purple-300 text-sm">Add to list</span>
        </button>
        { this.state.viewForm && <EditableLIForm handleSubmission={this.handleListSubmission} />}
      </div>
    )
  }

}

export default TechStack
