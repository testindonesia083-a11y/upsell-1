import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Heart } from "lucide-react";
import testimonialImage1 from "@assets/stock_images/happy_smiling_woman__f40eff12.jpg";
import testimonialImage2 from "@assets/stock_images/happy_smiling_woman__4e41a017.jpg";
import testimonialImage3 from "@assets/stock_images/happy_smiling_woman__310c74e7.jpg";

const testimonials = [
  {
    id: 1,
    text: "Me ajudou muito nas aulas do culto infantil!",
    name: "Ana Paula",
    image: testimonialImage1,
  },
  {
    id: 2,
    text: "Minhas crianças pedem todos os dias para fazer!",
    name: "Carlos Silva",
    image: testimonialImage2,
  },
  {
    id: 3,
    text: "Material de qualidade, muito didático e divertido!",
    name: "Maria Santos",
    image: testimonialImage3,
  },
];

export default function SocialProofSection() {
  return (
    <div style={{ backgroundColor: "#0F7865" }} className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
            Quem já comprou está amando
          </h2>
          <Heart className="h-7 w-7 fill-[#FF9E40] text-[#FF9E40]" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} data-testid={`card-testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar data-testid={`avatar-testimonial-${testimonial.id}`}>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>
                <div className="flex gap-1 mb-3" data-testid={`stars-testimonial-${testimonial.id}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" data-testid={`star-${i}`} />
                  ))}
                </div>
                <p className="text-foreground italic font-secondary">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
