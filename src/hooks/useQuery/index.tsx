import {
  useQuery as useQueryRaw,
  UseQueryOptions,
} from "@tanstack/react-query";

export const useQuery = (props: UseQueryOptions) => {
  const { queryKey, queryFn, ...restProps } = props;
  return useQueryRaw({ queryKey, queryFn, ...restProps });
};
