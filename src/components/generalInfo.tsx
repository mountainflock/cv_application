import handleSubmitClick from '../App.tsx'
const GeneralInfo = () =>{


return (
    <div className="section">
        <div>
        <h3>General Info <button className="edit-button">EDIT</button></h3>
        <p><input placeholder="name"/></p>
        <p><input placeholder="e-mail" type="email"/></p>
        <p><input placeholder="phone number" type="tel"/></p>
        <div><button className="submit-button" onClick={handleSubmitClick}>SUBMIT</button></div>
    </div>
    </div>
    )
}

export default GeneralInfo;