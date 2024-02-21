import Card from "../Card/Card";
import "./CardsContainer.scss";

const CardsContainer = () => {
  return (
    <main className="card-wrapper">
      <section className="active-card-container"></section>
      <section className="wallet-container">
        <ul className="wallet">
          <Card />
        </ul>
      </section>
    </main>
  );
};

export default CardsContainer;
