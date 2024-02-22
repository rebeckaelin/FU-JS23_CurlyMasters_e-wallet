import React, {useState} from "react";
import "./Cards.scss";
import "./../../App.css";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import AddNewCardButton from "../../components/AddNewCardButton/AddNewCardButton";
import {CardProps} from "../../constants/CardList";

interface CardsProps {
  cardList: CardProps[];
}

const Cards: React.FC<CardsProps> = ({cardList: initialCardList}) => {
  const [activeCard, setActiveCard] = useState<CardProps | null>(null);
  const [cardList, setCardList] = useState<CardProps[]>(initialCardList);

  const handleClick = (id: number) => {
    const clickedCard = cardList.find((card) => card.id === id);
    if (activeCard) {
      setCardList((prevCardList) => [...prevCardList, activeCard]);
    }
    setCardList((prevCardList) =>
      prevCardList.filter((card) => card.id !== id)
    );
    setActiveCard(clickedCard || null);
  };

  const renderActiveCard = () => {
    if (!activeCard) return null;
    return (
      <div className="card-wrapper">
        <Card
          id={activeCard.id}
          cardnumber={activeCard.cardnumber}
          name={activeCard.name}
          validthru={activeCard.validthru}
          backgroundColor={activeCard.backgroundColor}
          color={activeCard.color}
          selectedIcon={activeCard.selectedIcon} // Make sure this is the correct prop name
          onClick={() => setActiveCard(null)}
          disableClick={true}
        />
      </div>
    );
  };

  const wallet = cardList.map((card) => (
    <li className="wallet__item" key={card.id}>
      <Card
        id={card.id}
        cardnumber={card.cardnumber}
        name={card.name}
        validthru={card.validthru}
        backgroundColor={card.backgroundColor}
        color={card.color}
        selectedIcon={card.selectedIcon} // Make sure this is the correct prop name
        onClick={() => handleClick(card.id)}
      />
    </li>
  ));

  return (
    <section className="defaultPage">
      <Header title="E-WALLET" subtitle="ACTIVE CARD" />

      <section className="active-card-container">{renderActiveCard()}</section>
      <section className="wallet-container">
        <ul className="wallet">{wallet}</ul>
      </section>

      <AddNewCardButton />
    </section>
  );
};

export default Cards;
