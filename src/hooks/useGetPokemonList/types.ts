import { UseQueryOptions } from "@tanstack/react-query";

export type PokemonQueryParams = {
  limit?: number;
  offset?: number;
};

export type UseGetPokemonOptions<Data = unknown, Error = unknown> = Omit<
  UseQueryOptions<Data, Error>,
  "queryKey" | "queryFn"
> &
  PokemonQueryParams;
