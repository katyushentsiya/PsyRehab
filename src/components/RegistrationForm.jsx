import React from 'react';

function RegistrationForm() {
  return (
    <div className="form">
      <div className="subtitle">Увійти в особистий кабінет!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder="" />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">Ім'я</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder="" />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Прізвище</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder="" />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
      <button type="submit" className="submit">Вхід</button>
    </div>
  );
}

export default RegistrationForm;