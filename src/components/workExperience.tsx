import EditButton from "./editButton"
import SubmitButton from "./submitButton" 

const WorkExperience = () => {
return (
    <div className="section">
        <div>
            <h3>Work Experience <EditButton/></h3>
            <p><input placeholder="company"/></p>
            <p><input placeholder="position" /></p>
            <p><textarea placeholder="responsibilities" /></p>
            <p>from <input type='date'/></p>
            <p>to <input type='date'/></p>
            <div><SubmitButton/></div>
        </div>
        
    </div>
)
}

export default WorkExperience