// **** Library Imports ****
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import CreateCareerForm from "./components/CreateCareerForm";

// **** Local Imports ****

const AddCareer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="border-b h-14 flex items-center gap-2 px-2">
        <Button
          variant="outline"
          className="rounded-full p-0 w-8 h-8"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-semibold">Add New Career</h1>
      </div>

      <div className="h-[calc(100%-56px)] px-2 py-4">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Create a new career!</p>
        </div>

        <div className="mt-4">
          <CreateCareerForm />
        </div>
      </div>
    </div>
  );
};

export default AddCareer;
