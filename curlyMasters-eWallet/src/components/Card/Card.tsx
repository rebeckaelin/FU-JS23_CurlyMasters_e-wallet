import React from "react";
import "./Card.scss";
import Wifi from "../../assets/wifi.svg";

interface CardProps {
  cardnumber: string;
  name: string;
  validthru: string;
  backgroundColor: string;
  color: string;
  vendor: string;
  disableClick?: boolean;
  onClick?: () => void;
}

const groupByFour = (num: string): string => {
  return num.replace(/(\d{4}(?!\s))/g, "$1 ");
};

const groupByTwo = (num: string): string => {
  if (typeof num === "string" && num.trim() !== "" && num.length >= 2) {
    const formattedNum = num.replace(/(\d{2}(?=\d))/g, "$1/");
    return formattedNum;
  }
  return "";
};

const toUpperCase = (name: string): string => {
  return name.toUpperCase();
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <article
        style={{backgroundColor: props.backgroundColor, color: props.color}}
        className="card"
        onClick={props.disableClick ? undefined : props.onClick}>
        <picture className="img-wrapper">
          <img src={Wifi} alt="" />
          <img src={props.vendor} alt="" />
        </picture>
        <article className="card-number-wrapper">
          <p className="card-number">{groupByFour(props.cardnumber)}</p>
        </article>
        <div>
          <article className="card-holder">
            <p className="name-label">CARDHOLDER NAME</p>
            <p className="date-label">VALID THRU</p>
          </article>
          <article className="card-user">
            <p className="name">{toUpperCase(props.name)}</p>
            <p className="date">{groupByTwo(props.validthru)}</p>
          </article>
        </div>
      </article>
    </div>
  );
};

export default Card;
