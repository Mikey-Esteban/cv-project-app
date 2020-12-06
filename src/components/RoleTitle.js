import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

class RoleTitle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      role: 'entry-level computer programmer',
      stats: [
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
    }
  }

  render() {
    const tasks = this.state.stats
    console.log(tasks);
    return (
      <div>
        <h2>Computer Programmer</h2>
        <h1 className='text-center title'>{this.state.role}</h1>
        <ul className='list-disc list-inside'>
          {
            tasks.map(task => {
              return (
                <li key={task.id}>
                  <span className="font-bold">{task.title} </span>
                  <span>{task.details}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default RoleTitle
