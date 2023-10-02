import "../styles/line.css"

const Line = ({title, value}) => {
    return (
    <p className="cv-line" >
       <span className="cv-line-title">{title}:</span> {value}
    </p>
    )
}

export default Line