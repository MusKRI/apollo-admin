// **** Library Imports ****
import { Link } from "react-router-dom";

// **** Local Imports ****
import { Button } from "@/components/ui/button/button";
import CareersTable from "./components/CareersTable/CareersTable";

const Careers = () => {
  return (
    <div className="w-full">
      <div className="border-b h-14 flex items-center px-2">
        <h1 className="text-xl font-semibold">Careers</h1>
      </div>

      <div className="h-[calc(100%-56px)] px-2 py-4">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Here's a list of your careers!
          </p>

          <Button asChild>
            <Link to="/careers/add-career">Add New Career</Link>
          </Button>
        </div>

        <div className="mt-4">
          <CareersTable />
        </div>
      </div>
    </div>
  );
};

export default Careers;
