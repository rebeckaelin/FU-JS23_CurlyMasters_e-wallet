<<<<<<< HEAD
import { useState, ChangeEvent, FormEvent } from 'react';
import './Form.scss';
/* import Button from './Button */

interface FormProps {
    onSubmit: (cardInfo: CardInfo) => void; // Definiera en passande typ för onSubmit-callbacken
}

interface CardInfo {
    cardNumber: string;
    cardName: string;
    monthExpire: string;
    yearExpire: string;
    ccv: string;
    vendor: string;
}


function Form ({ onSubmit }: FormProps) {

    // Samlar alla separata state-variabler i en cardInfo-state variabel. Blir lättare att uppdatera hela fältet då. 
    const [cardInfo, setCardInfo] = useState<CardInfo>({
        cardNumber: '',
        cardName: '',
        monthExpire: '',
        yearExpire: '',
        ccv: '',
        vendor: ''
    });
    

    // Hanterar om det blir någon som helst förändring i formuläret. E representerar det event som triggats när vi tryckt/gjort något på formuläret. 
    const handleChangeInForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target; // array destructuring. dvs. vi hämtar här värdet av e.name och e.value. 
        setCardInfo({ // här uppdateras sedan det vi extraherat från name och value, och läggs in i cardInfo. Spridningsoperatorn är där för att kopiera och inte ta bort det redan befintliga innehållet
            ...cardInfo,
            [name]: value, // i setCardInfo så ska då slutligen namnet och värdet läggas in. 
        });
    };



    // Hanterar när vi tryckt på "submit", eller i vårt fall så blir det ju "add card"
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(cardInfo); // Här ska alltså innehållet i cardInfo att presenteras med onSubmit. 

        // Återställer cardInfo till ursprungliga tomma värden efter att formuläret skickats
        setCardInfo({
            cardNumber: '',
            cardName: '',
            monthExpire: '',
            yearExpire: '',
            ccv: '',
            vendor: '',
        });
    };


    // och nedan följer den roliga JSXEN. :D yaaaaaaaaay 
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                type="text"
                name="cardNumber"
                value={cardInfo.cardNumber}
                onChange={handleChangeInForm}
                placeholder="Card Number"
                />

                <input
                type="text"
                name="cardName"
                value={cardInfo.cardName}
                onChange={handleChangeInForm}
                placeholder="Card Name"
                />

                <input
                type="text"
                name="monthExpire"
                value={cardInfo.monthExpire}
                onChange={handleChangeInForm}
                placeholder="Month Expire"
                />

                <input
                type="text"
                name="ccv"
                value={cardInfo.ccv}
                onChange={handleChangeInForm}
                placeholder="CCV"
                />

                <select name="vendor" value={cardInfo.vendor} onChange={handleChangeInForm}>
                    <option value="">Choose a bank</option>
                    <option value="Bitcoin INC">Bitcoin INC</option>
                    <option value="Ninja Bank">Ninja Bank</option>
                    <option value="Block Chain INC">Block Chain INC</option>
                    <option value="Evil Corp">Evil Corp</option>
                </select>

            </form>
        </div>
    );
}

export default Form;
=======
import {useState} from "react";

import {cardList} from "../../constants/CardList";
import {useNavigate} from "react-router-dom";

import "./Form.scss";
import Bitcoin from "./../../assets/Bitcoin.svg";
import EvilCorp from "./../../assets/Evilcorp.svg";
import Blockchain from "./../../assets/Blockchain.svg";
import Ninjabank from "./../../assets/Ninjabank.svg";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardnumber: "",
    name: "",
    validthru: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
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
    });
    // console.log("cardList", cardList);
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
            onChange={handleChange}
            maxLength="3"
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

// const [cardList, setCardList] = useState([]);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // console.log("formData in handleSubmit", formData);
//   // console.log("cardList at start of handleSubmit", cardList);

//   const newCard = {
//     ...formData,
//     id: cardList.length + 1,
//   };

//   const newCardList = [...cardList, newCard];
//   // console.log("newCardList", newCardList);
//   setCardList(newCardList);

//   console.log("cardList", cardList);
// };
>>>>>>> b6906833b513307e4cadf67e08e5b8bbe42b4987
