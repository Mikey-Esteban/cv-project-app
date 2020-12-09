// import './App.css';
import React from "react";
import Banner from './components/Banner'
import PersonalInfo from './components/PersonalInfo'
import SingleUL from './components/SingleUL'
import MultipleULs from './components/MultipleULs'
import { workTitle, workHeaderTitle, workListData } from './components/data/workData'
import { eduTitle, eduHeaderData } from './components/data/educationData'
import { internTitle, internHeaderData } from './components/data/internshipData'
import { techTitle, techListData } from './components/data/techStackData'


function App() {

  return (
    <div className="App">
      <Banner />
      <PersonalInfo />
      <SingleUL title={workTitle} headerTitle={workHeaderTitle} listData={workListData} />
      <MultipleULs title={eduTitle} listData={eduHeaderData} />
      <MultipleULs title={internTitle} listData={internHeaderData} />
      <SingleUL title={techTitle} listData={techListData}/>
    </div>
  );
}

export default App;
