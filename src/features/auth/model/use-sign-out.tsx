import { useResetSession } from "@/entities/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export function useSignOut() {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.replace(ROUTES.SIGN_IN);
      useResetSession()
      toast.success("You have successfully logged out");
    },
  });

  return {
    isLoading: signOutMutation.status === "pending",
    signOut: signOutMutation.mutate,
  };
}
