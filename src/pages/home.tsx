import { SignOutButton } from "@/features/auth";
import { UiHeader } from "@/shared/ui";

export function HomePage() {
  return (
    <main>
      <UiHeader rightContent={<SignOutButton />} logoContent="Blocker logo" />
    </main>
  );
}
