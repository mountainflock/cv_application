const WorkExperience = () => {
return (
    <div className="section">
        <h3>Work Experience</h3>
        <p><input placeholder="company"/></p>
        <p><input placeholder="position" /></p>
        <p><input placeholder="responsibilities" /></p>
        <p>from<input type='date'/></p>
        <p>to<input type='date'/></p>

        <button>SUBMIT</button>
    </div>
)
}

export default WorkExperience