import {CardProps} from "../../constants/Interfaces";
import "./Card.scss";
import Wifi from "../../assets/wifi.svg";

// funktion för att dela upp numret i 4 delar med 4 nummer i varje
const groupByFour = (num: string): string => {
  return num.replace(/(\d{4}(?!\s))/g, "$1 ");
};
//funktion som delar upp de 4 siffrorna i stängen med / så det blir 11/22 tex
const groupByTwo = (num: string): string => {
  //kontrollerar så att "num" är en sträng så if-satsen kan köras
  //trim() tar bort blanksteg och kontrollerar att strängen inte är tom
  //num.length kontrollerar så att det finns fler än 2 tecken
  if (typeof num === "string" && num.trim() !== "" && num.length >= 2) {
    const formattedNum = num.replace(/(\d{2}(?=\d))/g, "$1/");
    return formattedNum;
  }
  return "";
};
//funktion för att göra texten från cardholdername till stora bokstäver
const toUpperCase = (name: string): string => {
  return name.toUpperCase();
};
//komponent som renderar ut kortet på sidan där den kallas
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
