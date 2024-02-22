import {useState} from "react";
import {cardList} from "../../constants/CardList";
import {useNavigate} from "react-router-dom";

import "./Form.scss";
import Bitcoin from "./../../assets/Bitcoin.svg";
import EvilCorp from "./../../assets/Evilcorp.svg";
import Blockchain from "./../../assets/Blockchain.svg";
import Ninjabank from "./../../assets/Ninjabank.svg";

const Form = () => {
  //variabel för att kunna använda navigera från add card-knappen till första sidan igen
  const navigate = useNavigate();
  //deklarerar hur useStaten skall se ut, formen av ett objekt i detta fall
  const [formData, setFormData] = useState({
    cardnumber: "",
    name: "",
    validthru: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (e) => {
    //här säger vi åt datan som kommer från inputfältet att se ut som formData
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  //funktion för att hantera datan som kommer från formuläret när det submittas/trycks på add card-knappen
  const handleSubmit = (e) => {
    e.preventDefault();

    let backgroundColor = "";
    let color = "";
    let selectedIcon = null;
    //if-sats för att tilldela ett kort en färg, textfärg och ikon beroende på vad som väljs.
    if (formData.vendor === "bitcoin") {
      backgroundColor = "rgba(255, 174, 52, 1)";
      selectedIcon = Bitcoin;
    } else if (formData.vendor === "evilcorp") {
      backgroundColor = "rgba(243, 51, 85, 1)";
      color = "white";
      selectedIcon = EvilCorp;
    } else if (formData.vendor === "ninjabank") {
      backgroundColor = "rgba(34, 34, 34, 1)";
      color = "white";
      selectedIcon = Ninjabank;
    } else if (formData.vendor === "blockchain") {
      backgroundColor = "rgba(139, 88, 249, 1)";
      selectedIcon = Blockchain;
    } else {
      backgroundColor = "rgba(211, 211, 211)";
    }
    // kortet pushas in i vår array och får ytterligare lite egenskaper tex ett unikt id.
    cardList.push({
      ...formData,
      id: cardList.length + 1,
      backgroundColor: backgroundColor,
      color: color,
      selectedIcon: selectedIcon,
    });
    //här säger vi att gå till första sidan när vi också klickar på add card-knappen
    navigate("/");
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <section className="flex">
          <label htmlFor="cardnumber">CARD NUMBER</label>
          <input
            onChange={handleChange} //här körs funktionen som hämtar in datan in i formData
            pattern="[0-9\s]{16}"
            minLength="16"
            maxLength="16"
            type="text"
            name="cardnumber"
            inputMode="numeric"
            value={formData.cardnumber}
          />
        </section>
        <section className="flex">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            onChange={handleChange} //här körs funktionen som hämtar in datan in i formData
            pattern="^[A-Za-zÅÄÖåäö\s]*$"
            type="text"
            name="name"
            value={formData.name}
          />
        </section>
        <section className="flex">
          <label htmlFor="validthru">VALID THRU</label>
          <input
            onChange={handleChange} //här körs funktionen som hämtar in datan in i formData
            minLength="4"
            maxLength="4"
            type="text"
            name="validthru"
            value={formData.validthru}
          />
        </section>
        <section className="flex">
          <label htmlFor="ccv">CCV</label>
          <input
            onChange={handleChange} //här körs funktionen som hämtar in datan in i formData
            maxLength="3"
            type="text"
            name="ccv"
            value={formData.ccv}
          />
        </section>
        <section className="flex">
          <label htmlFor="vendor">VENDOR</label>
          <select
            onChange={handleChange} //här körs funktionen som hämtar in datan in i formData
            name="vendor"
            id="vendor"
            value={formData.vendor}>
            <option value="default"></option>
            <option value="evilcorp">Evil Corp</option>
            <option value="blockchain">Block Chain Inc</option>
            <option value="ninjabank">Ninja Bank</option>
            <option value="bitcoin">Bitcoin Inc</option>
          </select>
        </section>
        <button
          style={{backgroundColor: "black", color: "white"}}
          className="addButton"
          type="submit">
          ADD CARD
        </button>
      </form>
    </>
  );
};

export default Form;
