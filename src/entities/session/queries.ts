import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const session = ["session"];

export function useSessionQuery() {
  return useQuery({
    queryKey: session,
    queryFn: authControllerGetSessionInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useResetSession() {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries({ queryKey: session });
}
