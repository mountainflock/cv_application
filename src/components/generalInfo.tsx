// import EditButton from "./editButton"
// import SubmitButton from "./submitButton" 
// import handleSubmitClick from '../App.tsx'

const GeneralInfo = ({name, email, phone}) =>{

return (
    <div className="section">
        <div>
        <h3>General Info <button className='edit-button'>EDIT</button> </h3>
        <form 
        >
            <p><input placeholder="name" type="text" value={name}/></p>
            <p><input placeholder="e-mail" type="email" value={email}/></p>
            <p><input placeholder="phone number" type="tel" value={phone}/></p>
            <button className='submit-button' type="submit">SUBMIT</button>
        </form>
        </div>
    </div>
    
    )
}

export default GeneralInfo;