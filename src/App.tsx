import './App.css'
import GeneralInfo from "./components/generalInfo.js";
import Education from "./components/education.js";
import WorkExperience from "./components/workExperience.js";
import { useState } from 'react';

// import { useState } from 'react';



function App() {
  const [person, setPerson] = useState({
    name: "", email: "", phoneNumber: "", school: "", title: "", finishSchoolDate: "", company: "", position: "", responsibilities: "", startDate: "", endDate: ""
  });


  return (
    <div className = "app">
      <GeneralInfo 
      name="ferf"
      email="vrr"
      phone="vrev"/>
      <Education
      school="oeri"
      title="freufh"
      finished='1999-06-12'
      />
      <WorkExperience
      company='fer'
      position='btoir'
      responsibilities='ferf'
      startDate="1999-06-12"
      endDate="1999-06-12"

      />
    </div>
)
  
  // const [generalInfo, setGeneralInfo] = useState('');
  // const [educacion, setEducation] = useState('');
  // const [workExperience, setWorkExperience] = useState('');
  

  // function handleSchoolChange(e) {
  //   setPerson({
  //     ...person,
  //     school: e.target.value
  //   });
  // }

  // function handleTitleChange(e) {
  //   setPerson({
  //     ...person,
  //     title: e.target.value
  //   });
  // }

  // function handleFinishSchoolDateChange(e) {
  //   setPerson({
  //     ...person,
  //     finishSchoolDate: e.target.value
  //   });
  // }

  // function handleCompanyChange(e) {
  //   setPerson({
  //     ...person,
  //     company: e.target.value
  //   });
  // }

  // function handlePositionChange(e) {
  //   setPerson({
  //     ...person,
  //     company: e.position.value
  //   });
  // }

  // function handleResponsibiliesChange(e) {
  //   setPerson({
  //     ...person,
  //     responsibilities: e.target.value
  //   });
  // }

  // function handleStartDateChange(e) {
  //   setPerson({
  //     ...person,
  //     startDate: e.target.value
  //   });
  // }

  // function handleEndDateChange(e) {
  //   setPerson({
  //     ...person,
  //     endDate: e.target.value
  //   });
  // }

}

export default App
