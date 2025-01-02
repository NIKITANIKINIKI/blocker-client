import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";
import { UiLink } from "@/shared/ui";
import { ROUTES } from "@/shared/constants/routes";

export function SignUpForm() {
  const { signUpMutation, handleSubmit, errors, register } = useSignUpForm();

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
        disabled={signUpMutation.status === "pending"}
        variant={"primary"}
      >
        Sign Up
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Already registered?
      </UiLink>
    </form>
  );
}
