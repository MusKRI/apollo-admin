// **** Library Imports ****
import { useMemo } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

// **** Local Imports ****

const CareersTable = () => {
  const convertedData = useMemo(() => {
    const result: {
      id: string;
      title: string;
      description: string;
    }[] = [
      {
        id: "1",
        title: "Academic librarian",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est.s",
      },
      {
        id: "2",
        title: "Accountant",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est.s",
      },
      {
        id: "3",
        title: "Accountant",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est.s",
      },
    ];

    return result;
  }, []);

  return (
    <div>
      <DataTable data={convertedData} columns={columns} />
    </div>
  );
};

export default CareersTable;
