import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { UiHeader, UiPageFormLayouts } from "@/shared/ui";

export function SignInPage() {
  return (
    <UiPageFormLayouts
      header={<UiHeader logoContent="Blocker" />}
      form={<SignInForm />}
      title="Sign In"
    />
  );
}
