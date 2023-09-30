const General = ({
    name, 
    email,
    phone,
    editName,
    editEmail,
    editPhone,
    isGeneralSubmit, 
    toggleIsGeneralSubmit, 
    }) =>{

if (isGeneralSubmit) 
return (
    <div className="section">
        <div >
            <h3 className ="section-title">General Info <button className="edit-button" onClick={toggleIsGeneralSubmit}>EDIT</button></h3>
            <p className ="cv-line">{name}</p>
            <p className ="cv-line">{email}</p>
            <p className ="cv-line">{phone}</p>
        </div>
    </div>
    )

return (
    <div className="section">
        <div>
        <h3>General Info </h3>
        <form onSubmit={toggleIsGeneralSubmit}>
            <p><input onChange={editName} placeholder="name" type="text" defaultValue={name} required/></p>
            <p><input onChange={editEmail} placeholder="e-mail" type="text" defaultValue={email} required/></p>
            <p><input onChange={editPhone}placeholder="phone number" type="tel" defaultValue={phone} required/></p>
            <button className="submit-button">SUBMIT</button>
        </form>
        </div>
    </div>
    )
}

export default General;