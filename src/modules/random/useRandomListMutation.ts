import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRandomList, deleteRandomList } from "./databse";
import { GET_RANDOM_LIST_QUERY_KEY } from "./constants";

export function useAddRandomListMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addRandomList,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [GET_RANDOM_LIST_QUERY_KEY],
      });
    },
  });
}

export function useDeleteRandomListMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteRandomList(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [GET_RANDOM_LIST_QUERY_KEY],
      });
    },
  });
}
