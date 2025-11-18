import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Video, Play } from "lucide-react";

const Media = () => {
  const videos = [
    {
      title: "Как работает лизинг",
      duration: "5:30",
      description: "Подробное объяснение механизма лизинга для начинающих",
    },
    {
      title: "Преимущества лизинга для бизнеса",
      duration: "7:15",
      description: "Разбираем налоговые и финансовые выгоды лизинга",
    },
    {
      title: "Оформление лизинга: пошаговая инструкция",
      duration: "6:45",
      description: "Все этапы от заявки до получения имущества",
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
              <Video className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Аудио и Видео материалы
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Обучающие видео о лизинге и финансовых услугах
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video bg-gradient-primary flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <Play className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {video.duration}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {video.description}
                    </p>
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

export default Media;
