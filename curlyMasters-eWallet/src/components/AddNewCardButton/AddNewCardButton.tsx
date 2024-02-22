import {useNavigate} from "react-router-dom";
import "./AddNewCardButton.scss";

const AddNewCardButton = () => {
  const navigate = useNavigate();

  return (
    <button className="addButton" onClick={() => navigate("addcard")}>
      ADD NEW CARD
    </button>
  );
};

export default AddNewCardButton;
