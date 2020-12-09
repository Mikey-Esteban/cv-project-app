import React, { useState } from 'react'
import InitialUL from './InitialUL'
import AddButton from './AddButton'
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
      <InitialUL list={list} />
      <AddButton clickHandler={handleFormSwitch} buttonSpacing={'ml-6'} text={'Add to list'} textSize={'text-sm'} />
      { viewForm && <EditableLIForm handleSubmission={handleListSubmission} />}
    </div>
  )
}

export default SingleUL
