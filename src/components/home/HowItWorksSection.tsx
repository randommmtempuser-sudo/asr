import { FileText, Calculator, CheckCircle, Car } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Заполните заявку",
      description: "Оставьте заявку на сайте или позвоните нам. Это займёт всего 5 минут",
      number: "01",
    },
    {
      icon: Calculator,
      title: "Рассчитаем условия",
      description: "Наш менеджер свяжется с вами и предложит оптимальные условия лизинга",
      number: "02",
    },
    {
      icon: CheckCircle,
      title: "Одобрение заявки",
      description: "Получите решение в течение 24 часов и подпишите договор",
      number: "03",
    },
    {
      icon: Car,
      title: "Получите имущество",
      description: "Начните пользоваться техникой или транспортом сразу после оформления",
      number: "04",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс оформления лизинга за 4 шага
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
