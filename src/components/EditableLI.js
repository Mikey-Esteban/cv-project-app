import React, { useState } from 'react'
import EditableLIForm from './EditableLIForm'

const EditableLI = (props) => {

  const [ title, setTitle ] = useState(props.title);
  const [ description, setDescription ] = useState(props.description);
  const [ editing, setEditing ] = useState(false);

  const handleFormSwitch = () => {
    setEditing(true );
  };

  const handleDelete = event => {
    let li;
    event.target.tagName === 'I' ?
    li = event.target.parentNode.parentNode.parentNode :
    li = event.target.parentNode.parentNode ;
    li.remove();
  };

  const handleSubmission = event => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    title && setTitle(title);
    description && setDescription(description);

    setEditing(false);
  }

  return editing ?
  (
    <EditableLIForm title={title}
          description={description}
          handleSubmission={handleSubmission} />
  ) :
  (
    <li id={props.id}>
      <span className="font-semibold text-gray-500">{title} </span>
      <span className="text-gray-500">{description}
        <button className="btn-level ml-1"
          onClick={handleFormSwitch}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn-level"
          onClick={handleDelete}>
          <i className="far fa-trash-alt"></i>
        </button>
      </span>
    </li>
  )
}

export default EditableLI
