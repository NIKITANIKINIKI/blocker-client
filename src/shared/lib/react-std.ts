import { useEffect, useState } from "react";

export function useDebaunce<T>(value: T, timeout = 0) {
  const [debancedValue, setDebancedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebancedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, value]);

  return debancedValue;
}
