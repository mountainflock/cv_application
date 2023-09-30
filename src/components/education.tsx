const Education = ({
    school, 
    title: titleOfStudy, 
    finished, 
    isEducationSubmit, 
    toggleIsEducationSubmit, 
    editSchool, 
    editTitle, 
    editFinished}) => {
        
    if (isEducationSubmit) 
    return (
    <div className='section'>
            <h3>Education <button className="edit-button" onClick={toggleIsEducationSubmit}>EDIT</button></h3>
        <div>
            <p>{school}</p>
            <p>{titleOfStudy}</p>
            <p>{finished}</p>
        </div>
    </div>
    )


return (
    <div className="section">
        <div>
            <h3>Education </h3>
            <form onSubmit={toggleIsEducationSubmit} >
                <p><input onChange={editSchool} placeholder="school" defaultValue={school} required/></p>
                <p><input onChange={editTitle} placeholder="title of study" defaultValue={titleOfStudy} required/></p>
                <p><input onChange={editFinished} placeholder="finished" type="date" defaultValue={finished} required/></p>
                <button className="submit-button">SUBMIT</button>
            </form>
        </div>
    </div>
)
}

export default Education;