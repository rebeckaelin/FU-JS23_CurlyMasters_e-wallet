import { useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import AddNewCardButton from '../../components/AddNewCardButton/AddNewCardButton';
import AddCard from '../Addcard/Addcard';

// Initial statisk lista med kort, det hårdkodade
const initialCardList = [
  {
    cardnumber: "Ninja Black",
    name: "hej",
    validthru: "11",
    ccv: "",
    vendor: "Ninja Bank",
    id: "1", 
    color: "rgba(108, 117, 125, 1)",
  },
  {
    cardnumber: "Blockchain Purple",
    name: "hej2",
    validthru: "12",
    ccv: "",
    vendor: "Block Chain Inc",
    id: "2", 
    color: "rgba(139, 88, 249, 1)",
  },
  {
    cardnumber: "Evil Corp",
    name: "hej3",
    validthru: "12",
    ccv: "",
    vendor: "Evil Corp",
    id: "3", 
    color: "#ff0000", 
  },
];


const vendorColors = {
  "Ninja Bank": "rgba(108, 117, 125, 1)",
  "Block Chain Inc": "rgba(139, 88, 249, 1)",
  "Evil Corp": "#ff0000",
  "Bitcoin Inc": "rgba(255, 174, 52, 1)",
};



export const Cards = () => {

  // vi använder oss utav useState även på våra cardList och showAddCard samt currentCard
  const [cardList, setCardList] = useState(initialCardList); 
  const [showAddCard, setShowAddCard] = useState(false); 
  const [currentCard, setCurrentCard] = useState(null); // vi lägger även till currentCard-state variabeln. Som namnet implicerar så ska detta alltså visa det aktuella kortet. 



  // vi skapar addNewCard funktionen med argumentet newCard. denna funktion ska skickas ner som prop till Addcard-komponenten sen (se rad 79.)
  const addNewCard = (newCard) => { // detta är en funktion vi skapar som då kommer att lägga till ett nytt kort. Se Addcard.tsx
    const newCardWithId = { ...newCard, id: `${cardList.length + 1}` };
    setCardList(prevCardList => [...prevCardList, newCardWithId]);
    setShowAddCard(false); // Döljer AddCard-formuläret efter att ett kort har lagts till
  };


// här skapar vi funktionen som ska uppdatera det kortet som visas på huvudsidan. Vi kommer att lägga denna funktion på en eventlyssnare onClick, se rad 88. 
  const handleCardClick = (card) => {
    const color = vendorColors[card.vendor];
    setCurrentCard({ ...card, color }); // genom setCurrentCard-funktionen som react erbjuder så uppdaterar vi kortet. Denna är nu alltså inbakad i handleCardClick
  };


  return (
    <section className="cards">
      <Header />
      {showAddCard ? ( // en state-variabel (se ovan). Denna kommer att växla mellan att visa AddCard och listan av korten vi redan har 
        <AddCard onAddNewCard={addNewCard} />
      ) : (
        <>
          <section className="active-card-container">
          {currentCard && <Card {...currentCard} style={{ backgroundColor: currentCard.color }} />}
          </section>

          <section className="wallet-container">
            {cardList.map((card) => (
              <div key={card.id} onClick={() => handleCardClick(card)} style={{backgroundColor: card.color }}> 
              <Card {...card} style={{ backgroundColor: card.color }}/>
              </div>
            ))}

          </section>
          <AddNewCardButton onClick={() => setShowAddCard(true)} />
        </>
      )}
    </section>
  );
};

// rad 63: map-funktionen ska nu också se till så att en onClick händelsehanterar är med för varje kort som anropas handleCardClick. 
// på så sätt så kan vi uppdatera kortets information. 