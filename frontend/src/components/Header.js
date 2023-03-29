import headerLogo from '../images/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';


function Header(props) { 
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип"/>
      <Routes>
        <Route path="/sign-in" element={
        <Link to="/sign-up" className='header__button'>
            <p className="header__text">Регистрация</p>
          </Link>} />
        <Route path="/sign-up" element={
          <Link to="sign-in" className='header__button'>
          <p className="header__text">Войти</p>
        </Link>} />
        <Route path="/" element={
          <div className="header__container">
            <p className="header__text">{props.email}</p>
            <Link to="sign-in" className='header__button' onClick={props.onSignOut}>
              <p className="header__text">Выйти</p>
            </Link>
          </div>
        } />
      </Routes>
    </header>
  )
}
export default Header;