import Card from "../../components/Card/Card";
import Form from "../../components/Forms/Form";
import "./addcard.scss";

const Addcard = () => {
  return (
    <>
      <section>
        <Card
          cardnumber="XXXX XXXX XXXX XXXX"
          name="EFTERNAMN NAMN"
          validthru="MM/YY"
          vendor=""
        />
        <Form />
      </section>
    </>
  );
};

export default Addcard;
