import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/be484096-c4a0-4010-b0da-2945b1ee1f3a.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Leasing hero"
          className="w-full h-90% object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Лизинг нового поколения для вашего бизнеса
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Быстрое одобрение, прозрачные условия и индивидуальный подход. 
            Развивайте бизнес с ЛизингПро.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
        
          
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Link to="/calculator">Рассчитать лизинг</Link>
            </Button>
          </div>
    <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-4xl lg:text-5xl font-bold">24ч</p>
                <p className="text-sm text-white/80 mt-2">Решение по заявке</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-4xl lg:text-5xl font-bold">95%</p>
                <p className="text-sm text-white/80 mt-2">Одобренных сделок</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-4xl lg:text-5xl font-bold">500+</p>
                <p className="text-sm text-white/80 mt-2">Партнеров по РФ</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <p className="text-4xl lg:text-5xl font-bold">10 лет</p>
                <p className="text-sm text-white/80 mt-2">Опыта на рынке</p>
              </div>
            </div>
          </div>
          {/* Stats */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
