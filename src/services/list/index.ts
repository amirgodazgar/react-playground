import clientRequest from "..";

export type PokemonListParams = {
  limit?: number;
  offset?: number;
};

export const getPokemonList = async ({
  limit = 4,
  offset = 0,
}: PokemonListParams) => {
  const hasQueryString = limit || offset;
  const queryString = hasQueryString ? `?limit=${limit}&offset=${offset}` : "";
  const response = await clientRequest.get(`/pokemon${queryString}`);
  return response.data;
};
