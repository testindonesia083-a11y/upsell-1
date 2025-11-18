import { AlertTriangle } from "lucide-react";

export default function UrgencyBanner() {
  return (
    <div style={{ backgroundColor: "#E30300" }} className="py-3 px-4 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="h-5 w-5 text-white flex-shrink-0" />
        <p className="text-white font-semibold text-sm md:text-base">
          Essa é uma oferta única e não volta mais depois dessa página
        </p>
      </div>
    </div>
  );
}
