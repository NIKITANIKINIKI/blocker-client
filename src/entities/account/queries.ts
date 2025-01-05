import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const accountKey = ["account"];

export function useGetAccount() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
}

export function usePatchAccount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    // async onSuccess(){
    //     await queryClient.invalidateQueries({ queryKey: accountKey })
    //     toast.success('Successfully updated account')
    // },
    onSuccess(data) {
      queryClient.setQueryData(accountKey, data);
      toast.success("Successfully updated account");
    },
    onError() {
      toast.error("Failed to update account");
    },
  });
}
