import { FC } from "react";
import "../styles/editButton.css";

type EditButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const EditButton: FC<EditButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="edit-button">
    EDIT
  </button>
);

export default EditButton;
