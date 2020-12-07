import { v4 as uuid } from 'uuid';

const workTitle = 'Computer Programmer'

const workHeaderTitle = 'entry-level computer programmer';

const workListData = [
  {
    id: uuid(),
    title: 'Honors student of ABC University’s BS in IT program.',
    details: 'Academic credentials are reinforced by programming experience gained during internship with ABC Company.'
  },
  {
    id: uuid(),
    title: 'Consistently commended by professors and internship supervisor',
    details: 'for programming abilities, grasp of multiple technologies and attention to detail.'
  },
  {
    id: uuid(),
    title: 'Strong knowledge of object-oriented programing',
    details: 'and application development tools using Microsoft VB.Net, C#, .Net, C++, ASP.Net; Python and VBA.'
  },
  {
    id: uuid(),
    title: 'Known as a self-starter,',
    details: 'team player and multitasker--strive to consistently exceed expectations.'
  }
]



export { workTitle, workHeaderTitle, workListData }
