// https://pokeapi.co/api/v2/pokemon?limit=10&offset=0

import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

const clientRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default clientRequest;
