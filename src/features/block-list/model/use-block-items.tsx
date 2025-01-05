import { useBlockListQuery } from "@/entities/block-list";
import { BlockItemDto } from "@/shared/api/generated";
import { useDebaunce } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState<string>("");

  const { data, status } = useBlockListQuery({ q: useDebaunce(q, 400) });

  const items: BlockItemDto[] = Array.isArray(data?.items) ? data.items : [];

  const isLoading = status === "pending";
  const isEmptyList = !isLoading && items.length === 0;

  return { items, isLoading, isEmptyList, setQ, q };
}
