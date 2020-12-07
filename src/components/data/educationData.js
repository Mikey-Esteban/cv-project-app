import { v4 as uuid } from 'uuid';

const eduTitle = 'Education'

const eduHeaderData = [
  {
    id: uuid(),
    title: 'ABC UNIVERSITY',
    details: '- Sometown, NH'
  },
  {
    id: uuid(),
    title: 'Bachelor of Science, Major in Information Technology Program,',
    details: 'Currently Enrolled, GPA: 3.85/4.0'
  }
]

const eduListData = [
  {
    id: uuid(),
    title: 'Honors:',
    details: 'Graduated cum laude (GPA: 3.53); inductee, Golden Key Honor Society; recipient, John Doe Academic Scholarship; Dean’s List, 2009, 2010, 2011.'
  },
  {
    id: uuid(),
    title: 'Senior Project:',
    details: 'Earned “A” grade on capstone project as co-developer of Web-based, customized enterprise software solution that integrated business processes for a nonprofit organization. Delivered turnkey application that reduced manual data entry, saving hundreds of personnel hours monthly.'
  },
  {
    id: uuid(),
    title: 'Course Highlights:',
    details: 'Enterprise Application Development, Security, Java/C/VB Programming, IT Project Management, Database Programming, Web Design, Computer Architecture'
  }
]

export { eduTitle, eduHeaderData, eduListData }
