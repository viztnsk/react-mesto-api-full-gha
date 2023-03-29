import { useContext} from "react";
import editButton from '../images/editButton.svg';
import addButton from '../images/addButton.svg';
import editAvatarButton from '../images/editAvatarButton.svg'
import Card from './Card.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main(props) { 
  const currentUser = useContext(CurrentUserContext);  
  return (
    <main className="content">
        <section className="profile">
          <button className="avatar-button" type="button" onClick={props.onEditAvatar}>
            <div className="avatar">
              <img className="avatar__image" src={currentUser.avatar} alt="Аватар"/>
              <div className="avatar__cover">
                <img className="avatar__edit-button" src={editAvatarButton} alt="Изменить аватар"/>
              </div>
          </div>
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button className="edit-button" onClick={props.onEditProfile} type="button"><img src={editButton} alt="Кнопка редактирования"/></button>
          <button className="add-button" onClick={props.onAddPlace} type="button"><img src={addButton} alt="Кнопка добавления"/></button>
        </section>
        <section className="elements">
        {props.cards.map(card => (
        <Card 
          card={card} 
          like={props.like}
          onCardClick={props.onCardClick} 
          onCardLike={props.onCardLike} 
          onCardDelete={props.onCardDelete} 
          key={card._id} 
        />))} 
        </section>
      </main>
  )
}
export default Main;
