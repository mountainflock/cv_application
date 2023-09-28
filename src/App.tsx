import './App.css'
import GeneralInfo from "./components/generalInfo.js";
import Education from "./components/education.js";
import WorkExperience from "./components/workExperience.js";
import { useState } from 'react';


function App() {

  const [generalInfo, setGeneralInfo] = useState({name: "", email: "", phone: ""});
  const [education, setEducation] = useState({school: "", title: "", finished: ""});
  const [workExperience, setWorkExperience] = useState({company: "", position: "", responsibilities: "", startDate: "", endDate: ""});

  function handleGeneralInfoChange(e) {
    setGeneralInfo({
      ...generalInfo,
      name: e.target.value,
      email: e.target.value,
      phone: e.target.value,
    });
  }

  function handleEducationChange(e) {
    setEducation({
      ...education,
      school: e.target.value,
      title: e.target.value,
      finished: e.target.value
  });
}

  function handleWorkExperienceChange(e) {
    setWorkExperience({
      ...workExperience,
      company: e.target.value,
      position: e.target.value,
      responsibilities: e.target.value,
      startDate: e.target.value,
      endDate: e.target.value,
    })
  }

  return (
    <div className = "app">
      <GeneralInfo 
      name=''
      email=''
      phone=''
      editInfo={handleGeneralInfoChange}/>

      <Education
      school=''
      title=''
      finished=''
      editInfo={handleEducationChange}

      />
      <WorkExperience
      company=''
      position=''
      responsibilities=''
      startDate=''
      endDate=''
      editInfo={handleWorkExperienceChange}
      />
    </div>
)
  }
  

export default App
