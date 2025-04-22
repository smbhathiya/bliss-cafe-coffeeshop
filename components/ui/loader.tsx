import { IconCoffee } from "@tabler/icons-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Steam-like swirling arcs */}
        <div className="absolute w-full h-full border-2 border-primary/90 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-2 border-primary/80 border-r-transparent rounded-full animate-spin-slow reverse"></div>

        {/* Central coffee icon with background */}
        <div className="absolute inset-3 bg-white dark:bg-black rounded-full"></div>
        <IconCoffee className="relative text-primary text-3xl animate-pulse" />
      </div>
    </div>
  );
}
