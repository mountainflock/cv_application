import "./App.css";
import { useState } from "react";

import SubmitButton from "./components/submitButton.js";
import EditButton from "./components/editButton.js";
import Input from "./components/input.js";
import CvLine from "./components/cvLine.js";

const App = () => {

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

  const [isSubmit, setIsSubmit] = useState(false);

  const toggleIsSubmit = (event) => {
    event.preventDefault();
    if (!isSubmit) {setIsSubmit(true)}
    else {setIsSubmit(false)}
  }

  const saveName = (event) => {
    event.preventDefault();
    setPerson({
      ...person,
      general: {
        ...person.general,
        name: event.currentTarget.value}});
  }

  const saveEmail=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      general: {
        ...person.general,
        email: event.currentTarget.value}});
  }

  const savePhone=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      general: {
        ...person.general,
        phone: event.currentTarget.value}});
  }

  const saveSchool=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        school: event.currentTarget.value}});
  }

  const saveTitleOfStudy=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        titleOfStudy: event.currentTarget.value}});
  }

  const saveFinished=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      educaction: {
        ...person.educaction,
        finished: event.currentTarget.value}});
  }

  const saveCompany=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        company: event.currentTarget.value}});
  }

  const savePosition=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        position: event.currentTarget.value}});
  }

  const saveResponsibilities=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        responsibilities: event.currentTarget.value}});
  }

  const saveStartDate=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        startDate: event.currentTarget.value}});
  }

  const saveEndDate=(event)=> {
    event.preventDefault();
    setPerson({
      ...person,
      work: {
        ...person.work,
        endDate: event.currentTarget.value}});
  }

  if (isSubmit) return (
  <div>
  <h3>General Info </h3>
  <CvLine value={person.general.name}/>
  <CvLine value={person.general.name}/>
  <CvLine value={person.general.email}/>
  <CvLine value={person.general.phone}/>

  <h3>Education </h3>
  <CvLine value={person.educaction.school}/>
  <CvLine value={person.educaction.titleOfStudy}/>
  <CvLine value=  {person.educaction.finished}/>
  
  <h3>Work Experience </h3>
  <CvLine value={person.work.company}/>
  <CvLine value={person.work.position}/>
  <CvLine value={person.work.responsibilities}/>
  from: <CvLine value= {person.work.startDate}/>
  to: <CvLine value = {person.work.endDate}/>
  <EditButton onClick={toggleIsSubmit}/>
  </div>
  )
  
  return (
<div>
<form onSubmit={toggleIsSubmit}>
  <h3>General Info </h3>
    <Input onChange={saveName} placeholder="name" type="text" value={person.general.name}/>
    <Input onChange={saveEmail} placeholder="e-mail" type="email" value={person.general.email}/>
    <Input onChange={savePhone} placeholder="phone number" type="tel" value={person.general.phone}/>

  <h3>Education </h3>
    <Input onChange={saveSchool} placeholder="school" type="text" value={person.educaction.school}/>
    <Input onChange={saveTitleOfStudy} placeholder="title of study" type="text" value={person.educaction.titleOfStudy}/>
    <Input onChange={saveFinished} placeholder="finished" type="date" value={person.educaction.finished}/>

  <h3>Work Experience </h3>
    <Input onChange={saveCompany} placeholder="company" type="text" value={person.work.company}/>
    <Input onChange={savePosition} placeholder="position" type="text" value={person.work.position}/>
    <p><textarea onChange={saveResponsibilities} placeholder="responsibilities" value={person.work.responsibilities}/></p>
    from: <Input onChange={saveStartDate} placeholder="" type="date" value={person.work.startDate}/>
    to: <Input onChange={saveEndDate} placeholder="" type="date" value={person.work.endDate}/>
    <SubmitButton/>
</form>
</div>
  )
}  

export default App
