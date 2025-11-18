import { ShoppingCart } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cakto-upsell-accept': any;
      'cakto-upsell-reject': any;
      'cakto-upsell-buttons': any;
    }
  }
}

export default function FinalCTASection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Última chance antes de finalizar o seu pedido
      </h2>

      <div className="space-y-4">
        <cakto-upsell-buttons>
          <cakto-upsell-accept
            bg-color="#0f7865"
            text-color="#ffffff"
            upsell-accept-url="https://pay.cakto.com.br/ipgbosc"
            offer-id="ipgbosc"
            app-base-url="https://app.cakto.com.br"
            offer-type="upsell"
            upsell-reject-url="members_area"
            data-testid="button-final-accept"
          >
            <div className="flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">SIM! Quero adicionar ao meu pedido agora</span>
            </div>
          </cakto-upsell-accept>

          <cakto-upsell-reject
            upsell-reject-url="members_area"
            data-testid="link-reject-upsell"
          >
            Não, obrigado. Quero finalizar minha compra sem adicionar este material.
          </cakto-upsell-reject>
        </cakto-upsell-buttons>
      </div>
    </div>
  );
}
