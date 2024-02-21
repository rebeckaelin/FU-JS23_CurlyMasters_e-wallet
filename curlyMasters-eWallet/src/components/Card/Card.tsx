import "./Card.scss";
import Wifi from "../../../img/Group.svg";
import Bitcoin from "../../../img/Bitcoin.svg";

const Card = (props) => {
  return (
    <div>
      <article className="card" key={props.id}>
        <picture className="img-wrapper">
          <img src={Wifi} alt="" />
          <img src={props.vendor} alt="" />
        </picture>
        <article className="card-number-wrapper">
          <p className="card-number">{props.cardnumber}</p>
        </article>
        <div>
          <article className="card-holder">
            <p className="name-label">CARDHOLDER NAME</p>
            <p className="date-label">VALID THRU</p>
          </article>
          <article className="card-user">
            <p className="name">{props.name}</p>
            <p className="date">{props.validthru}</p>
          </article>
        </div>
      </article>
    </div>
  );
};

export default Card;
