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
      titleOfStudy: "", 
      finished: ""}, 
    work: {
      company: "", 
      position: "", 
      responsibilities: "", 
      startDate: "", 
      endDate: ""}});

  const [isGeneralSubmit, setIsGeneralSubmit] = useState(false);
  const [isEducationSubmit, setIsEducationSubmit] = useState(false);
  const [isWorkSubmit, setIsWorkSubmit] = useState(false);

  function toggleIsGeneralSubmit(event) {
    event.preventDefault();
    if (!isGeneralSubmit) {setIsGeneralSubmit(true)}
    else {setIsGeneralSubmit(false)}
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

  function toggleIsEducationSubmit(event) {
    event.preventDefault();
    if (!isEducationSubmit) {setIsEducationSubmit(true)}
    else {setIsEducationSubmit(false)}
  }

  function saveSchool(event) {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        school: event.currentTarget.value}});
  }

  function saveTitle(event) {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        titleOfStudy: event.currentTarget.value}});
  }

  function saveFinished(event) {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        finished: event.currentTarget.value}});
  }

  function toggleIsWorkSubmit(event) {
    event.preventDefault();
    if (!isWorkSubmit) {setIsWorkSubmit(true)}
    else {setIsWorkSubmit(false)}
  }


  function saveCompany(event) {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        company: event.currentTarget.value}});
  }

  function savePosition(event) {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        position: event.currentTarget.value}});
  }

  function saveResponsibilities(event) {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        responsibilities: event.currentTarget.value}});
  }

  function saveStartDate(event) {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        startDate: event.currentTarget.value}});
  }

  function saveEndDate(event) {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        endDate: event.currentTarget.value}});
  }

  return (
    <div className = "app">
      <GeneralInfo 
      name={person.general.name}
      email={person.general.email}
      phone={person.general.phone}
      editName={saveName}
      editEmail={saveEmail}
      editPhone={savePhone}
      setIsGeneralSubmit={toggleIsGeneralSubmit}
      isGeneralSubmit={isGeneralSubmit}/>


      <Education
      school={person.educaction.school}
      title={person.educaction.titleOfStudy}
      finished={person.educaction.finished}
      editSchool={saveSchool}
      editTitle={saveTitle}
      editFinished={saveFinished}
      toggleIsEducationSubmit={toggleIsEducationSubmit}
      isEducationSubmit={isEducationSubmit}
      />

      <WorkExperience
      company={person.work.company}
      position={person.work.position}
      responsibilities={person.work.responsibilities}
      startDate={person.work.startDate}
      endDate={person.work.endDate}
      editCompany={saveCompany}
      editPosition={savePosition}
      editResponsibilities={saveResponsibilities}
      editStartDate={saveStartDate}
      editEndDate={saveEndDate}
      toggleIsWorkSubmit={toggleIsWorkSubmit}
      isWorkSubmit={isWorkSubmit}
      />
    </div>
)
}
  

export default App
