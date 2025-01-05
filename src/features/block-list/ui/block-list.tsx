import { UiSpinner, UiTextField } from "@/shared/ui";
import { useBlockItems } from "../model/use-block-items";
import { ChangeEvent } from "react";
import { BlockItem } from "./block-item";

export function BlockList({ className }: { className?: string }) {
  const { items, isLoading, setQ, q, isEmptyList } = useBlockItems();

  return (
    <section className={className}>
      <UiTextField
        className="mb-2"
        inputProps={{
          placeholder: "Search...",
          value: q,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
        }}
      />
      {isLoading && <UiSpinner className="mx-auto text-teal-400 w-16 h-16" />}
      {isEmptyList && <span className="text-rose-400">List is empty</span>}
      <div className="h-[60vh] overflow-y-auto scrollbar scrollbar-thumb-teal-600">
        {items.map((item) => (
          <BlockItem {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
