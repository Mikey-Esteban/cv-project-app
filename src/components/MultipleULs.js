import React, { useState } from 'react'
import EditableUL from './EditableUL'
import InitialUL from './InitialUL'
import AddButton from './AddButton'
import EditableULForm from './EditableULForm'
import EditableLIForm from './EditableLIForm'
import { v4 as uuid } from 'uuid';

const MultipleULs = (props) => {

  const [ listData, setListData ] = useState(props.listData);
  const [ viewHeaderForm, setViewHeaderForm ] = useState(false);

  const handleHeaderFormSwitch = () => {
    setViewHeaderForm(true);
  };

  const handleListFormSwitch = event => {
    const listDataCopy = [...listData];
    // grab targetDOM to change viewListForm
    const targetDiv = event.target.parentNode.parentNode;
    const targetObject = listDataCopy.filter(obj => obj.id === targetDiv.id)[0];
    targetObject.viewListForm = true;
    // update listData
    setListData(listDataCopy);
  }

  const handleHeaderSubmission = event => {
    event.preventDefault();
    setViewHeaderForm(false);

    // handle cancel button on form
    const cancel = event.target.querySelector('#cancel').value
    if (cancel === 'true') return

    // create new header
    const id = uuid();
    const titleOne = event.target.querySelector('#titleOne').value;
    const descriptionOne = event.target.querySelector('#descriptionOne').value;
    const titleTwo = event.target.querySelector('#titleTwo').value;
    const descriptionTwo = event.target.querySelector('#descriptionTwo').value;
    const newHeader = { id: id,
          titleOne: titleOne, descriptionOne: descriptionOne,
          titleTwo: titleTwo, descriptionTwo: descriptionTwo,
          list: [], viewListForm: false };

    // copy listData array
    const listDataCopy = [...listData];
    listDataCopy.push(newHeader);
    // update listData
    setListData(listDataCopy);
  }

  const handleListSubmission = event => {
    event.preventDefault();

    const listDataCopy = [...listData];
    // grab targeObject and change viewListForm
    const targetDiv = event.target.parentNode.parentNode;
    const targetObject = listDataCopy.filter(obj => obj.id === targetDiv.id)[0];
    targetObject.viewListForm = false;

    const cancel = event.target.querySelector('#cancel').value
    // if not cancel, create new list item
    if (cancel === 'false') {
      const id = uuid();
      const title = event.target.querySelector('#title').value;
      const description = event.target.querySelector('#description').value;
      const newListItem = { id: id, title: title, details: description };
      // push new item to correct obj.list
      targetObject.list.push(newListItem);
    }
    // update listData
    setListData(listDataCopy);
  }

  const { id, title } = props;

  return (
    <div className="container px-6 mx-auto max-w-screen-lg mb-6" id={id}>
      <h2 className="header-title mb-4">{title}</h2>
      { listData &&
        listData.map(obj => {
          return (
            <div key={obj.id} id={obj.id}>
              <EditableUL id={obj.id}
                titleOne={obj.titleOne} descriptionOne={obj.descriptionOne}
                titleTwo={obj.titleTwo} descriptionTwo={obj.descriptionTwo}/>
              <InitialUL list={obj.list} />
              <AddButton clickHandler={handleListFormSwitch} buttonSpacing={'ml-6'} text={'Add to list'} textSize={'text-sm'}/>
              { obj.viewListForm && <EditableLIForm handleSubmission={handleListSubmission} />}
            </div>
          )
        })
      }
      <AddButton clickHandler={handleHeaderFormSwitch} buttonSpacing={"mt-3"} text={`Add ${title}`}/>
      { viewHeaderForm && <EditableULForm handleSubmission={handleHeaderSubmission} />}
    </div>
  )
}

export default MultipleULs
