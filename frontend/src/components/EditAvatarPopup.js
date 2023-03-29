import React, { useRef} from "react";
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup (props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar ({
      avatar: avatarRef.current.value,
    })
    avatarRef.current.value="";
  }
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onCLose} onSubmit={handleSubmit} name='avatar' title="Обновить аватар" button="Сохранить" children={
      <fieldset className="form__info form__info_type_avatar">
        <input ref={avatarRef} id="avatar-input" className="form__input form__input_type_avatar" type="url" placeholder="Ссылка на фото" name="link" required/>
        <span id="avatar-input-error"></span>
      </fieldset>
    } />
  )
}



export default EditAvatarPopup;
