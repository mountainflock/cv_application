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
  const [isEducationSubmit, setIsEducationSibmit] = useState(false);
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

  function handleEducationSubmit(event) {
    event.preventDefault();
    setIsEducationSibmit(true);
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
        title: event.currentTarget.value}});
  }

  function saveFinished(event) {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        finished: event.currentTarget.value}});
  }

  function handleWorkSubmit(event) {
    event.preventDefault();
    setIsWorkSubmit(true);
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
      setIsGeneralSubmit={handleGeneralSubmit}
      isGeneralSubmit={isGeneralSubmit}/>


      <Education
      school={person.educaction.school}
      title={person.educaction.title}
      finished={person.educaction.finished}
      editSchool={saveSchool}
      editTitle={saveTitle}
      editFinished={saveFinished}
      setIsEducationSubmit={handleEducationSubmit}
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
      setIsWorkSubmit={handleWorkSubmit}
      isWorkSubmit={isWorkSubmit}
      />
    </div>
)
  }
  

export default App
