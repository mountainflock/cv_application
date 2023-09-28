import EditButton from "./editButton"
import SubmitButton from "./submitButton" 


const WorkExperience = ({company, position, responsibilities, startDate, endDate, editInfo}) => {

return (
    <div className="section">
        <div>
            <h3>Work Experience <EditButton/>
                {/* <button className='edit-button'>EDIT</button> */}
                </h3>
            <form onSubmit={editInfo} >
                <p><input placeholder="company" defaultValue={company}/></p>
                <p><input placeholder="position" defaultValue={position}/></p>
                <p><textarea placeholder="responsibilities" defaultValue={responsibilities}/></p>
                <p>from <input type='date' defaultValue={startDate}/></p>
                <p>to <input type='date' defaultValue={endDate}/></p>
                <SubmitButton/>
                {/* <button className='submit-button' type="submit">SUBMIT</button> */}
            </form>
            

        </div>
        
    </div>
)
}

export default WorkExperience