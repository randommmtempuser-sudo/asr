import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  // Добавим больше вакансий для наглядности сетки
  const vacancies = [
    {
      title: "Менеджер по работе с клиентами",
      location: "Москва",
      type: "Полная занятость",
      description: "Ищем активного специалиста для работы с клиентами и развития продаж.",
      requirements: ["Опыт в продажах от 1 года", "Коммуникабельность"],
      salary: "от 80 000 ₽",
    },
    {
      title: "Финансовый аналитик",
      location: "Москва",
      type: "Полная занятость",
      description: "Требуется специалист для анализа финансовых показателей и подготовки отчётности.",
      requirements: ["Высшее экономическое образование", "Опыт от 2 лет"],
      salary: "от 100 000 ₽",
    },
    {
      title: "Юрист",
      location: "Москва",
      type: "Полная занятость",
      description: "Требуется юрист для сопровождения лизинговых сделок и работы с договорами.",
      requirements: ["Высшее юридическое образование", "Опыт в финансовой сфере"],
      salary: "от 120 000 ₽",
    },
    {
      title: "IT-специалист",
      location: "Удаленно",
      type: "Проектная работа",
      description: "Ищем специалиста для поддержки и развития внутренней IT-инфраструктуры.",
      requirements: ["Опыт администрирования сетей", "Знание Linux"],
      salary: "По договоренности",
    },
    {
      title: "Маркетолог",
      location: "Москва",
      type: "Полная занятость",
      description: "Разработка и реализация маркетинговых стратегий для продвижения услуг компании.",
      requirements: ["Опыт в digital-маркетинге", "Креативность"],
      salary: "от 90 000 ₽",
    },
  ];

  const benefits = [
    "Конкурентная заработная плата",
    "Официальное трудоустройство",
    "Бонусы и премии за результат",
    "Обучение и развитие",
    "Дружный коллектив",
    "Современный офис",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <Briefcase className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Карьера в нашей компании
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Присоединяйтесь к нашей команде профессионалов
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Почему стоит работать у нас
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== НАЧАЛО ИЗМЕНЕНИЙ: Секция Вакансий ===== */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Открытые вакансии
              </h2>
            </div>

            {/* Используем grid для создания сетки карточек */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {vacancies.map((vacancy, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 backdrop-blur-sm animate-fade-in-up flex flex-col h-full hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Основной контент карточки */}
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-md bg-gradient-primary/10 text-primary font-semibold text-sm">
                        {vacancy.salary}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {vacancy.title}
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{vacancy.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{vacancy.type}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {vacancy.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">
                        Требования:
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                            <span className="text-muted-foreground text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Контейнер для кнопки, который прижмет ее к низу */}
                  <div className="mt-auto pt-4">
                    <Button className="bg-gradient-primary group w-full justify-center">
                      Откликнуться
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ===== КОНЕЦ ИЗМЕНЕНИЙ ===== */}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Не нашли подходящую вакансию?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Отправьте нам своё резюме, и мы свяжемся с вами
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                Отправить резюме
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;