// import './App.css';
import React from "react";
import TailwindHW from './components/TailwindHW'
import PersonalInfo from './components/PersonalInfo'
import WorkInfo from './components/WorkInfo'
import EducationInfo from './components/EducationInfo'
import InternshipInfo from './components/InternshipInfo'
// App.js - Input editable UI


function App() {

  return (
    <div className="App">
      <TailwindHW />
      <PersonalInfo />
      <WorkInfo />
      <EducationInfo />
      <InternshipInfo />
    </div>
  );
}

export default App;
