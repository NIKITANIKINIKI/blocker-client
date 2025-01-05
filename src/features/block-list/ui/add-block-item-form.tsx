import { UiButton, UiSelectField, UiTextField } from "@/shared/ui";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { typeOptions } from "@/shared/constants/type-options";

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <UiSelectField
        selectProps={{ ...register("type") }}
        options={typeOptions}
        className="grow min-w-[100px]"
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === "KeyWord" ? "Enter Key Word" : "Enter Website",
          ...register("data", { required: "Email is required" }),
        }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Add
      </UiButton>
    </form>
  );
}
