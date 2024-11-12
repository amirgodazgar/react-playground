import { getPokemonList } from "@/services/list";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

type PokemonQueryParams = {
  limit?: number;
  offset?: number;
};

type UseGetPokemonOptions<Data = unknown, Error = unknown> = Omit<
  UseQueryOptions<Data, Error>,
  "queryKey" | "queryFn"
> &
  PokemonQueryParams;

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
