import "./Cards.scss";
import "./../../App.css";
import {useState} from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import AddNewCardButton from "../../components/AddNewCardButton/AddNewCardButton";
import {cardList as initialCardList} from "../../constants/CardList";

export const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [cardList, setCardList] = useState(initialCardList);

  const handleClick = (id) => {
    // console.log("id", id);
    const clickedCard = cardList.find((card) => card.id === id);
    if (activeCard) {
      setCardList((prevCardList) => [...prevCardList, activeCard]);
    }
    // console.log("clickedCard", clickedCard);
    setCardList((prevCardList) =>
      prevCardList.filter((card) => card.id !== id)
    );
    setActiveCard(clickedCard);
    // const updatedCardList = cardList.filter((card) => card.id !== id);
    // setCardList(updatedCardList);
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
          vendor={activeCard.selectedIcon}
          onClick={() => setActiveCard(null)} // Deselect active card when clicked
          disableClick={true} // Prevent clicking on the active card
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
        vendor={card.selectedIcon}
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
