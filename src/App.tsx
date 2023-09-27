import './App.css'
import GeneralInfo from "./components/generalInfo.js";
import Education from "./components/education.js";
import WorkExperience from "./components/workExperience.js";

// import { useState } from 'react';



function App() {

//   const [smth, setSmth] = useState(0);

//   const handleSubmitClick = () => {
// console.log("submit")

  // }

  return (
      <div className = "app">
        <GeneralInfo/>
        <Education/>
        <WorkExperience/>
      </div>
  )
}

export default App
