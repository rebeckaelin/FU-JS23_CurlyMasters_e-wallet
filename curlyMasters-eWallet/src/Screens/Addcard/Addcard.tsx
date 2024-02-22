import React from "react";
import Card from "../../components/Card/Card";
import Form from "../../components/Forms/Form";
import "./addcard.scss";
import "./../../App.css";
import Header from "../../components/Header/Header";

interface AddCardProps {
  id: number;
  backgroundColor: string;
  color: string;
  vendor: string;
}

const Addcard: React.FC = () => {
  const cardProps: AddCardProps = {
    id: 0, // Example value
    backgroundColor: "", // Example value
    color: "", // Example value
    vendor: "", // Example value
  };

  return (
    <>
      <section className="defaultPage">
        <Header title="ADD A NEW BANK CARD" subtitle="NEW CARD" />
        <Card
          cardnumber="XXXX XXXX XXXX XXXX"
          name="EFTERNAMN FÖRNAMN"
          validthru="MM/YY"
          {...cardProps} // Spread the additional props
        />
        <Form />
      </section>
    </>
  );
};

export default Addcard;
