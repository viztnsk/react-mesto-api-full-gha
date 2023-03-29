function ImagePopup({card, onClose}) {
  return (
    <section className={`popup popup_type_card`+ (card ? " popup_opened" : "")}>
      <div className="popup__picture">
        <button className="close-button close-button_type_image" type="button" onClick={onClose}></button>
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <p className="popup__text">{card?.name}</p>
      </div>
    </section>
  )
}

export default ImagePopup;