const GeneralInfo = () =>{
return (
    <div className="section"> <h3>General Info</h3>
        <div>
        <p><input placeholder="name"/></p>
        <p><input placeholder="e-mail" type="email"/></p>
        <p><input placeholder="phone number" type="tel"/></p>
        <button>SUBMIT</button>
    </div>
    </div>
    )
}

export default GeneralInfo;