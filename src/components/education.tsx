// import EditButton from "./editButton";
// import SubmitButton from "./submitButton";


const Education = ({school, title, finished}) => {

return (
    <div className="section">
        <div>
            <h3>Education <button className='edit-button'>EDIT</button></h3>
            <form >
                <p><input placeholder="school" value={school}/></p>
                <p><input placeholder="title" value={title}/></p>
                <p><input placeholder="finished" type="date" value={finished}/></p>
                <button className='submit-button' type="submit">SUBMIT</button>
            </form>

        </div>
    </div>
)
}

export default Education;