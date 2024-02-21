import "./style.scss";
import Card from "../../components/Card/Card";
// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Header from "../../components/Header/Header";
import AddNewCardButton from "../../components/AddNewCardButton/AddNewCardButton";

const cardList = [
  {
    cardnumber: "hej",
    name: "hej",
    validthru: "11",
    ccv: "",
    vendor: "",
    id: "",
  },
  {
    cardnumber: "hej",
    name: "hej",
    validthru: "11",
    ccv: "",
    vendor: "",
    id: "",
  },
];

const listItems = cardList.map((listItem) => (
  <li key={listItem.id}>
    <div className="icons">
      <img src="" alt="Wifi Icon" />
      <img src="" alt="Vendor Icon" />
    </div>
    <div>
      <p>{listItem.cardnumber}</p>
    </div>
    <div>
      <p>CARDHOLDER NAME: {listItem.name}</p>
      <p>VALID THRU: {listItem.validthru}</p>
    </div>
  </li>
));

export const Cards = () => {
  return (
    <section className="cards">
      <Header />
      <p className="active-card">ACTIVE CARD</p>
      <section className="active-card-container"></section>
      <section className="wallet-container">
        <Card
          cardnumber="XXXX XXXX XXXX XXXX"
          name="TESTSSON TEST"
          validthru="MM/YY"
          vendor=""
        />
      </section>
      <ul className="wallet">{listItems}</ul>

      <AddNewCardButton />
    </section>
  );
};
