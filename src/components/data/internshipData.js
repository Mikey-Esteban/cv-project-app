import { v4 as uuid } from 'uuid';

const internTitle = 'Internship'

const internHeaderData = [
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

const internListData = [
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

export { internTitle, internHeaderData, internListData }
