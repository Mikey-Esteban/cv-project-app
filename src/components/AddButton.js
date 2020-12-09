import React from 'react'

const AddButton = (props) => {
  const { text, textSize, buttonSpacing, clickHandler } = props;
  return (
    <button className={buttonSpacing}
      onClick={clickHandler}>
      <i className="fas fa-plus text-purple-300"></i>
      <span className={`ml-4 text-purple-300 ${textSize}`}>{text}</span>
    </button>
  )
}

export default AddButton
