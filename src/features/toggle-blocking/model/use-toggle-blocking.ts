import { useGetAccount, usePatchAccount } from "@/entities/account";

export function useToggleBlocking() {
  const { data: account, isLoading, isSuccess } = useGetAccount();

  const { mutate: mutateData } = usePatchAccount();
  const isBlockingEnabled = account?.isBlockingEnabled ?? false;

  const toggleBlocking = () => {
    if (account) {
      mutateData({
        isBlockingEnabled: !isBlockingEnabled,
      });
    }
  };

  return { toggleBlocking, isLoading, isBlockingEnabled, isSuccess };
}
