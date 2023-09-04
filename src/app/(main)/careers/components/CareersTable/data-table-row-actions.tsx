// **** Library Imports ****
import { Row } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";

// **** Local Imports ****
import { Button } from "@/components/ui/button/button";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <Button
        variant="destructive"
        size="icon"
        onClick={() => console.log(row.original)}
      >
        <Trash className="w-4 h-4" />
      </Button>
      <Button size="icon" onClick={() => console.log(row.original)}>
        <Pencil className="w-4 h-4" />
      </Button>
    </div>
  );
}
