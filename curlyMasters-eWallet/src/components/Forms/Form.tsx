import React, {useState, ChangeEvent, FormEvent} from "react";
import {cardList} from "../../constants/CardList";
import {useNavigate} from "react-router-dom";
import "./Form.scss";
import Bitcoin from "../../assets/Bitcoin.svg";
import EvilCorp from "../../assets/Evilcorp.svg";
import Blockchain from "../../assets/Blockchain.svg";
import Ninjabank from "../../assets/Ninjabank.svg";

interface FormData {
  cardnumber: string;
  name: string;
  validthru: string;
  ccv: string;
  vendor: string;
  id: number;
}

const Form: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    cardnumber: "",
    name: "",
    validthru: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let backgroundColor = "";
    let color = "";
    let selectedIcon = null;

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
      backgroundColor = "rgba(255, 255, 255, 1)";
    }

    cardList.push({
      ...formData,
      id: cardList.length + 1,
      backgroundColor: backgroundColor,
      color: color,
      selectedIcon: selectedIcon,
      state: false,
    });

    navigate("/");
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <section className="flex">
          <label htmlFor="cardnumber">CARD NUMBER</label>
          <input
            onChange={handleChange}
            pattern="[0-9\s]{13,19}"
            minLength={16}
            maxLength={16}
            type="text"
            name="cardnumber"
            inputMode="numeric"
            value={formData.cardnumber}
          />
        </section>
        <section className="flex">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            onChange={handleChange}
            pattern="^[A-Za-zÅÄÖåäö\s]*$"
            type="text"
            name="name"
            value={formData.name}
          />
        </section>
        <section className="flex">
          <label htmlFor="validthru">VALID THRU</label>
          <input
            onChange={handleChange}
            minLength={4}
            maxLength={4}
            type="text"
            name="validthru"
            value={formData.validthru}
          />
        </section>
        <section className="flex">
          <label htmlFor="ccv">CCV</label>
          <input
            onChange={handleChange}
            maxLength={3}
            type="text"
            name="ccv"
            value={formData.ccv}
          />
        </section>
        <section className="flex">
          <label htmlFor="vendor">VENDOR</label>
          <select
            onChange={handleChange}
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
        <button className="addButton" type="submit">
          ADD CARD
        </button>
      </form>
    </>
  );
};

export default Form;
