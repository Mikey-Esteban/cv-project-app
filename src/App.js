// import './App.css';
import React from "react";
import TailwindHW from './components/TailwindHW'
import PersonalInfo from './components/PersonalInfo'
import SectionInfo from './components/SectionInfo'
import SectionInfoBackup from './components/SectionInfoBackup'
import { workTitle, workHeaderTitle, workListData } from './components/data/workData'
// import { eduTitle, eduHeaderData , eduListData} from './components/data/educationData'
import { eduTitle, eduHeaderData , eduListData} from './components/data/educationDataBackup'
import { internTitle, internHeaderData, internListData } from './components/data/internshipData'
import { techTitle, techListData } from './components/data/techStackData'


function App() {

  return (
    <div className="App">
      <TailwindHW />
      <PersonalInfo />
      <SectionInfo title={workTitle} headerTitle={workHeaderTitle} listData={workListData} />
      <SectionInfoBackup title={eduTitle} headerData={eduHeaderData} listData={eduListData} />
      <SectionInfo title={internTitle} headerData={internHeaderData} listData={internListData} />
      <SectionInfo title={techTitle} listData={techListData} />
    </div>
  );
}

export default App;
