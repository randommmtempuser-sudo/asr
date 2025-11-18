import { Target, Shield, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      number: "01",
      icon: Target,
      title: "Наша миссия",
      description:
        "Предоставлять лизинговые услуги высшего качества, которые удовлетворяют финансовым потребностям наших клиентов с помощью инновационных идей, твердой приверженности и высокого уровня обслуживания клиентов.",
      color: "primary",
      delay: "delay-0",
    },
    {
      number: "02",
      icon: Shield,
      title: "Наши ценности",
      description:
        "Честность, прозрачность и ответственность - основа наших отношений с клиентами и партнерами.",
      color: "accent",
      delay: "delay-150",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Наше видение",
      description:
        "Быть ведущей и предпочтительной лизинговой компанией в Республике Таджикистан.",
      color: "primary",
      delay: "delay-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши ценности
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Принципы, которыми мы руководствуемся каждый день
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] border border-border/50 ${
                  isVisible
                    ? `animate-fade-in opacity-100 translate-y-0 ${value.delay}`
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Decorative number in background */}
                <div
                  className={`absolute top-4 right-6 text-8xl font-bold opacity-5 select-none ${
                    value.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {value.number}
                </div>

                {/* Icon container */}
                <div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    value.color === "primary"
                      ? "bg-primary/10"
                      : "bg-accent/10"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`absolute inset-0 rounded-full ${
                      value.color === "primary"
                        ? "bg-primary/20"
                        : "bg-accent/20"
                    } blur-xl group-hover:blur-2xl transition-all duration-300`}
                  />
                  <Icon
                    className={`relative z-10 ${
                      value.color === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                    size={32}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {value.description}
                </p>

                {/* Vertical divider (only visible on desktop between cards) */}
                {index < values.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-px h-32 bg-border -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
