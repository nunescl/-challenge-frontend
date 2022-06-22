import axios from 'axios';

const API_URL = 'http://bootcamp-challenge.herokuapp.com/';

export function CAT_GET(set) {
  axios.get(API_URL + 'categories').then((response) => {
    set(response.data);
  });
}

export function PROD_GET(set) {
  axios.get(API_URL + 'products').then((response) => {
    set(response.data);
  });
}

export function PROD_POST(data) {
  axios
    .post(API_URL + 'products', data)
    .then(function (response) {
      alert('Produto cadastrado com sucesso!', response);
    })
    .catch((err) => alert(err));
}

export function PROD_DELETE(params) {
  axios.delete(API_URL + `products/delete/${params}`).then(() => {
    window.location.reload();
  });
}
