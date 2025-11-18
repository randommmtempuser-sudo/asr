import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, CheckCircle } from "lucide-react";

const Leasing = () => {
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
              <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Что такое лизинг
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Определение
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Лизинг - это долгосрочная аренда имущества с правом выкупа.
                  Лизинговая компания покупает необходимое вам имущество и передаёт
                  его в пользование за регулярные платежи. В конце срока договора
                  вы можете выкупить имущество по остаточной стоимости.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Преимущества лизинга
                </h2>
                <div className="space-y-4">
                  {[
                    "Не нужно сразу оплачивать полную стоимость имущества",
                    "Лизинговые платежи относятся на расходы компании",
                    "НДС принимается к вычету",
                    "Ускоренная амортизация",
                    "Имущество не отражается на балансе компании",
                    "Гибкие условия оплаты",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Виды лизинга
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Финансовый лизинг
                    </h3>
                    <p className="text-muted-foreground">
                      Долгосрочная аренда с обязательным выкупом в конце срока.
                      Срок договора приближается к сроку полезного использования
                      имущества.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Оперативный лизинг
                    </h3>
                    <p className="text-muted-foreground">
                      Краткосрочная аренда без обязательства выкупа. Подходит для
                      имущества, которое быстро устаревает или нужно временно.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Возвратный лизинг
                    </h3>
                    <p className="text-muted-foreground">
                      Компания продаёт своё имущество лизинговой компании и
                      получает его обратно в лизинг. Позволяет получить оборотные
                      средства.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leasing;
