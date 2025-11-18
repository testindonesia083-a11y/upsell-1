import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";

export default function ProgressSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <AlertTriangle className="h-8 w-8 text-[#FF9E40] flex-shrink-0" />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Oferta Exclusiva – Apenas Agora!
        </h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8">
        Complete sua compra com um material imperdível que vai transformar ainda mais o aprendizado das crianças.
      </p>
      <div className="space-y-2">
        <Progress value={75} className="h-2" />
        <p className="text-sm text-muted-foreground font-secondary">
          Seu pedido está quase completo… Aproveite esta única oportunidade!
        </p>
      </div>
    </div>
  );
}
