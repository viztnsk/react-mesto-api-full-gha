import { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card({ card, like, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `delete-button ${isOwn ? '' : 'delete-button_inactive'}`
  );
  const isLiked = card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = `like-button ${isLiked ? 'like-button_active' : ''}`;
  return (
    <article className="element">
      <button className="image-button" type="button" onClick={() => onCardClick(card)} >
        <img className="element__image" src={card.link} alt={card.name}/>
      </button>
      <button className={cardDeleteButtonClassName} onClick={() => onCardDelete(card)} type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button className={cardLikeButtonClassName} value={like} onClick={() => onCardLike(card)} 
            type="button"></button>
          <h3 className="element__like-count">{card.likes.length}</h3>
        </div>
      </div>
    </article>
  )
}
export default Card;