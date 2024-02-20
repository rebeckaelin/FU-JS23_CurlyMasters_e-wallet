
import "./style.scss";
export const Cards = () => {
    return (
      <div className="cards">
        <div className="div">
          <div className="overlap">
            <img
              className="ninja-card"
              alt="Ninja card"
              src="./img/ninja-card.png"
            />
            <div className="block-card">
              <img
                className="noun-wifi"
                alt="Noun wifi"
                src="/img/noun-wifi-159786-3.svg"
              />
              <img
                className="chain-logo"
                alt="Chain logo"
                src="/img/chain-logo-1.png"
              />
            </div>
            <div className="evil-card">
              <div className="overlap-group">
                <div className="overlap-2">
                  <div className="text-wrapper">10/23</div>
                  <div className="valid-thru">VALID THRU</div>
                </div>
                <div className="text-wrapper-2">6666 6666 6666 6666</div>
                <div className="overlap-3">
                  <div className="christoffer">CHRISTOFFER WALLENBERG</div>
                  <div className="cardholder-name">CARDHOLDER NAME</div>
                </div>
                <img className="group" alt="Group" src="/img/group-5.svg" />
              </div>
            </div>
            <img className="subtract" alt="Subtract" src="/img/subtract-1.svg" />
          </div>
          <div className="CTA-use-this-card">
            <div className="add-a-new-card-wrapper">
              <div className="add-a-new-card">ADD A NEW CARD</div>
            </div>
          </div>
          <div className="overlap-4">
            <img
              className="bitcoin-card-active"
              alt="Bitcoin card active"
              src="/img/bitcoin-card-active.png"
            />
            <div className="active-card">ACTIVE CARD</div>
          </div>
          <div className="e-wallet">E-WALLET</div>
        </div>
      </div>
    );
  };
  