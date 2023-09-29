import EditButton from "./editButton";
import SubmitButton from "./submitButton";


const Education = ({school, title, finished, editInfo, isSubmit}) => {

return (
    <div className="section">
        <div>
            <h3>Education <EditButton/></h3>
            <form onSubmit={editInfo} >
                <p><input placeholder="school" defaultValue={school}/></p>
                <p><input placeholder="title" defaultValue={title}/></p>
                <p><input placeholder="finished" type="date" defaultValue={finished}/></p>
                <SubmitButton/>
            </form>

        </div>
    </div>
)
}

export default Education;