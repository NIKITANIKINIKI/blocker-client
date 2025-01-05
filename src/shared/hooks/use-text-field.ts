import { ChangeEvent, InputHTMLAttributes, useId, useState } from "react";

export function useTextField(inputProps?: InputHTMLAttributes<HTMLInputElement> ) {
  const id = useId();
  const [value, setValue] = useState<string>("");

  const handleClear = () => {
    setValue("");
    if (inputProps?.onChange) {
      inputProps.onChange({
        target: { value: "" },
      } as ChangeEvent<HTMLInputElement>);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    inputProps?.onChange?.(event);
  };

  return {
    id,
    value,
    handleChange,
    handleClear,
  };
}
