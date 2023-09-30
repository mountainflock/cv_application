import "../styles/input.css"

const Input = ({onChange, type, placeholder, value}) => {
    return (
        <p><input onChange={onChange} type={type} placeholder={placeholder} value={value} /></p>
    )
}

export default Input