const Education = ({
    school, 
    titleOfStudy, 
    finished,
    editSchool, 
    editTitleOfStudy, 
    editFinished,
    isEducationSubmit, 
    toggleIsEducationSubmit}) => {
        
    if (isEducationSubmit) 
    return (
    <div className="section">
           <div>
            <h3 className ="section-title">Education <button className="edit-button" onClick={toggleIsEducationSubmit}>EDIT</button></h3>
            <p className ="cv-line">{school}</p>
            <p className ="cv-line">{titleOfStudy}</p>
            <p className ="cv-line">{finished}</p>
        </div>
    </div>
    )

return (
    <div className="section">
        <div>
            <h3>Education </h3>
            <form onSubmit={toggleIsEducationSubmit} >
                <p><input onChange={editSchool} placeholder="school" defaultValue={school} required/></p>
                <p><input onChange={editTitleOfStudy} placeholder="title of study" defaultValue={titleOfStudy} required/></p>
                <p><input onChange={editFinished} placeholder="finished" type="date" defaultValue={finished} required/></p>
                <button className="submit-button">SUBMIT</button>
            </form>
        </div>
    </div>
)
}

export default Education;