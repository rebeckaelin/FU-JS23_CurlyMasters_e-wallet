import { useNavigate } from "react-router-dom";
import "./AddNewCardButton.scss";

const AddNewCardButton = ({ onClick }) => { 
  const navigate = useNavigate();

  return (
    <button className="addButton" onClick={onClick}>
      ADD NEW CARD
    </button>
  );
};

export default AddNewCardButton;
