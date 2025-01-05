import clsx from "clsx";
import { UiLogo } from "../ui-logo/ui-logo";
import { ReactNode } from "react";

type UiHeaderType = {
  className?: string;
  rightContent?: ReactNode;
  logoContent?: string;
};

export function UiHeader({
  className,
  rightContent,
  logoContent,
}: UiHeaderType) {
  return (
    <header
      className={clsx(
        className,
        "px-3 py-4 border-b border-b-slate-400 flex justify-between items-center bg-white",
      )}
    >
      <UiLogo logoContent={logoContent} className="text-teal-600"/>
      {rightContent}
    </header>
  );
}
