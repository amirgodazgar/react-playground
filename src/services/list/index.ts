import clientRequest from "..";

export const getPokemonList = async () => {
  const response = await clientRequest.get("/pokemon?limit=20&offset=0");
  return response.data;
};
