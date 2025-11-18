import { Award, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Опыт и надёжность",
      description: "15 лет успешной работы на рынке лизинговых услуг",
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Персональный менеджер и гибкие условия для каждого клиента",
    },
    {
      icon: TrendingUp,
      title: "Быстрое одобрение",
      description: "Решение по заявке в течение 24 часов",
    },
    {
      icon: Shield,
      title: "Прозрачность",
      description: "Никаких скрытых платежей и понятные условия",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы помогаем бизнесу расти, предоставляя выгодные лизинговые решения
            для приобретения техники, оборудования и транспорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in-up backdrop-blur-sm border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-primary shadow-soft">
            <Link to="/about">Узнать больше о нас</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
