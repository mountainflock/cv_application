import EditButton from "./editButton"
import SubmitButton from "./submitButton" 


const WorkExperience = ({
    company, 
    position, 
    responsibilities, 
    startDate, 
    endDate, 
    isWorkSubmit,
    editCompany, 
    editPosition, 
    editResponsibilities, 
    editStartDate, 
    editEndDate,
setIsWorkSubmit}) => {


    if (isWorkSubmit) 
    return (
    <div className='section'>
            <h3>Work Experience <EditButton/></h3>
        <div>
            <p>{company}</p>
            <p>{position}</p>
            <p>{responsibilities}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    </div>
    )

return (
    <div className="section">
        <div>
            <h3>Work Experience <EditButton/></h3>
            <form onSubmit={setIsWorkSubmit} >
                <p><input onChange={editCompany} placeholder="company" defaultValue={company}/></p>
                <p><input onChange={editPosition} placeholder="position" defaultValue={position}/></p>
                <p><textarea onChange={editResponsibilities} placeholder="responsibilities" defaultValue={responsibilities}/></p>
                <p> <input onChange={editStartDate} type='date' defaultValue={startDate}/></p>
                <p> <input onChange={editEndDate}type='date' defaultValue={endDate}/></p>
                <SubmitButton/>
            </form>
        </div>
        
    </div>
)
}

export default WorkExperience