import React from 'react';
import { Link } from 'react-router-dom'; // <-- Импорт Link для кнопки
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Heart, TrendingUp, ArrowRight } from "lucide-react"; // <-- Импорт ArrowRight
import GlareHover from '@/forstyle/GlareHover';
import '@/forstyle/GlareHover.css';
import AnimatedContent from '@/forstyle/AnimatedContent';
import TextType from '@/forstyle/TextType';
import PartnersSection from "@/components/home/PartnersSection";
import SpotlightCard from "@/forstyle/SpotlightCard";
import MagicBento from '@/forstyle/MagicBento';
import ValuesSection from '@/components/someBase/ValuesSection';
import AboutSwiper from '@/components/someBase/AboutSwiper';
import HeroSection from '@/components/someBase/HeroSection';
import { Button } from '@/components/ui/button'; // <-- Импорт Button

const About = () => {
  // --- НАЧАЛО: Ранее отсутствующие определения (оставлено для контекста) ---
  const values = [
    {
      icon: Target,
      title: "Наша миссия",
      description:
        "Предоставлять лизинговые услуги высшего качества, которые удовлетворяют финансовым потребностям наших клиентов с помощью инновационных идей, твердой приверженности и высокого уровня обслуживания клиентов.",
    },
    {
      icon: Heart,
      title: "Наши ценности",
      description:
        "Честность, прозрачность и ответственность - основа наших отношений с клиентами и партнерами.",
    },
    {
      icon: TrendingUp,
      title: "Наше видение",
      description:
        "Быть ведущей и предпочтительной лизинговой компанией в Республике Таджикистан.",
    },
  ];
  const galleryImages = [
    { src: '/src/assets/about-office.jpg', alt: 'Наш офис' },
    { src: 'https://via.placeholder.com/1200x800?text=Team+Work', alt: 'Командная работа' },
    { src: 'https://via.placeholder.com/1200x800?text=Client+Meeting', alt: 'Встреча с клиентом' },
    { src: 'https://via.placeholder.com/1200x800?text=Office+Interior', alt: 'Интерьер офиса' },
  ];
  const carouselItems = values.map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    icon: <item.icon className="carousel-icon-lucide" size={16} />,
  }));
  const achievements = [
    { value: "15+", label: "Лет на рынке" },
    { value: "5000+", label: "Клиентов" },
    { value: "98%", label: "Одобрение" },
    { value: "50+", label: "Партнёров" },
  ];
  // --- КОНЕЦ: Определения ---

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div>
          <HeroSection />
          <AboutSwiper />
        </div>
        
        <ValuesSection />

        {/* === НАЧАЛО: НОВЫЙ БЛОК С КАЛЬКУЛЯТОРОМ === */}
        
        {/* === КОНЕЦ: НОВЫЙ БЛОК С КАЛЬКУЛЯТОРОМ === */}

        <PartnersSection />

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedContent distance={30} delay={0} threshold={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Совет директоров
                </h2>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Самир Тагиев", position: "Председатель Правления" },
                { name: "Музаффарджон Низамидинов", position: "Член Правления" },
                { name: "Урмат Акматов", position: "Член Правления" },
              ].map((member, index) => (
                <AnimatedContent key={index} distance={30} delay={0.1 * index} threshold={0.1}>
                  <div
                    className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 text-center backdrop-blur-sm border border-border/50"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;