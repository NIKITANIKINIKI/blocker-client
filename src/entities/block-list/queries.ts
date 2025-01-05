import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const blockListKey = ["block-list"];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: [...blockListKey, { q }],
    queryFn: () => blockListControllerGetList({ q }),
    staleTime: 1000 * 60 * 5,
  });
}

export function useAddBlockItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
      toast.success("Successfully add a block item");
    },
    onError() {
      toast.error("Failed to add a block item");
    },
  });
}

export function useRemoveBlockItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
      toast.success("Successfully remove a block item");
    },
    onError() {
      toast.error("Failed to remove a block item");
    },
  });
}
