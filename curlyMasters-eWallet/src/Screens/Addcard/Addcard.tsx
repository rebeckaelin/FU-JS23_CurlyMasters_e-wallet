import Form from '../../components/Forms/Form'; // Kontrollera sökvägen
import Card from '../../components/Card/Card';

const exampleCardData = {
  cardnumber: "XXXX XXXX XXXX XXXX",
  name: "NAMN EFTERNAMN",
  validthru: "MM/ÅÅ",
  vendor: "", // Ange en sökväg till en bild om du har en, eller lämna den tom
  color: "#D3D3D3", 
};


const AddCard = ({ onAddNewCard }) => { 
  return (
    <section> 
      <Card {...exampleCardData} style={{ backgroundColor: exampleCardData.color }} />
      <Form onFormSubmit={onAddNewCard} /> 
    </section>
  );
};

export default AddCard;


// rad 3 och 6: onAddNewCard är alltså en prop som vi fått från Card. Vi döpte propsen till onAddNewCard. Denna skickade vi sedan ner till Form, som vi ju ser på rad 6. 
// dock så döper vi ju den propsen till onFormSubmit, men den kommer att göra samma sak som addNewCard, fast i en annan kontext. 

/* 

const addNewCard = (newCard) => { 
  const newCardWithId = { ...newCard, id: `${cardList.length + 1}` };
  setCardList(prevCardList => [...prevCardList, newCardWithId]);
  setShowAddCard(false); 
}; 

*/