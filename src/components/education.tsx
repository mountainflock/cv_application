import EditButton from "./editButton";
import SubmitButton from "./submitButton";


const Education = ({
    school, 
    title, 
    finished, 
    isEducationSubmit, 
    setIsEducationSubmit, 
    editSchool, 
    editTitle, 
    editFinished}) => {
        
    if (isEducationSubmit) 
    return (
    <div className='section'>
            <h3>Education <EditButton/></h3>
        <div>
            <p>{school}</p>
            <p>{title}</p>
            <p>{finished}</p>
        </div>
    </div>
    )


return (
    <div className="section">
        <div>
            <h3>Education <EditButton/></h3>
            <form onSubmit={setIsEducationSubmit} >
                <p><input onChange={editSchool} placeholder="school" defaultValue={school}/></p>
                <p><input onChange={editTitle} placeholder="title" defaultValue={title}/></p>
                <p><input onChange={editFinished} placeholder="finished" type="date" defaultValue={finished}/></p>
                <SubmitButton/>
            </form>
        </div>
    </div>
)
}

export default Education;