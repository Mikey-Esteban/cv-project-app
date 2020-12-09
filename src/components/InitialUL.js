import React from 'react'
import EditableLI from './EditableLI'

const InitialUL = ({list}) => {
  return (
    <ul className='list-disc list-inside pl-6'>
    {
       list.map(item => <EditableLI key={item.id} id={item.id} title={item.title} description={item.details} />)
    }
    </ul>
  )
}

export default InitialUL
