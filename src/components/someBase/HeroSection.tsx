import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedContent from '@/forstyle/AnimatedContent';
import logo from '@/assets/logo_1.png';

const HeroSection = () => {
  // 1. ИЗМЕНЕНИЕ: Устанавливаем начальное состояние в `true`, чтобы текст был виден сразу.
  const [isExpanded, setIsExpanded] = useState(true);
  const fullTextRef = useRef<HTMLDivElement>(null);

  // 2. УДАЛЕНИЕ: Функция toggleDetails больше не нужна.
  // const toggleDetails = () => { ... };

  return (
    <section className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка - Контент */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Финансовые решения для роста вашего бизнеса
            </h1>
            <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Крупнейшая лизинговая компания Таджикистана. С 2013 года мы поддерживаем 
              малый и средний бизнес, предоставляя альтернативные источники финансирования 
              для приобретения техники и оборудования.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
                <Link to="/#contact">
                  Оставить заявку <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* 3. УДАЛЕНИЕ: Кнопка "Узнать больше" удалена, так как текст уже отображается. */}
            </div>
          </div>

          {/* Правая колонка с логотипом (без изменений) */}
          <AnimatedContent distance={50} delay={0.2} threshold={0.1}>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-glow">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-50 flex items-center justify-center p-12">
                <img
                  src={logo}
                  alt="Логотип компании"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Раскрывающаяся секция с подробной информацией */}
      <div className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-8">
          {/* 4. ИЗМЕНЕНИЕ: Классы теперь не зависят от состояния, текст всегда видим */}
          <div
            ref={fullTextRef}
            className="overflow-hidden transition-all duration-500 max-h-[2000px] opacity-100 mt-8"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-sm font-semibold text-primary">
                      Основание компании
                    </p>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    ООО «АСР Лизинг» является одной из крупнейших и быстро развивающихся 
                    лизинговых компаний в Республике Таджикистан. Компания была основана{" "}
                    <span className="font-bold text-primary">23 января 2013 года</span>.
                  </p>
                </div>
                {/* ... остальной текст ... */}
              </div>
              <div className="space-y-6">
                 <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <p className="text-sm font-semibold text-accent">
                      Наша миссия
                    </p>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Основная цель деятельности — <span className="font-semibold">поддержка 
                    малых и средних предприятий (МСП)</span> и внесение вклада в экономический 
                    рост Республики Таджикистан.
                  </p>
                </div>
                 {/* ... остальной текст ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;