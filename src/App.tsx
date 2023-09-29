import './App.css'
import GeneralInfo from "./components/general.js";
import Education from "./components/education.js";
import WorkExperience from "./components/work.js";
import { useState } from 'react';


function App() {

  const [person, setPerson] = useState({ 
    general: {
      name: "", 
      email: "", 
      phone: ""}, 
    educaction: {
      school: "", 
      title: "", 
      finished: ""}, 
    work: {
      company: "", 
      position: "", 
      responsibilities: "", 
      startDate: "", 
      endDate: ""}});

  const [isGeneralSubmit, setIsGeneralSubmit] = useState(false);
  const [isEducationSibmit, setIsEducationSibmit] = useState(false);
  const [isWorkSubmit, setIsWorkSubmit] = useState(false);

  function handleGeneralSubmit(event) {
    event.preventDefault();
    setIsGeneralSubmit(true);
  }

  function saveName(event) {
    event.preventDefault();
    setPerson({
      ...person,
      general: {
        ...person.general,
        name: event.currentTarget.value}});
  }

  function saveEmail(event) {
    event.preventDefault();
    setPerson({
      ...person,
      general: {
        ...person.general,
        email: event.currentTarget.value}});
  }

  function savePhone(event) {
    event.preventDefault();
    setPerson({
      ...person,
      general: {
        ...person.general,
        phone: event.currentTarget.value}});
  }

//   function handleEducationChange(e) {
//     e.preventDefault();
//     setEducation({
//       ...education,
//       school: e.target.value,
//       title: e.target.value,
//       finished: e.target.value
//   });
//   setIsEducationSubmit(true);
// }

//   function handleWorkExperienceChange(e) {
//     e.preventDefault();
//     setWork({
//       ...work,
//       company: e.target.value,
//       position: e.target.value,
//       responsibilities: e.target.value,
//       startDate: e.target.value,
//       endDate: e.target.value,
//     });
//     setIsWorkSubmit(true);
//   }

  return (
    <div className = "app">
      <GeneralInfo 
      name={person.general.name}
      email={person.general.email}
      phone={person.general.phone}
      editName={saveName}
      editEmail={saveEmail}
      editPhone={savePhone}
      setIsGeneralSubmit={handleGeneralSubmit}
      isGeneralSubmit={isGeneralSubmit}/>


      {/* <Education
      school=''
      title=''
      finished=''
      editInfo={handleEducationChange}
      isSubmit={isEducationSubmit}
      />

      <WorkExperience
      company=''
      position=''
      responsibilities=''
      startDate=''
      endDate=''
      editInfo={handleWorkExperienceChange}
      isSubmit={isWorkSubmit}
      /> */}
    </div>
)
  }
  

export default App
