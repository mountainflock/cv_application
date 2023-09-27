const Education = () => {
return (
    <div className="section">
        <div>
            <h3>Education <button className="edit-button">EDIT</button></h3>
             <p><input placeholder="school"/></p>
            <p><input placeholder="title" /></p>
            <p><input placeholder="finished" type="date"/></p>
            <div><button className="submit-button">SUBMIT</button></div>
        </div>
        
    </div>
)
}

export default Education;