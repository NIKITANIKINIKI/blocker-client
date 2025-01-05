import { useRemoveBlockItem } from "@/entities/block-list";

export function useBlockItem(id: number) {
  const { mutate } = useRemoveBlockItem();

  const handleDelete = () => {
    mutate(id);
  };

  return { handleDelete };
}
