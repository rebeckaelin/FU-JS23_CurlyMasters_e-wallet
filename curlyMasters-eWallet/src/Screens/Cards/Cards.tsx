import "./style.scss";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Header from "../../components/Header/Header";

// header component
//card component
// button component
export const Cards = () => {
  return (
    <section className="cards">
      <Header />
      <CardsContainer />
      {/*    <Button /> */}
    </section>
  );
};
