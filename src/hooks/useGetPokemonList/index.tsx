import { getPokemonList } from "@/services/list";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { UseGetPokemonOptions } from "./types";

export const useGetPokemonList = <Data = unknown, Error = unknown>(
  options?: UseGetPokemonOptions<Data, Error>
): UseQueryResult<Data, Error> => {
  const { limit = 4, offset = 0, ...restOptions } = options || {};

  return useQuery<Data, Error>({
    queryKey: ["pokemon-list", limit, offset],
    queryFn: () => getPokemonList({ limit, offset }),
    ...restOptions,
  });
};
