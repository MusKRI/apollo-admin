// **** Library Imports ****
import { ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// **** Local Imports ****
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip/tooltip";
import { useSidebar } from "./hooks/useSidebar";
import { sidebarItems } from "./sidebarItems";

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();

  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  const selectedItem = pathnameArray[pathnameArray.length - 1];

  console.log("Hellloo");

  const width = useMemo(() => {
    return isOpen ? 60 : 250;
  }, [isOpen]) as number;

  const MotionChevronRight = motion(ChevronRight);

  return (
    <motion.div
      className={cn("border-r relative group")}
      layout="position"
      style={{ width }}
    >
      <div
        className="absolute z-10 border top-[46px] -right-3 bg-background rounded-full p-[2px] cursor-pointer hover:bg-accent transition-colors duration-150 opacity-0 group-hover:opacity-100"
        onClick={toggle}
      >
        <MotionChevronRight
          className="w-4 h-4"
          animate={{
            rotate: isOpen ? 360 : 180,
          }}
        />
      </div>
      <div
        className={cn("border-b h-14 flex items-center px-4", isOpen ? "" : "")}
      >
        <h1 className={cn("transition-all", isOpen ? "text-lg" : "text-2xl")}>
          {isOpen ? "AP" : "Admin Panel"}
        </h1>
      </div>

      <div
        className={cn(
          "h-[calc(100%-56px)] flex flex-col gap-3 relative",
          isOpen ? "p-1 py-4" : "p-4"
        )}
      >
        {sidebarItems &&
          sidebarItems.map((sidebarItem) => {
            const { icon: Icon, id, label, slug } = sidebarItem;

            return (
              <Link
                to={slug}
                key={id}
                className="flex flex-row items-center relative group"
              >
                <div
                  className={cn(
                    "flex-1 py-2 rounded-full flex flex-row items-center transition-all relative",
                    selectedItem === id
                      ? "text-card"
                      : "text-accent-foreground hover:bg-accent"
                  )}
                >
                  <AnimatePresence mode="sync">
                    {selectedItem === id && (
                      <motion.div
                        layoutId="bg"
                        layout="position"
                        className="absolute inset-0 rounded-full bg-primary"
                      />
                    )}
                  </AnimatePresence>
                  <span className="z-10 flex flex-row gap-2 items-center justify-center px-4">
                    {isOpen ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="w-4 h-4" />
                          </TooltipTrigger>
                          <TooltipContent className="ml-4 border border-border">
                            <p>{label}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                    {!isOpen && <span className="text-sm">{label}</span>}
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
