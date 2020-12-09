import React, { useState } from 'react'
import EditableLI from './EditableLI'
import EditableLIForm from './EditableLIForm'
import { v4 as uuid } from 'uuid';

const SingleUL = props => {

  const [list, setList] = useState(props.listData);
  const [viewForm, setViewForm] = useState(false);

  const handleFormSwitch = () => {
    setViewForm(true)
  }

  const handleListSubmission = event => {
    event.preventDefault();

    setViewForm(false)
    // handle cancel button on form
    const cancel = event.target.querySelector('#cancel').value
    if (cancel === 'true') return

    // create new list item
    const id = uuid();
    const title = event.target.querySelector('#title').value;
    const description = event.target.querySelector('#description').value;
    const newListItem = { id: id, title: title, details: description };

    // copy old list
    const listDataCopy = [...list];
    listDataCopy.push(newListItem);

    setList(listDataCopy)
  }

  return (
    <div className="container px-6 mx-auto max-w-screen-lg mb-6">
      <h2 className="header-title mb-4">{props.title}</h2>

      { props.headerTitle && <h1 className='text-center title'>{props.headerTitle}</h1> }

      <ul className='list-disc list-inside pl-6'>
      {
         list.map(item => <EditableLI key={item.id} id={item.id} title={item.title} description={item.details} />)
      }
      </ul>
      <button className='ml-6'
        onClick={ handleFormSwitch }>
        <i className="fas fa-plus text-purple-300"></i>
        <span className="ml-4 text-purple-300 text-sm">Add to list</span>
      </button>
      { viewForm && <EditableLIForm handleSubmission={handleListSubmission} />}
    </div>
  )
}

export default SingleUL
