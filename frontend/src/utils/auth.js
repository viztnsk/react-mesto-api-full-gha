export const BASE_URL = 'https://api.viztnsk.mesto.nomoredomains.work';

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
} 

export const register = (email, password) => {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({ email, password })
  }).then((response) => getResponseData(response))
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => getResponseData(response))
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
    else {
      return;
    }
    })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Authorization" : `Bearer ${token}`} 
  })
  .then((response) => getResponseData(response))
}
