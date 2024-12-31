import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor pointer flex gap-2 justify-center items-center",
        {
          primary:
            "text-white bg-teal-600 hover:bg-teal-800 disabled:opacity-50 shadow shadow-teal-500/30",
          secondary:
            "text-white bg-rose-600 hover:bg-rose-800 disabled:opacity-50 shadow shadow-rose-500/30",
          outlined:
            "text-white bg-slate-600 hover:bg-slate-800 disabled:opacity-50 shadow shadow-slate-500/30",
        }[variant],
      )}
    />
  );
}
