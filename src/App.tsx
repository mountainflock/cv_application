import './App.css'
import GeneralInfo from "./components/general_info/generalInfo.component.jsx";
import Education from "./components/education/education.component.jsx";
import WorkExperience from "./components/work_experience/workExperience.component.jsx";


function App() {

  return (
    <>
      <div className = "app">
        <GeneralInfo/>
        <Education/>
        <WorkExperience/>
      </div>

    </>
  )
}

export default App
