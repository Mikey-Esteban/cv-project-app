import { v4 as uuid } from 'uuid';

const techTitle = 'Technology Summary'

const techListData = [
  {
    id: uuid(),
    title: 'Programming/Languages:',
    details: ' VB.Net; C#; .Net; C; C++; ASP.Net; Python, VBA, Java, Visual Basic; SharePoint; PHP; MySQL; HTML; Ant'
  },
  {
    id: uuid(),
    title: 'Databases Management: ',
    details: 'Oracle 8.x/9.x, SQL Server, MS Access'
  },
  {
    id: uuid(),
    title: 'Design & IDE Tools:',
    details: 'Rational Rose, UML, WSAD, Oracle WebLogic Server'
  },
  {
    id: uuid(),
    title: 'Systems:',
    details: 'Windows Server 2016, Linux/Unix, Mac OS X'
  }
]

const techHeaderData = [
  {
    list: techListData
  }
]

export { techTitle, techHeaderData, techListData }
