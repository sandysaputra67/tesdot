import axios from "axios";

export const API = axios.create({
  baseURL: "https://rajaongkir-ahsan.herokuapp.com/api/",
});
