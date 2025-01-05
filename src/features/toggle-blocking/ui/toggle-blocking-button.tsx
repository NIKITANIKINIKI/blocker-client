import { UiButton } from "@/shared/ui";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockButton() {
  const { toggleBlocking, isLoading, isBlockingEnabled, isSuccess } =
    useToggleBlocking();

  if (!isSuccess) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disabled" : "Enabled"}
    </UiButton>
  );
}
