import { getPokemonList } from "@/services/list";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetPokemonLoadMore = () => {
  return useInfiniteQuery({
    queryKey: ["pokemoons"],
    queryFn: ({ pageParam }) => getPokemonList({ limit: pageParam }),
    initialPageParam: 4,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
};
