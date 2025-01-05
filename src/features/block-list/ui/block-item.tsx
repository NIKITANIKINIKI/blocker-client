import { AddBlockItemDtoType } from "@/shared/api/generated";
import { DeleteIcon } from "@/shared/ui/icons";
import { useBlockItem } from "../model/use-block-item";

type BlockItemProps = {
  data: string;
  type: AddBlockItemDtoType;
  id: number;
};

export function BlockItem({ data, type, id }: BlockItemProps) {
  const { handleDelete } = useBlockItem(id);

  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-100/50 border border-slate px-10 py-6 mb-2 mr-[5px]">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-400">{type}</div>
      </div>
      <button className="text-rose-500" onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}
