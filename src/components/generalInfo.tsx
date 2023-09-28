import EditButton from "./editButton"
import SubmitButton from "./submitButton" 

const GeneralInfo = ({name, email, phone, editInfo}) =>{

return (
    <div className="section">
        <div>
        <h3>General Info <EditButton/>
            <button className='edit-button'>EDIT</button> 
            </h3>
        <form onSubmit={editInfo} >
            <p><input placeholder="name" type="text" defaultValue={name}/></p>
            <p><input placeholder="e-mail" type="email" defaultValue={email}/></p>
            <p><input placeholder="phone number" type="tel" defaultValue={phone}/></p>
            <SubmitButton/>
            {/* <button className='submit-button' type="submit">SUBMIT</button>
             */}
        </form>
        </div>
    </div>
    
    )
}

export default GeneralInfo;