import "../styles/line.css";

const Line = ({ title, value }) => (
  <p className="cv-line">
    <span className="cv-line-title">{title}:</span>{" "}
    <span className="line">{value}</span>
  </p>
);

export default Line;
