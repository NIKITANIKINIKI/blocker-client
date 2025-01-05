import { useBlockListQuery } from "@/entities/block-list";
import { AddBlockItemForm, BlockList } from "@/features/block-list";
import { ToggleBlockButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { UiHeader } from "@/shared/ui";
import { Profile } from "@/widgets/profile";

export function HomePage() {
  const { data } = useBlockListQuery({});

  return (
    <div className="flex flex-col gap-4">
      <UiHeader rightContent={<Profile />} logoContent="Blocker logo" />
      <main className="flex flex-col gap-4 mx-3">
        <section className="flex justify-between">
          <h1 className="text-2xl">Block List</h1>
          <ToggleBlockButton />
        </section>
        <section>
          <AddBlockItemForm />
        </section>
          <BlockList/>
        {/* {data?.items.length} */}
      </main>
    </div>
  );
}
