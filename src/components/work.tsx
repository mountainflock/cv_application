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
    toggleIsWorkSubmit}) => {


    if (isWorkSubmit) 
    return (
    <div className='section'>
            <h3>Work Experience <button className = "edit-button" onClick={toggleIsWorkSubmit}>EDIT</button></h3>
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
            <h3>Work Experience </h3>
            <form onSubmit={toggleIsWorkSubmit} >
                <p><input onChange={editCompany} placeholder="company" value={company} required/></p>
                <p><input onChange={editPosition} placeholder="position" defaultValue={position} required/></p>
                <p><textarea onChange={editResponsibilities} placeholder="responsibilities" value={responsibilities} required/></p>
                <p><label> from <input onChange={editStartDate} type='date' value={startDate} required/></label></p>
                <label> to <input onChange={editEndDate}type='date' value={endDate} required/></label>
                <button className="submit-button">SUBMIT</button>
            </form>
        </div>
        
    </div>
)
}

export default WorkExperience