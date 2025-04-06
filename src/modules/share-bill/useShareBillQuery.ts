import { useQuery } from "@tanstack/react-query";
import { getShareBill } from "./database";
import { SHARE_BILL_QUERY_KEY } from "./constants";

export function useGetShareBillQuery() {
  return useQuery({
    queryKey: [SHARE_BILL_QUERY_KEY],
    queryFn() {
      return getShareBill();
    },
  });
}
