import EditButton from "./editButton";
import SubmitButton from "./submitButton";


const Education = ({school, title, finished, editInfo}) => {

return (
    <div className="section">
        <div>
            <h3>Education <EditButton/>
                {/* <button className='edit-button'>EDIT</button> */}
                </h3>
            <form onSubmit={editInfo} >
                <p><input placeholder="school" defaultValue={school}/></p>
                <p><input placeholder="title" defaultValue={title}/></p>
                <p><input placeholder="finished" type="date" defaultValue={finished}/></p>
                {/* <button className='submit-button' type="submit">SUBMIT</button> */}
                <SubmitButton/>
            </form>

        </div>
    </div>
)
}

export default Education;