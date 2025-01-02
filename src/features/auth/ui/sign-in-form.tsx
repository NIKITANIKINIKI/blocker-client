import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";
import { UiLink } from "@/shared/ui";
import { ROUTES } from "@/shared/constants/routes";

export function SignInForm() {
  const { signInMutation, handleSubmit, errors, register } = useSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        error={errors.email && errors.email.message}
        inputProps={{
          placeholder: "Please, Enter Email",
          type: "email",
          ...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }),
        }}
      />
      <UiTextField
        label="Password"
        error={errors.password && errors.password.message}
        inputProps={{
          placeholder: "Please, Enter Password",
          type: "password",
          ...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              message:
                "Password must be at least 8 characters long, contain a number, a special character, an uppercase and a lowercase letter",
            },
          }),
        }}
      />
      <UiButton
        disabled={signInMutation.status === "pending"}
        variant={"primary"}
      >
        Sign In
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_UP}>
      Not registered yet?
      </UiLink>
    </form>
  );
}
