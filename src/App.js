// import './App.css';
import React from "react";
import TailwindHW from './components/TailwindHW'
import PersonalInfo from './components/PersonalInfo'
import SectionInfo from './components/SectionInfo'
import { workTitle, workHeaderTitle, workListData } from './components/data/workData'
import { eduTitle, eduHeaderData, eduListData } from './components/data/educationData'
import { internTitle, internHeaderData, internListData} from './components/data/internshipData'


function App() {

  return (
    <div className="App">
      <TailwindHW />
      <PersonalInfo />
      <SectionInfo title={workTitle} headerTitle={workHeaderTitle} listData={workListData} />
      <SectionInfo title={eduTitle} headerData={eduHeaderData} listData={eduListData} />
      <SectionInfo title={internTitle} headerData={internHeaderData} listData={internListData} />
    </div>
  );
}

export default App;
