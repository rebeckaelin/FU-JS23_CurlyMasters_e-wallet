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

  // Här letar vi upp ett kort i vår lista av kort (cardList) som matchar det id vi klickade på.
  const handleClick = (id) => {
    const clickedCard = cardList.find((card) => card.id === id);
    // Om det finns ett aktivt kort
    if (activeCard) {
      // ...lägger vi till det aktiva kortet till slutet av vår kortlista.
      setCardList((prevCardList) => [...prevCardList, activeCard]);
    }
    // Sedan uppdaterar vi kortlistan genom att filtrera ut det kort vi just klickade på.
    setCardList((prevCardList) =>
      prevCardList.filter((card) => card.id !== id)
    );
    // Slutligen sätter vi det kort vi klickade på som det aktiva kortet.
    setActiveCard(clickedCard);
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
