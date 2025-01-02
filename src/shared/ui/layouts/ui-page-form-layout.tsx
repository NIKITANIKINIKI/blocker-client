import { ReactNode } from "react";

interface UiPageFormLayoutsProps {
  title: string;
  form: ReactNode;
  header: ReactNode;
}

export function UiPageFormLayouts({
  title,
  form,
  header,
}: UiPageFormLayoutsProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 ">
      {header}
      <main className="grow flex flex-col pt-24 ">
        <div className=" border border-slate-200 rounded-xl px-14 py-10 w-full max-w-[400px] bg-white self-center">
          <h1 className="text-2xl mb-5">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
}
