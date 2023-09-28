// import EditButton from "./editButton"
// import SubmitButton from "./submitButton" 


const WorkExperience = ({company, position, responsibilities, startDate, endDate}) => {

return (
    <div className="section">
        <div>
            <h3>Work Experience <button className='edit-button'>EDIT</button></h3>
            <form >
                <p><input placeholder="company" value={company}/></p>
                <p><input placeholder="position" value={position}/></p>
                <p><textarea placeholder="responsibilities" value={responsibilities}/></p>
                <p>from <input type='date' value={startDate}/></p>
                <p>to <input type='date' value={endDate}/></p>
                <button className='submit-button' type="submit">SUBMIT</button>
            </form>
            

        </div>
        
    </div>
)
}

export default WorkExperience