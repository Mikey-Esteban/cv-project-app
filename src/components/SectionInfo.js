import React, { Component } from 'react'
import Editable from './Editable'
import EditableLI from './EditableLI'
import EditableLIForm from './EditableLIForm'
import { v4 as uuid } from 'uuid';

class SectionInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: uuid(),
      title: props.title,
      headerTitle: props.headerTitle,
      headerData: props.headerData,
      listData: props.listData,
      viewForm: false
    }
  }

  handleFormSwitch = () => {
    this.setState({ viewForm: true })
  }

  handleListSubmission = event => {
    event.preventDefault();
    const id = uuid();
    const title = event.target.querySelector('#title').value;
    const description = event.target.querySelector('#description').value;
    const newListData = { id: id, title: title, details: description };

    let listDataCopy = [...this.state.listData];
    listDataCopy.push(newListData);

    this.setState({
      listData: listDataCopy
    })

    this.setState({ viewForm: false })
  }

  render() {
    const { id, title, headerTitle, headerData, listData, viewForm } = this.state;

    return (
      <div className="container px-6 mx-auto max-w-screen-lg mb-6"
        id={id}>
        <h2 className="header-title mb-4">{title}</h2>
        { headerTitle && <h1 className='text-center title'>{headerTitle}</h1> }
        { headerData &&
          headerData.map(info => {
            return <Editable key={info.id} id={info.id} title={info.title} description={info.details} />
          })
        }
        <ul className='list-disc list-inside pl-6'>
          {
            listData.map(info => {
              return (
                <EditableLI key={info.id} id={info.id} title={info.title} description={info.details} />
              )
            })
          }
        </ul>
        <button className='ml-6'
          onClick={this.handleFormSwitch}>
          <i className="fas fa-plus text-purple-300"></i>
          <span className="ml-4 text-purple-300 text-sm">Add to list</span>
        </button>
        { viewForm && <EditableLIForm handleSubmission={this.handleListSubmission} />}
      </div>
    )
  }


}

export default SectionInfo
