import React, { useState } from 'react'
import EditableULForm from './EditableULForm'

const EditableUL = props => {

  const { id } = props;
  const [ titleOne, setTitleOne ] = useState(props.titleOne);
  const [ titleTwo, setTitleTwo ] = useState(props.titleTwo);
  const [ descriptionOne, setDescriptionOne ] = useState(props.descriptionOne);
  const [ descriptionTwo, setDescriptionTwo ] = useState(props.descriptionTwo);
  const [ editing, setEditing ] = useState(false);

  const handleFormSwitch = () => {
    setEditing(true);
  };

  const handleDelete = event => {
    let targetDiv;
    event.target.tagName === 'I' ?
    targetDiv = event.target.parentNode.parentNode.parentNode.parentNode.parentNode :
    targetDiv = event.target.parentNode.parentNode.parentNode.parentNode ;
    targetDiv.remove();
  }

  const handleSubmission = event => {

    const titleOne = document.getElementById('titleOne').value;
    const descriptionOne = document.getElementById('descriptionOne').value;
    const titleTwo = document.getElementById('titleTwo').value;
    const descriptionTwo = document.getElementById('descriptionTwo').value;

    titleOne && setTitleOne(titleOne);
    titleTwo && setTitleTwo(titleTwo);
    descriptionOne && setDescriptionOne(descriptionOne);
    descriptionTwo && setDescriptionTwo(descriptionTwo);

    setEditing(false);
  }


  return editing ?
  (
    <EditableULForm titleOne={titleOne} descriptionOne={descriptionOne}
          titleTwo={titleTwo} descriptionTwo={descriptionTwo}
          handleSubmission={handleSubmission} />
  ) :
  (
    <div id={id}>
      <div>
        <span className="font-medium text-gray-500">{titleOne} </span>
        <span className="text-gray-500">{descriptionOne}</span>
      </div>
      <div>
        <span className="font-medium text-gray-500">{titleTwo} </span>
        <span className="text-gray-500">{descriptionTwo}
        <button className="btn-level ml-1"
          onClick={handleFormSwitch}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="btn-level"
          onClick={handleDelete}>
          <i className="far fa-trash-alt"></i>
        </button>
      </span>
      </div>
    </div>
  )
}

export default EditableUL
