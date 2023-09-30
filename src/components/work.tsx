const Work = ({
    company, 
    position, 
    responsibilities, 
    startDate, 
    endDate, 
    editCompany, 
    editPosition, 
    editResponsibilities, 
    editStartDate, 
    editEndDate,
    isWorkSubmit,
    toggleIsWorkSubmit}) => {


    if (isWorkSubmit) 
    return (
    <div className="section">
            <h3 className ="section-title">Work Experience <button className = "edit-button" onClick={toggleIsWorkSubmit}>EDIT</button></h3>
        <div>
            <p className ="cv-line">{company}</p>
            <p className ="cv-line">{position}</p>
            <p className ="cv-line">{responsibilities}</p>
            <p className ="cv-line">{startDate} - {endDate}</p>
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
                <p>from: <input onChange={editStartDate} type='date' value={startDate} required/></p>
                <p>to: <input onChange={editEndDate}type='date' value={endDate} required/></p>
                <button className="submit-button">SUBMIT</button>
            </form>
        </div>
        
    </div>
)
}

export default Work