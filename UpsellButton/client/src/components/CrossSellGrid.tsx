import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import unoImage from "@assets/generated_images/UNO_Biblical_Card_Game_6f38f87c.png";
import devocionalImage from "@assets/generated_images/365_Days_Devotional_Book_615b9ad1.png";

const crossSellProducts = [
  {
    id: 1,
    title: "UNO Bíblico",
    price: "R$ 14,90",
    description: "Jogo no estilo Uno, com cartas cristãs que ensinam virtudes, versículos e valores.",
    image: unoImage,
  },
  {
    id: 2,
    title: "365 Dias de Devocionais Infantis",
    price: "R$ 21,90",
    description: "Devocional infantil diário com versículo, reflexão e aplicação prática.",
    image: devocionalImage,
  },
  {
    id: 3,
    title: "Histórias Bíblicas Ilustradas",
    price: "R$ 17,90",
    description: "Coleção completa de histórias bíblicas com ilustrações coloridas para crianças.",
    image: superKitImage,
  },
];

import superKitImage from "@assets/generated_images/Super_Kit_Biblical_Activities_e99eb2ae.png";

export default function CrossSellGrid() {
  const handleAddToCart = (productTitle: string) => {
    console.log(`Adicionar ao carrinho: ${productTitle}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
        Aproveite também essas ofertas especiais e transforme sua experiência:
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {crossSellProducts.map((product) => (
          <Card key={product.id} className="hover-elevate" data-testid={`card-product-${product.id}`}>
            <CardHeader className="p-0">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-md"
                data-testid={`img-product-${product.id}`}
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{product.title}</CardTitle>
              <p className="text-xl font-bold text-primary mb-2">{product.price}</p>
              <CardDescription className="text-sm font-secondary">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleAddToCart(product.title)}
                data-testid={`button-add-${product.id}`}
              >
                Adicionar ao pedido
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
