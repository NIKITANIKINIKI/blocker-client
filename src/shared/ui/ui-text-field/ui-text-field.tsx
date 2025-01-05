import { useTextField } from "@/shared/hooks/use-text-field";
import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef } from "react";
import { ClearIcon } from "../icons";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
  clearIcon?: boolean;
};

export function UiTextField({
  className,
  error,
  label,
  inputProps,
  clearIcon = true,
}: UiTextFieldProps) {
  const { id, value, handleChange, handleClear } = useTextField(inputProps);

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...inputProps}
          id={id}
          value={value}
          onChange={handleChange}
          className={clsx(
            inputProps?.className,
            "rounded border-[2px] border-slate-400 focus:border-teal-500 h-10 outline-none p-2 w-full",
          )}
        />
        {clearIcon && value && (
          <button onClick={handleClear}>
            <ClearIcon className="text-rose-400 w-6 h-6 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2" />
          </button>
        )}
      </div>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
