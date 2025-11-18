import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import agriculturalImg from "@/assets/agricultural.jpg";
import textileImg from "@/assets/textile.jpg";
import medicalImg from "@/assets/medical.jpg";
import constructionImg from "@/assets/construction.jpg";
import productionImg from "@/assets/production.jpg";
import commercialVehiclesImg from "@/assets/commercial-vehicles.jpg";
import polygraphyImg from "@/assets/polygraphy.jpg";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Сельскохозяйственная техника",
    description:
      "Минимизируйте первоначальные вложения и сохраните оборотный капитал. Лизинг сельхозтехники позволяет модернизировать парк оборудования без крупных затрат, а налоговые льготы ускоряют окупаемость инвестиций.",
    image: agriculturalImg,
  },
  {
    id: 2,
    title: "Текстильное оборудование",
    description:
      "Обновляйте производственные линии без отвлечения средств из оборота. Лизинг текстильного оборудования обеспечивает доступ к современным технологиям, повышая конкурентоспособность вашего предприятия на рынке.",
    image: textileImg,
  },
  {
    id: 3,
    title: "Медицинское оборудование",
    description:
      "Оснащайте клиники и медцентры передовым оборудованием с гибкими условиями. Лизинг позволяет распределить финансовую нагрузку и получить налоговые преференции, ускоряя развитие медицинского бизнеса.",
    image: medicalImg,
  },
  {
    id: 4,
    title: "Строительная техника",
    description:
      "Расширяйте парк техники для реализации крупных проектов. Лизинг строительного оборудования освобождает капитал для других направлений, а ускоренная амортизация снижает налоговую нагрузку компании.",
    image: constructionImg,
  },
  {
    id: 5,
    title: "Производственное оборудование",
    description:
      "Модернизируйте производство и внедряйте инновации без крупных инвестиций. Лизинг промышленного оборудования предоставляет гибкий график платежей и возможность обновления парка по завершении контракта.",
    image: productionImg,
  },
  {
    id: 6,
    title: "Коммерческие автомобили",
    description:
      "Формируйте корпоративный автопарк с экономией до 30% по сравнению с прямой покупкой. Лизинг коммерческого транспорта включает гибкие условия, НДС к вычету и комплексное страхование.",
    image: commercialVehiclesImg,
  },
  {
    id: 7,
    title: "Полиграфическое оборудование",
    description:
      "Оснащайте типографии современным оборудованием с минимальными авансовыми платежами. Лизинг полиграфической техники дает возможность быстро масштабировать бизнес и повышать качество печатной продукции.",
    image: polygraphyImg,
  },
];

const AboutSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const autoplayRef = useRef<number | null>(null);

  // Calculate slides per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides needed for infinite loop
  const maxIndex = services.length - slidesPerView;

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered, maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideWidth = 100 / slidesPerView;

  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вы хотите купить новый автомобиль в лизинг на выгодных условиях?
          </p>
        </div>

        {/* Swiper Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides Wrapper */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div
                    className="bg-card rounded-lg overflow-hidden group cursor-pointer"
                    style={{
                      background: "var(--gradient-card)",
                      boxShadow: "var(--shadow-card)",
                      transition: "var(--transition-smooth)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "var(--shadow-card)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-background">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
            style={{
              boxShadow: "var(--shadow-card)",
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
            style={{
              boxShadow: "var(--shadow-card)",
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              style={{
                width: currentIndex === index ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                background:
                  currentIndex === index
                    ? "var(--gradient-primary)"
                    : "hsl(var(--muted))",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSwiper;
