import React from 'react'
import Editable from './Editable'
import EditableLI from './EditableLI'
import { v4 as uuid } from 'uuid';

const InternshipInfo = () => {

  const headerData = [
    {
      id: uuid(),
      title: 'ABC Company, Sometown, NH'
    },
    {
      id: uuid(),
      title: 'Computer Programmer Intern,',
      details: '2016 to Present'
    }
  ]

  const listData = [
    {
      id: uuid(),
      details: 'Handled database and Web site programming tasks (primarily using Java, C, C++, HTML and SharePoint), working an average of 15 hours per week while maintaining a 3.5 GPA.'
    },
    {
      id: uuid(),
      details: 'Redesigned Internet and intranet pages. Used SEO best practices to optimize Web site for search engine rankings and improved functionality of company database.'
    },
    {
      id: uuid(),
      details: 'Resolved memory corruption and other technical issues by leveraging strengths in coding, debugging and integration testing.'
    }
  ]

  return (
    <div className="container px-6 mx-auto max-w-screen-lg">
      <h2>Intership</h2>
      {
        headerData.map(info => {
          return <Editable id={info.id} title={info.title} description={info.details} />
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
    </div>
  )
}

export default InternshipInfo
