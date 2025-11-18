import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Trainings = () => {
  const trainings = [
    {
      title: "Основы лизинга для предпринимателей",
      date: "15 декабря 2024",
      duration: "2 часа",
      participants: "до 20 человек",
      description:
        "Вводный курс для предпринимателей, планирующих использовать лизинг. Разберём основные понятия, преимущества и процесс оформления.",
      topics: [
        "Что такое лизинг и как он работает",
        "Виды лизинга и их особенности",
        "Налоговые преимущества",
        "Практические кейсы",
      ],
    },
    {
      title: "Финансовый лизинг: углублённый курс",
      date: "22 декабря 2024",
      duration: "3 часа",
      participants: "до 15 человек",
      description:
        "Детальный разбор финансового лизинга для финансовых директоров и главных бухгалтеров компаний.",
      topics: [
        "Учёт лизинговых операций",
        "Оптимизация налогообложения",
        "Анализ эффективности лизинга",
        "Работа с документами",
      ],
    },
    {
      title: "Автолизинг для корпоративных клиентов",
      date: "12 января 2025",
      duration: "1.5 часа",
      participants: "до 25 человек",
      description:
        "Специализированный тренинг по лизингу автомобилей для компаний с автопарком.",
      topics: [
        "Подбор автомобилей для бизнеса",
        "Расчёт экономии при лизинге",
        "Управление автопарком",
        "Страхование и сервис",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Обучающие тренинги
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Профессиональное обучение по лизингу для вашей команды
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8 max-w-5xl mx-auto">
              {trainings.map((training, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {training.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {training.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          Программа тренинга:
                        </h4>
                        <ul className="space-y-2">
                          {training.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              <span className="text-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">Дата</p>
                            <p className="font-semibold text-foreground">
                              {training.date}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Длительность
                            </p>
                            <p className="font-semibold text-foreground">
                              {training.duration}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Участников
                            </p>
                            <p className="font-semibold text-foreground">
                              {training.participants}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-primary">
                        Записаться на тренинг
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Тренинги проводятся бесплатно для клиентов и партнёров
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trainings;
