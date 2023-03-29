import React from "react";
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }
  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} name='info' title='Редактировать профиль' button="Сохранить" children={
      <>
      <fieldset className="form__info">
        <input value={name || ''} onChange={handleNameChange} id="name-input" className="form__input form__input_type_name"  type="text" placeholder="Имя" name='name' required minLength="2" maxLength="40"/>
        <span id="name-input-error"></span>
        <input value={description || ''} onChange={handleDescriptionChange} id="about-input" className="form__input popup__input form__input_type_about" type="text" placeholder="О себе" name="about" required minLength="2" maxLength="200"/>
        <span id="about-input-error"></span>
      </fieldset>
    </>
    }/>
  )
}
export default EditProfilePopup;

   