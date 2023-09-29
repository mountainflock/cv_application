import EditButton from "./editButton"
import SubmitButton from "./submitButton" 


const GeneralInfo = ({
    name, 
    editName, 
    isGeneralSubmit, 
    setIsGeneralSubmit, 
    email, 
    editEmail, 
    phone, 
    editPhone}) =>{

if (isGeneralSubmit) 
return (
    <div className='section'>
            <h3>General Info <EditButton/></h3>
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    </div>
    )

return (
    <div className="section">
        <div>
        <h3>General Info <EditButton/></h3>
        <form onSubmit={setIsGeneralSubmit}>
            <p><input onChange={editName} placeholder="name" type="text" defaultValue={name}/></p>
            <p><input onChange={editEmail} placeholder="e-mail" type="text" defaultValue={email}/></p>
            <p><input onChange={editPhone}placeholder="phone number" type="tel" defaultValue={phone}/></p>
            <SubmitButton/>
        </form>
        </div>
    </div>
    )
}

export default GeneralInfo;