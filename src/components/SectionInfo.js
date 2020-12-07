import React from 'react'
import Editable from './Editable'
import EditableLI from './EditableLI'

const SectionInfo = (props) => {

  const { title, headerTitle, headerData, listData } = props

  return (
    <div className="container px-6 mx-auto max-w-screen-lg mb-6">
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
      <button className='ml-6'>
        <i className="fas fa-plus text-purple-300"></i>
        <span className="ml-6 text-purple-300">Add to list</span>
      </button>
    </div>
  )

}

export default SectionInfo
