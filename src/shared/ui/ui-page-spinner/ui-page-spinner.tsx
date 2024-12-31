import clsx from "clsx";
import { UiSpinner } from "../ui-spinner/ui-spinner";

export function UiPageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center",
        className,
      )}
    >
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-slate-400 opacity-50" />
      <UiSpinner className="text-teal-500 w-24 h-24 z-30" />
    </div>
  );
}
