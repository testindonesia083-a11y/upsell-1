import { Check, ShoppingCart, Shield, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import superKitImage from "@assets/generated_images/Super_Kit_Biblical_Activities_e99eb2ae.png";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cakto-upsell-accept': any;
      'cakto-upsell-reject': any;
      'cakto-upsell-buttons': any;
    }
  }
}

export default function MainUpsellSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Super Kit de Atividades Bíblicas – Aumente o Aprendizado das Crianças
            </h2>
            <p className="text-muted-foreground mb-6 font-secondary">
              O Super Kit de Atividades Bíblicas contém caça-palavras, ligue os pontos, desafios, desenhos e atividades que fixam cada parábola de forma prática e divertida. Ideal para casa, escola e igreja. Torne o aprendizado mais leve e envolvente!
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                "Atividades prontas para imprimir e usar",
                "Aumenta o interesse e a participação das crianças",
                "Fortalece o aprendizado das parábolas",
                "Perfeito para pais, professores e ministério infantil"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground line-through text-lg">De R$ 39,90</span>
                <span className="text-3xl md:text-4xl font-bold text-primary">R$ 19,90</span>
                <span className="text-sm text-muted-foreground">apenas aqui</span>
              </div>
            </div>

            <cakto-upsell-buttons>
              <cakto-upsell-accept
                bg-color="#0f7865"
                text-color="#ffffff"
                upsell-accept-url="https://pay.cakto.com.br/ipgbosc"
                offer-id="ipgbosc"
                app-base-url="https://app.cakto.com.br"
                offer-type="upsell"
                upsell-reject-url="members_area"
                data-testid="button-accept-upsell"
              >
                <div className="flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-semibold">SIM! Quero adicionar ao meu pedido agora</span>
                </div>
              </cakto-upsell-accept>
            </cakto-upsell-buttons>

            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Download imediato</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img 
              src={superKitImage} 
              alt="Super Kit de Atividades Bíblicas"
              className="w-full h-auto rounded-md"
              data-testid="img-super-kit"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
