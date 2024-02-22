import "./Card.scss";
import Wifi from "../../../img/Group.svg";




const Card = ({ cardnumber, name, validthru, ccv, vendor, id, color, style }) => {

  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div style={cardStyle} className="card">
        <picture className="img-wrapper">
          <img src={Wifi} alt="" />
          <img src={vendor} alt="" />
        </picture>
        <article className="card-number-wrapper">
          <p className="card-number">{cardnumber}</p>
        </article>
        <div>
          <article className="card-holder">
            <p className="name-label">CARDHOLDER NAME</p>
            <p className="date-label">VALID THRU</p>
          </article>
          <article className="card-user">
            <p className="name">{name}</p>
            <p className="date">{validthru}</p>
          </article>
        </div>
    </div>
  );
};

export default Card;
