import Card from "../Card/Card";
import "./CardsContainer.scss";

type Props = {};

const CardsContainer = (props: Props) => {
  return (
    <main className="card-wrapper">
      <section className="active-card-container">
        <p>active card</p>
        <Card />
      </section>
      <section className="wallet-container"></section>
    </main>
  );
};

export default CardsContainer;
