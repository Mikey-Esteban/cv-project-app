// import './App.css';
import React from "react";
import TailwindHW from './components/TailwindHW'
import PersonalInfo from './components/PersonalInfo'
import WorkInfo from './components/WorkInfo'
// App.js - Input editable UI


function App() {

  return (
    <div className="App">
      <TailwindHW />
      <PersonalInfo />
      <WorkInfo />
    </div>
  );
}

export default App;
