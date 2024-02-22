import Card from "../../components/Card/Card";
import Form from "../../components/Forms/Form";
import "./addcard.scss";
import "./../../App.css";
import Header from "../../components/Header/Header";

const Addcard = () => {
  return (
    <>
      <section className="defaultPage">
        <Header title="ADD A NEW BANK CARD" subtitle="NEW CARD" />
        <Card
          id=""
          cardnumber="XXXX XXXX XXXX XXXX"
          name="EFTERNAMN FÖRNAMN"
          validthru="MM/YY"
          vendor=""
        />
        <Form />
      </section>
    </>
  );
};

export default Addcard;
