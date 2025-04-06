import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShareBillLog } from "./database";
import { SHARE_BILL_QUERY_KEY } from "./constants";

export function useAddShareBillMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addShareBillLog,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [SHARE_BILL_QUERY_KEY],
      });
    },
  });
}
