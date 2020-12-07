// import React from 'react'
// import EditableLI from './EditableLI'
// import { v4 as uuid } from 'uuid';
//
// const WorkInfo = () => {
//
//   const data = [
//     {
//       id: uuid(),
//       title: 'Honors student of ABC University’s BS in IT program.',
//       details: 'Academic credentials are reinforced by programming experience gained during internship with ABC Company.'
//     },
//     {
//       id: uuid(),
//       title: 'Consistently commended by professors and internship supervisor',
//       details: 'for programming abilities, grasp of multiple technologies and attention to detail.'
//     },
//     {
//       id: uuid(),
//       title: 'Strong knowledge of object-oriented programing',
//       details: 'and application development tools using Microsoft VB.Net, C#, .Net, C++, ASP.Net; Python and VBA.'
//     },
//     {
//       id: uuid(),
//       title: 'Known as a self-starter,',
//       details: 'team player and multitasker--strive to consistently exceed expectations.'
//     }
//   ]
//
//   return (
//     <div className="container px-6 mx-auto max-w-screen-lg">
//       <h2 className='uppercase'>Computer Programmer</h2>
//       <h1 className='text-center title'>entry-level computer programmer</h1>
//       <ul className='list-disc list-inside pl-6'>
//         {
//           data.map(info => {
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
// export default WorkInfo
