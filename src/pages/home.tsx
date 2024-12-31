import { authControllerSignUp } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiHeader } from "@/shared/ui/ui-header/ui-header";
import { UiLink } from "@/shared/ui/ui-link/ui-link";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner/ui-page-spinner";
import { UiSelectField } from "@/shared/ui/ui-select-field/ui-select-field";
import { UiSpinner } from "@/shared/ui/ui-spinner/ui-spinner";
import { UiTextField } from "@/shared/ui/ui-text-field/ui-text-field";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    authControllerSignUp({ email: "nikita@gmail.com", password: "12345" });
  }, []);

  return (
    <main>
      <UiHeader rightContent={<div>11111</div>} logoContent="Blocker logo" />
      <UiButton variant="primary">111111111</UiButton>
      <UiButton variant="secondary">111111111</UiButton>
      <UiButton variant="outlined">111111111</UiButton>
      <UiButton disabled variant="outlined">
        111111111
      </UiButton>
      <UiTextField
        label="Text Field"
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField error="Error " inputProps={{ placeholder: "Enter email" }} />
      <UiSelectField
        options={[
          { value: "1", label: "options" },
          { value: "2", label: "options" },
        ]}
      />
      <UiLink href="/111111">1111111</UiLink>
      <UiSpinner className="text-teal-500" />
      {/* <UiPageSpinner/> */}
    </main>
  );
}
