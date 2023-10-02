import "../styles/input.css"

const Input = ({title, onChange, type, value}) => {
    return (
        <div>
            <p className="input-title">{title}:</p> 
            <input onChange={onChange} type={type} value={value} required/>
            <p></p>
        </div>
    )
}

export default Input