import { SignUpForm } from "@/features/auth/ui/sign-up-form";
import { UiHeader, UiPageFormLayouts } from "@/shared/ui";

export function SignUpPage() {
  return (
    <UiPageFormLayouts
      header={<UiHeader logoContent="Blocker" />}
      form={<SignUpForm />}
      title="Sign Up"
    />
  );
}
