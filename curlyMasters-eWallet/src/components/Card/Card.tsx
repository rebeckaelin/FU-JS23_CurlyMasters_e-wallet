import "./Card.scss";
import Wifi from "../../../img/Group.svg";
import Bitcoin from "../../../img/Bitcoin.svg";

type Props = {};

const Card = (props: Props) => {
  return (
    <>
      <article className="card">
        <picture className="img-wrapper">
          <img src={Wifi} alt="" />
          <img src={Bitcoin} alt="" />
        </picture>
        <article className="card-number-wrapper">
          <p className="card-number">6666 6666 6666 6666</p>
        </article>
        <div>
          <article className="card-holder">
            <p className="name-label">CARDHOLDER NAME</p>
            <p className="date-label">VALID THRU</p>
          </article>
          <article className="card-user">
            <p className="name">CHRISTOFFER WALLENBERG</p>
            <p className="date">10/23</p>
          </article>
        </div>
      </article>
    </>
  );
};

export default Card;
