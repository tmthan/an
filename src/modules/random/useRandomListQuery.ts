"use client";
import { useQuery } from "@tanstack/react-query";
import { getRandomList } from "./databse";
import { GET_RANDOM_LIST_QUERY_KEY } from "./constants";

export function useGetRandomListQuery() {
  return useQuery({
    queryKey: [GET_RANDOM_LIST_QUERY_KEY],
    queryFn() {
      return getRandomList();
    },
  });
}
