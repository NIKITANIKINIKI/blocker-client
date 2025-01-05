import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

export function useSignInForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm<{
        email: string;
        password: string;
      }>();
      const router = useRouter();
    
      const signInMutation = useMutation({
        mutationFn: authControllerSignIn,
        onSuccess() {
          router.push(ROUTES.HOME);
          toast.success("You have successfully registered");
        },
        onError() {
          toast.error("An error occurred during registration");
        },
      });

    return {
        signInMutation, 
        register,
        handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
        errors,
        watch
    }
}