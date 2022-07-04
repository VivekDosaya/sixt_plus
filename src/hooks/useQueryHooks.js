import { useQuery } from "react-query";

export const useQueryHook = (id, query) => {
  const { isLoading, isError, data } = useQuery(id, () => query, {
    refetchOnMount: true,
  });
  return { isLoading, isError, data };
};
