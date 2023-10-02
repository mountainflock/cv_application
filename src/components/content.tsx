import { useState } from "react";

import "../styles/content.css"
import SubmitButton from "./submitButton";
import EditButton from "./editButton";
import Input from "./input";
import Line from "./line";

const Content = () => {
  const initialData = { 
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
      endDate: ""}}

  const [data, setData] = useState(initialData);
  const [isSubmit, setIsSubmit] = useState(false);

  const toggleIsSubmit = (event) => {
    event.preventDefault();
    if (!isSubmit) {setIsSubmit(true)}
    else {setIsSubmit(false)}
  }

  const saveName = (event) => {
    event.preventDefault();
    setData({
      ...data,
      general: {
        ...data.general,
        name: event.currentTarget.value}});
  }

  const saveEmail=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      general: {
        ...data.general,
        email: event.currentTarget.value}});
  }

  const savePhone=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      general: {
        ...data.general,
        phone: event.currentTarget.value}});
  }

  const saveSchool=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      educaction: {
        ...data.educaction,
        school: event.currentTarget.value}});
  }

  const saveTitleOfStudy=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      educaction: {
        ...data.educaction,
        titleOfStudy: event.currentTarget.value}});
  }

  const saveFinished=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      educaction: {
        ...data.educaction,
        finished: event.currentTarget.value}});
  }

  const saveCompany=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...data.work,
        company: event.currentTarget.value}});
  }

  const savePosition=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...data.work,
        position: event.currentTarget.value}});
  }

  const saveResponsibilities=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...data.work,
        responsibilities: event.currentTarget.value}});
  }

  const saveStartDate=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...data.work,
        startDate: event.currentTarget.value}});
  }

  const saveEndDate=(event)=> {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...data.work,
        endDate: event.currentTarget.value}});
  }

  if (isSubmit) return (
  <div>
  <h3 className="section-title">General Info </h3>
  <Line title={"name"} value={data.general.name}/>
  <Line title={"email"} value={data.general.email}/>
  <Line title={"phone"} value={data.general.phone}/>

  <h3 className="section-title">Education </h3>
  <Line title={"school"} value={data.educaction.school}/>
  <Line title={"title of study"} value={data.educaction.titleOfStudy}/>
  <Line title={"finished"} value={data.educaction.finished}/>
  
  <h3 className="section-title">Work Experience </h3>
  <Line title={"company"} value={data.work.company}/>
  <Line title={"position"} value={data.work.position}/>
  <Line title={"responsibilities"} value={data.work.responsibilities}/>
  <Line title={"start date"} value= {data.work.startDate}/>
  <Line title={"end date"} value = {data.work.endDate}/>
  <EditButton onClick={toggleIsSubmit}/>
  </div>
  )
  
  return (
<div>
<form onSubmit={toggleIsSubmit}>
  <h3 className="section-title">General Info </h3>
    <Input onChange={saveName} title="name" type="text" value={data.general.name}/>
    <Input onChange={saveEmail} title="e-mail" type="email" value={data.general.email}/>
    <Input onChange={savePhone} title="phone" type="tel" value={data.general.phone}/>

  <h3 className="section-title">Education </h3>
    <Input onChange={saveSchool} title="school" type="text" value={data.educaction.school}/>
    <Input onChange={saveTitleOfStudy} title="title" type="text" value={data.educaction.titleOfStudy}/>
    <Input onChange={saveFinished} title="finished" type="date" value={data.educaction.finished}/>

  <h3 className="section-title">Work Experience </h3>
    <Input onChange={saveCompany} title="company" type="text" value={data.work.company}/>
    <Input onChange={savePosition} title="position" type="text" value={data.work.position}/>
    <span className="input-title">responsibilities:</span><p className="input-title"><textarea onChange={saveResponsibilities} value={data.work.responsibilities}/></p>
    <Input onChange={saveStartDate} title="from" type="date" value={data.work.startDate}/>
    <Input onChange={saveEndDate} title="to" type="date" value={data.work.endDate}/>
    <SubmitButton/>
</form>
</div>
  )
}

export default Content