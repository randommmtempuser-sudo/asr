import { useState } from 'react';

// --- ШАГ 1: Обновите массив, указав пути к вашим файлам логотипов ---
const PartnersSection = () => {
  const partners = [
    // Важно: Замените эти пути на реальные пути к вашим файлам
    {  logo: "/src/assets/logos/instagram_1.png" },
    {  logo: "/src/assets/logos/instagram_2.png" },
    {  logo: "/src/assets/logos/instagram_3.png" },
    {  logo: "/src/assets/logos/instagram_4.png" },
    {  logo: "/src/assets/logos/instagram_5.png" },
    {  logo: "/src/assets/logos/instagram_6.png" },
    {  logo: "/src/assets/logos/instagram_7.png" },
    {  logo: "/src/assets/logos/instagram_8.png" },
    {  logo: "/src/assets/logos/instagram_9.png" },
    {  logo: "/src/assets/logos/instagram_10.png" },
    {  logo: "/src/assets/logos/instagram_11.png" },
    {  logo: "/src/assets/logos/instagram_12.png" },
    {  logo: "/src/assets/logos/instagram_13.png" },
    {  logo: "/src/assets/logos/instagram_14.png" },
    {  logo: "/src/assets/logos/instagram_15.png" },
    {  logo: "/src/assets/logos/instagram_16.png" },
    {  logo: "/src/assets/logos/instagram_17.png" },
 
  ];

  // Дублируем массив для бесшовной прокрутки
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши партнёры
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы работаем с ведущими финансовыми институтами
          </p>
        </div>

        {/* Конвейер */}
        <div className="relative overflow-hidden group"> {/* Добавлен 'group' для управления анимацией при наведении */}
          {/* Градиенты по бокам */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none"></div>

          {/* Бесконечная прокрутка */}
          <div className="flex animate-scroll-partners group-hover:pause-animation"> {/* При наведении на родителя, анимация остановится */}
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6" // Убраны hover-эффекты отсюда, чтобы не мешать
              >
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow backdrop-blur-sm border border-border/50 flex flex-col items-center justify-center w-40 h-40 transition-transform duration-300 hover:scale-110">
                  
                  {/* --- ШАГ 2: Замените div на img --- */}
                  <img 
                    src={partner.logo} 
                    className="h-16 w-auto object-contain mb-4" // Стили для логотипа
                  />
                  
                  <h3 className="text-sm font-semibold text-foreground text-center">
                  
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ШАГ 3: Обновляем CSS для остановки анимации при наведении --- */}
      <style>{`
        @keyframes scroll-partners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-partners {
          animation: scroll-partners 40s linear infinite;
          display: flex;
          width: max-content;
        }

        .group:hover .animate-scroll-partners {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;