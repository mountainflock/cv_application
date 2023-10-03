import { useState } from "react";

import "../styles/content.css";
import SubmitButton from "./submitButton";
import EditButton from "./editButton";
import Input from "./input";
import Line from "./line";

const Content = () => {
  const initialData = {
    general: {
      name: "",
      email: "",
      phone: "",
    },
    education: {
      school: "",
      titleOfStudy: "",
      finished: "",
    },
    work: {
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  };

  const [data, setData] = useState(initialData);
  const { general, education, work } = data;
  const [isSubmit, setIsSubmit] = useState(false);

  const toggleIsSubmit = (event) => {
    event.preventDefault();
    if (!isSubmit) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  };

  const saveName = (event) => {
    event.preventDefault();
    setData({
      ...data,
      general: {
        ...general,
        name: event.currentTarget.value,
      },
    });
  };

  const saveEmail = (event) => {
    event.preventDefault();
    setData({
      ...data,
      general: {
        ...general,
        email: event.currentTarget.value,
      },
    });
  };

  const savePhone = (event) => {
    event.preventDefault();
    setData({
      ...data,
      general: {
        ...general,
        phone: event.currentTarget.value,
      },
    });
  };

  const saveSchool = (event) => {
    event.preventDefault();
    setData({
      ...data,
      education: {
        ...education,
        school: event.currentTarget.value,
      },
    });
  };

  const saveTitleOfStudy = (event) => {
    event.preventDefault();
    setData({
      ...data,
      education: {
        ...education,
        titleOfStudy: event.currentTarget.value,
      },
    });
  };

  const saveFinished = (event) => {
    event.preventDefault();
    setData({
      ...data,
      education: {
        ...education,
        finished: event.currentTarget.value,
      },
    });
  };

  const saveCompany = (event) => {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...work,
        company: event.currentTarget.value,
      },
    });
  };

  const savePosition = (event) => {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...work,
        position: event.currentTarget.value,
      },
    });
  };

  const saveResponsibilities = (event) => {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...work,
        responsibilities: event.currentTarget.value,
      },
    });
  };

  const saveStartDate = (event) => {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...work,
        startDate: event.currentTarget.value,
      },
    });
  };

  const saveEndDate = (event) => {
    event.preventDefault();
    setData({
      ...data,
      work: {
        ...work,
        endDate: event.currentTarget.value,
      },
    });
  };

  if (isSubmit)
    return (
      <div className="content">
        <h3 className="section-title">General Info </h3>
        <Line title="name" value={general.name} />
        <Line title="email" value={general.email} />
        <Line title="phone" value={general.phone} />

        <h3 className="section-title">Education </h3>
        <Line title="school" value={education.school} />
        <Line title="title of study" value={education.titleOfStudy} />
        <Line title="finished" value={education.finished} />

        <h3 className="section-title">Work Experience </h3>
        <Line title="company" value={work.company} />
        <Line title="position" value={work.position} />
        <div>
          <p className="cv-line-title"> responsibilities:</p>
          <p className="line"> {work.responsibilities}</p>
        </div>
        <Line title="start date" value={work.startDate} />
        <Line title="end date" value={work.endDate} />
        <EditButton onClick={toggleIsSubmit} />
      </div>
    );

  return (
    <div className="content">
      <form onSubmit={toggleIsSubmit}>
        <h3 className="section-title">General Info </h3>
        <Input
          onChange={saveName}
          title="name"
          type="text"
          value={general.name}
        />
        <Input
          onChange={saveEmail}
          title="e-mail"
          type="email"
          value={general.email}
        />
        <Input
          onChange={savePhone}
          title="phone"
          type="tel"
          value={general.phone}
        />
        <h3 className="section-title">Education </h3>
        <Input
          onChange={saveSchool}
          title="school"
          type="text"
          value={education.school}
        />
        <Input
          onChange={saveTitleOfStudy}
          title="title"
          type="text"
          value={education.titleOfStudy}
        />
        <Input
          onChange={saveFinished}
          title="finished"
          type="date"
          value={education.finished}
        />

        <h3 className="section-title">Work Experience </h3>
        <Input
          onChange={saveCompany}
          title="company"
          type="text"
          value={work.company}
        />
        <Input
          onChange={savePosition}
          title="position"
          type="text"
          value={work.position}
        />
        <span className="input-title">responsibilities:</span>
        <p className="input-title">
          <textarea
            onChange={saveResponsibilities}
            value={work.responsibilities}
          />
        </p>
        <Input
          onChange={saveStartDate}
          title="from"
          type="date"
          value={work.startDate}
        />
        <Input
          onChange={saveEndDate}
          title="to"
          type="date"
          value={work.endDate}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Content;
