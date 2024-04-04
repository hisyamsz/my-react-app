import axios from 'axios';

export function getProducts(callback) {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDetailProduct(id, callback) {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
