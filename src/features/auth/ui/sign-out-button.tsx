import { UiButton } from "@/shared/ui";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { isLoading, signOut } = useSignOut();

  return (
    <UiButton
      variant="secondary"
      disabled={isLoading}
      onClick={() => signOut({})}
    >
      Sign out
    </UiButton>
  );
}
