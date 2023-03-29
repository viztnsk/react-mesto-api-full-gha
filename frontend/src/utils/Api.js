import { BASE_URL } from './auth';

class Api {
  constructor({url, ...options}) {
    this._url = url;
    this._options = options;
    const token = localStorage.getItem("token");
    if (token) {
      if (!this._options.headers) this._options.headers = {};
      this._options.headers.authorization = "Bearer " + token;
    }
  }

  setToken(token) {
    localStorage.setItem('token', token);
    if (!this._options.headers) this._options.headers = {};
    this._options.headers.authorization = "Bearer " + token;
  }
  removeToken() {
    localStorage.removeItem('token')
    if (this._options?.headers?.authorization) {
      delete this._options?.headers?.authorization;
    }
  }

  async _fetch(path, method='GET', body) {
    const opt = { ...this._options, method };
    if (body) {
      if (typeof body === 'string') {
        opt.body = body; 
      }
      else {
        opt.body = JSON.stringify(body);
      }
    }
    const res = await fetch(this._url + path, opt)
    if(res.ok) {
      return res.json()
    }
    else {
      return Promise.reject(`Ошибка: ${JSON.message}`)
    }
  }
    getCards() {
      return this._fetch('/cards');
    }
    getUser() {
      return this._fetch('/users/me');
    }
    patchUser(values) {
      return this._fetch('/users/me', 'PATCH', values)
    }
    setAvatar(avatar) {
      return this._fetch('/users/me/avatar', 'PATCH', avatar)
    }
    addCard({name, link}) {
      return this._fetch('/cards', "POST", {name, link})
    }
    deleteCard(card) {
      return this._fetch(`/cards/${card._id}`, "DELETE")
    }
    setLike(card) {
      return this._fetch(`/cards/${card._id}/likes`, "PUT")
    }
    removeLike(card) {
      return this._fetch(`/cards/${card._id}/likes`, "DELETE")
    }
    changeLikeCardStatus(cardId, isLiked) {
      if (isLiked) {
        return this._fetch(`/cards/${cardId}/likes`, "PUT")
      }
      else {
        return this._fetch(`/cards/${cardId}/likes`, "DELETE")
      }
    }
  }
const api = new Api ({
    url: BASE_URL,
    headers: {
      // authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
  export default api