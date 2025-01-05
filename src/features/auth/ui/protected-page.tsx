import { useSessionQuery } from "@/entities/session";
import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      if (router.pathname !== ROUTES.SIGN_IN) {
        router.replace(ROUTES.SIGN_IN);
      }
     return null;
    }

    return <Component {...props} />;
  };
}
