import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({
  className,
  error,
  label,
  inputProps,
}: UiTextFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-400 focus:border-teal-700 h-10 outline-none p-2",
        )}
      />
      {error && (
        <div className="text-rose-400 text-sm">{error}</div>
      )}
    </div>
  );
}
