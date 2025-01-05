import { useAddBlockItem } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {
  const { register, handleSubmit, watch } = useForm<{
    data: string;
    type: AddBlockItemDtoType;
  }>();

  const { mutate, status } = useAddBlockItem();

  const type=watch('type')

  return {
    handleSubmit: handleSubmit((data) => mutate(data)),
    isLoading: status==='pending',
    register,
    type
  };
}
