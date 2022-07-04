import { useQueries } from "react-query";

export const useQueriesHook = (queries) => {
  const results = useQueries([
    queries.forEach((i, query) => {
      return {
        queryKey: [query.key, i],
        queryFn: query.function,
      };
    }),
  ]);
  return results;
};
