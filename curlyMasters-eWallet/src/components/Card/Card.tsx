import "./Card.scss";
import Wifi from "../../assets/wifi.svg";

const groupByFour = (num) => {
  return num.replace(/(\d{4}(?!\s))/g, "$1 ");
};

const groupByTwo = (num) => {
  if (typeof num === "string" && num.trim() !== "" && num.length >= 2) {
    const formattedNum = num.replace(/(\d{2}(?=\d))/g, "$1/");
    return formattedNum;
  }
  return ""; // return empty string if num is not valid
};
const toUpperCase = (name) => {
  return name.toUpperCase();
};

const Card = (props) => {
  return (
    <div>
      <article
        style={{backgroundColor: props.backgroundColor, color: props.color}}
        className="card"
        onClick={props.disableClick ? null : props.onClick}>
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
