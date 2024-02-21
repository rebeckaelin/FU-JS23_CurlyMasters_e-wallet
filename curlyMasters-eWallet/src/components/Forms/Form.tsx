import { useState, ChangeEvent, FormEvent } from 'react';
import './Form.scss';
/* import Button from './Button */

interface FormProps {
    onSubmit: (cardInfo: CardInfo) => void; // Definiera en passande typ för onSubmit-callbacken
}

interface CardInfo {
    cardNumber: string;
    cardName: string;
    monthExpire: string;
    yearExpire: string;
    ccv: string;
    vendor: string;
}


function Form ({ onSubmit }: FormProps) {

    // Samlar alla separata state-variabler i en cardInfo-state variabel. Blir lättare att uppdatera hela fältet då. 
    const [cardInfo, setCardInfo] = useState<CardInfo>({
        cardNumber: '',
        cardName: '',
        monthExpire: '',
        yearExpire: '',
        ccv: '',
        vendor: ''
    });
    

    // Hanterar om det blir någon som helst förändring i formuläret. E representerar det event som triggats när vi tryckt/gjort något på formuläret. 
    const handleChangeInForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target; // array destructuring. dvs. vi hämtar här värdet av e.name och e.value. 
        setCardInfo({ // här uppdateras sedan det vi extraherat från name och value, och läggs in i cardInfo. Spridningsoperatorn är där för att kopiera och inte ta bort det redan befintliga innehållet
            ...cardInfo,
            [name]: value, // i setCardInfo så ska då slutligen namnet och värdet läggas in. 
        });
    };



    // Hanterar när vi tryckt på "submit", eller i vårt fall så blir det ju "add card"
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(cardInfo); // Här ska alltså innehållet i cardInfo att presenteras med onSubmit. 

        // Återställer cardInfo till ursprungliga tomma värden efter att formuläret skickats
        setCardInfo({
            cardNumber: '',
            cardName: '',
            monthExpire: '',
            yearExpire: '',
            ccv: '',
            vendor: '',
        });
    };


    // och nedan följer den roliga JSXEN. :D yaaaaaaaaay 
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                type="text"
                name="cardNumber"
                value={cardInfo.cardNumber}
                onChange={handleChangeInForm}
                placeholder="Card Number"
                />

                <input
                type="text"
                name="cardName"
                value={cardInfo.cardName}
                onChange={handleChangeInForm}
                placeholder="Card Name"
                />

                <input
                type="text"
                name="monthExpire"
                value={cardInfo.monthExpire}
                onChange={handleChangeInForm}
                placeholder="Month Expire"
                />

                <input
                type="text"
                name="ccv"
                value={cardInfo.ccv}
                onChange={handleChangeInForm}
                placeholder="CCV"
                />

                <select name="vendor" value={cardInfo.vendor} onChange={handleChangeInForm}>
                    <option value="">Choose a bank</option>
                    <option value="Bitcoin INC">Bitcoin INC</option>
                    <option value="Ninja Bank">Ninja Bank</option>
                    <option value="Block Chain INC">Block Chain INC</option>
                    <option value="Evil Corp">Evil Corp</option>
                </select>

            </form>
        </div>
    );
}

export default Form;