import { useState } from 'react';
import "./Form.scss"; 

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    cardnumber: "",
    name: "",
    validthru: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      cardnumber: "",
      name: "",
      validthru: "",
      ccv: "",
      vendor: "",
    }); // Återställer formdata efter inskickning
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="flex">
        <label htmlFor="cardnumber">CARD NUMBER</label>
        <input
          onChange={handleChange}
          pattern="[0-9\s]{13,19}"
          autoComplete="off"
          type="text"
          name="cardnumber"
          inputMode="numeric"
          value={formData.cardnumber}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          onChange={handleChange}
          pattern="^[A-Za-zÅÄÖåäö\s]*$"
          autoComplete="off"
          type="text"
          name="name"
          value={formData.name}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="validthru">VALID THRU</label>
        <input
          onChange={handleChange}
          type="text"
          name="validthru"
          autoComplete="off"
          value={formData.validthru}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="ccv">CCV</label>
        <input
          onChange={handleChange}
          type="text"
          name="ccv"
          autoComplete="off"
          value={formData.ccv}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="vendor">VENDOR</label>
        <select
          onChange={handleChange}
          name="vendor"
          value={formData.vendor}
          required>
          <option value="">Select Vendor</option>
          <option value="evilcorp">Evil Corp</option>
          <option value="blockchain">Block Chain Inc</option>
          <option value="ninjabank">Ninja Bank</option>
          <option value="bitcoin">Bitcoin Inc</option>
        </select>
      </div>
      <button className="addButton" type="submit">
        ADD CARD
      </button>
    </form>
  );
};

export default Form;
