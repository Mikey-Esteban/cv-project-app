// import React from 'react'
// import Editable from './Editable'
// import EditableLI from './EditableLI'
// import { v4 as uuid } from 'uuid';
// 
// const EducationInfo = () => {
//
//   const headerData = [
//     {
//       id: uuid(),
//       title: 'ABC UNIVERSITY',
//       details: '- Sometown, NH'
//     },
//     {
//       id: uuid(),
//       title: 'Bachelor of Science, Major in Information Technology Program,',
//       details: 'Currently Enrolled, GPA: 3.85/4.0'
//     }
//   ]
//
//   const listData = [
//     {
//       id: uuid(),
//       title: 'Honors:',
//       details: 'Graduated cum laude (GPA: 3.53); inductee, Golden Key Honor Society; recipient, John Doe Academic Scholarship; Dean’s List, 2009, 2010, 2011.'
//     },
//     {
//       id: uuid(),
//       title: 'Senior Project:',
//       details: 'Earned “A” grade on capstone project as co-developer of Web-based, customized enterprise software solution that integrated business processes for a nonprofit organization. Delivered turnkey application that reduced manual data entry, saving hundreds of personnel hours monthly.'
//     },
//     {
//       id: uuid(),
//       title: 'Course Highlights:',
//       details: 'Enterprise Application Development, Security, Java/C/VB Programming, IT Project Management, Database Programming, Web Design, Computer Architecture'
//     }
//   ]
//
//   return (
//     <div className="container px-6 mx-auto max-w-screen-lg">
//       <h2>Education</h2>
//       {
//         headerData.map(info => {
//           return <Editable id={info.id} title={info.title} description={info.details} />
//         })
//       }
//       <ul className='list-disc list-inside pl-6'>
//         {
//           listData.map(info => {
//             return (
//               <EditableLI key={info.id} id={info.id} title={info.title} description={info.details} />
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }
//
// export default EducationInfo
