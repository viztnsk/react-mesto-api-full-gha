import React from "react";
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');
  React.useEffect(() => {
    setCardName('');
    setCardLink('');
}, [props.isOpen]);
  function handleCardNameChange(e) {
    setCardName(e.target.value)
  }
  function handleCardLinkCahnge(e) {
    setCardLink(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace ({
      name: cardName,
      link: cardLink,
    })
  }

  return(
    <PopupWithForm 
    isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
    name='place' title="Новое место" button="Создать" children={
      <fieldset className="form__info">
        <input value={cardName} onChange={handleCardNameChange} id='place-input' className="form__input form__input_type_card-name" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30"/>
        <span id="place-input-error"></span>
        <input value={cardLink} onChange={handleCardLinkCahnge} id='link-input' className="form__input form__input_type_card-link" type="url" placeholder="Ссылка на картинку" name="link" required/>
        <span id="link-input-error"></span>
      </fieldset>
    }  />
  )
}
export default AddPlacePopup;