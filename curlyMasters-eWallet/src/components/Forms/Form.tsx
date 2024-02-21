import {useState} from "react";
import "./Form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    cardnumber: "",
    name: "",
    validthru: "",
    ccv: "",
    vendor: "",
  });

  const [cardList, setCardList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("formData in handleSubmit", formData);
    // console.log("cardList at start of handleSubmit", cardList);

    const newCard = {
      ...formData,
      id: cardList.length + 1,
    };

    const newCardList = [...cardList, newCard];
    console.log("newCardList", newCardList);
    setCardList(newCardList);

    // console.log("cardList", cardList);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <section className="flex">
          <label htmlFor="cardnumber">CARD NUMBER</label>
          <input
            onChange={handleChange}
            pattern="[0-9\s]{13,19}"
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
            type="text"
            name="validthru"
            value={formData.validthru}
          />
        </section>
        <section className="flex">
          <label htmlFor="ccv">CCV</label>
          <input
            onChange={handleChange}
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
            id=""
            value={formData.vendor}>
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
