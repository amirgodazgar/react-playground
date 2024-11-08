import clientRequest from "..";

export const getPokemonList = () => {
  return clientRequest.get("/pokemon?limit=20&offset=0");
};
