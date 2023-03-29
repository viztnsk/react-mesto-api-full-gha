import React from 'react';
import useForm from '../hooks/useForm.js'

function Login(props) {
  const { values, handleChange } = useForm({
    email: '',
    password: ''
  })
    function handleSubmit(e) {
      e.preventDefault();
      props.onLogin(values)
    }
  return (
      <section className="auth">
        <div className='auth__container'>
          <section className='auth__form'>
            <h1 className="auth__title">Войти</h1>
            <form onSubmit={handleSubmit} className="auth__form">
              <fieldset className="auth__info">
                <input value={values.email || ''} onChange={handleChange} id="email-input" className="auth__input auth__input_type_email"  type="text" placeholder="Email" name='email' required/>
                <input value={values.password || ''} onChange={handleChange} id="password-input" className="auth__input auth__input_type_password" type="password" placeholder="Пароль" name="password" required/>
              </fieldset>
              <button className="auth__submit-button auth__submit-button_type_submit" type="submit">Войти</button>
            </form>
          </section>
        </div>
      </section>
  )
}

export default Login;