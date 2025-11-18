import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Presentations = () => {
  const presentations = [
    {
      title: "Введение в лизинг",
      pages: 24,
      description: "Базовые понятия и принципы работы лизинга",
      size: "2.5 MB",
    },
    {
      title: "Налоговые преимущества",
      pages: 18,
      description: "Подробный разбор налоговых льгот при лизинге",
      size: "1.8 MB",
    },
    {
      title: "Лизинг для малого бизнеса",
      pages: 32,
      description: "Особенности лизинга для МСП и ИП",
      size: "3.2 MB",
    },
    {
      title: "Автолизинг",
      pages: 28,
      description: "Всё о лизинге автомобилей для бизнеса",
      size: "2.9 MB",
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
              <FileText className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Презентации
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Информационные материалы для изучения и скачивания
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {presentations.map((presentation, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {presentation.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{presentation.pages} страниц</span>
                        <span>•</span>
                        <span>{presentation.size}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {presentation.description}
                  </p>

                  <Button className="w-full bg-gradient-primary group">
                    <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    Скачать презентацию
                  </Button>
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

export default Presentations;
