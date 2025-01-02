import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

export function useSignUpForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<{
        email: string;
        password: string;
      }>();
      const router = useRouter();
    
      const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess() {
          router.push(ROUTES.HOME);
          toast.success("You have successfully registered");
        },
        onError() {
          toast.error("An error occurred during registration");
        },
      });

    return {
        signUpMutation, 
        register,
        handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
        errors
    }
}