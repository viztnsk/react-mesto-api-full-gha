function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name}`+ (props.isOpen ? " popup_opened" : "")} name={props.name}>
        <div className="popup__container">
          <button className={`close-button close-button_type_${props.name}`} type="button" onClick={props.onClose}></button>
          <h3 className="popup__title">{props.title}</h3>
          <form className={`form form_type_${props.name}`} noValidate onSubmit={props.onSubmit} >
            {props.children}
            <fieldset className="form__handler">
            <button className="submit-button popup__button submit-button_type_add" type="submit">{`${props.button}`}</button>
          </fieldset>
          </form>
        </div>
      </section>
  )
  
}

export default PopupWithForm;