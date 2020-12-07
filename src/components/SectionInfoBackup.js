import React, { Component } from 'react'
import Editable from './Editable'
import EditableLI from './EditableLI'
import EditableForm from './EditableForm'
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
      // listData: props.headerData[0].list,
      viewListForm: props.headerData[0].viewListForm,
      // viewHeaderForm: false,
    }
  }

  handleHeaderFormSwitch = () => {
    this.setState({ viewHeaderForm: true })
  }

  handleListFormSwitch = event => {
    // make copy of headerData array
    let headerDataCopy = [...this.state.headerData];
    // grab targetDOM
    const targetDiv = event.target.parentNode.parentNode;
    // grab header obj
    const targetObject = headerDataCopy.filter(obj => obj.id === targetDiv.id)[0];
    targetObject.viewListForm = true;

    this.setState({ headerData: headerDataCopy })
  }

  handleHeaderSubmission = event => {
    event.preventDefault();

    // create new header
    const id = uuid();
    const title = event.target.querySelector('#title').value;
    const description = event.target.querySelector('#description').value;
    const newHeader = { id: id, title: title, details: description, list: [], viewListForm: false };

    // copy headerData array
    let headerDataCopy = [...this.state.headerData];
    headerDataCopy.push(newHeader);

    this.setState({
      headerData: headerDataCopy
    })

    this.setState({ viewHeaderForm: false })
  }

  handleListSubmission = event => {
    event.preventDefault();

    // create new list item
    const id = uuid();
    const title = event.target.querySelector('#title').value;
    const description = event.target.querySelector('#description').value;
    const newListItem = { id: id, title: title, details: description };

    // make copy of headerData array
    let headerDataCopy = [...this.state.headerData];
    // grab targetDOM
    const targetDiv = event.target.parentNode.parentNode;
    // grab header obj
    const targetObject = headerDataCopy.filter(obj => obj.id === targetDiv.id)[0];
    // push new item to correct obj.list
    targetObject.list.push(newListItem);

    targetObject.viewListForm = false;

    this.setState({
      headerData: headerDataCopy
    })


  }

  render() {
    const { id, title, headerTitle, headerData, viewHeaderForm } = this.state;

    return (
      <div className="container px-6 mx-auto max-w-screen-lg mb-6"
        id={id}>
        <h2 className="header-title mb-4">{title}</h2>

        <button onClick={this.handleHeaderFormSwitch}>
          <i className="fas fa-plus text-purple-300"></i>
          <span className="ml-4 text-purple-300">Add {title}</span>
        </button>
        { viewHeaderForm && <EditableForm handleSubmission={this.handleHeaderSubmission} />}

        { headerTitle && <h1 className='text-center title'>{headerTitle}</h1> }
        { headerData &&
          headerData.map(obj => {
            return (
              <div key={obj.id} id={obj.id}>
                <Editable id={obj.id} title={obj.title} description={obj.details} />
                <ul className='list-disc list-inside pl-6'>
                  {
                    obj.list && obj.list.map(info => {
                      return (
                        <EditableLI key={info.id} id={info.id} title={info.title} description={info.details} />
                      )
                    })
                  }
                </ul>
                <button className='ml-6'
                  onClick={this.handleListFormSwitch}>
                  <i className="fas fa-plus text-purple-300"></i>
                  <span className="ml-4 text-purple-300 text-sm">Add to list</span>
                </button>
                { obj.viewListForm && <EditableLIForm handleSubmission={this.handleListSubmission} />}
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default SectionInfo
