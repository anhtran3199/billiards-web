import axios from "axios";

const auth = JSON.parse(localStorage.getItem('authorization')) === null ? '' : JSON.parse(localStorage.getItem('authorization')).data.jwt
console.log(auth);
axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth