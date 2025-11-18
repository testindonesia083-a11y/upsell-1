import { Gift, Sparkles } from "lucide-react";

export default function ThankYouSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <Gift className="h-12 w-12 text-primary" data-testid="icon-gift" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Parabéns pela sua compra!
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-lg md:text-xl font-semibold text-primary">
            Seu Kit está a caminho
          </h2>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
