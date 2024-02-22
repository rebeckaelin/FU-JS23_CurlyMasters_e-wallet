import "./Cards.scss";
import {useState} from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import AddNewCardButton from "../../components/AddNewCardButton/AddNewCardButton";
import {cardList} from "../../constants/CardList";

import "./../../App.css";

export const Cards = () => {
  const [updatedCard, setUpdatedCard] = useState(cardList);

  const wallet = updatedCard.map((listItem) => (
    <div className="card-wrapper">
      <li className="wallet__item" key={listItem.id}>
        <Card
          id={listItem.id}
          cardnumber={listItem.cardnumber}
          name={listItem.name}
          validthru={listItem.validthru}
          backgroundColor={listItem.backgroundColor}
          color={listItem.color}
          vendor={listItem.selectedIcon}
        />
      </li>
    </div>
  ));
  return (
    <section className="defaultPage">
      <Header title="E-WALLET" subtitle="ACTIVE CARD" />

      <section className="active-card-container"></section>
      <section className="wallet-container"></section>
      <ul className="wallet">{wallet}</ul>

      <AddNewCardButton />
    </section>
  );
};
