import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Book } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Dictionary = () => {
  const terms = [
    {
      term: "Лизинг",
      definition:
        "Вид финансовых услуг, при котором лизинговая компания приобретает имущество и передаёт его в долгосрочное пользование лизингополучателю за определённую плату.",
    },
    {
      term: "Лизингодатель",
      definition:
        "Юридическое лицо (лизинговая компания), которое приобретает имущество и передаёт его в лизинг.",
    },
    {
      term: "Лизингополучатель",
      definition:
        "Юридическое или физическое лицо, которое получает имущество в лизинг и обязуется вносить лизинговые платежи.",
    },
    {
      term: "Предмет лизинга",
      definition:
        "Имущество, которое передаётся в лизинг: транспорт, оборудование, недвижимость и т.д.",
    },
    {
      term: "Аванс (первоначальный взнос)",
      definition:
        "Сумма, которую лизингополучатель вносит при заключении договора. Обычно составляет от 0% до 50% стоимости имущества.",
    },
    {
      term: "Выкупная стоимость",
      definition:
        "Сумма, которую необходимо заплатить для перехода права собственности на предмет лизинга в конце срока договора.",
    },
    {
      term: "График платежей",
      definition:
        "Согласованный между сторонами порядок внесения лизинговых платежей (размер, периодичность).",
    },
    {
      term: "Удорожание",
      definition:
        "Разница между полной суммой лизинговых платежей и стоимостью имущества. Включает проценты, вознаграждение лизинговой компании и другие расходы.",
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
              <Book className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Словарь терминов
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Основные понятия и определения из мира лизинга
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <Accordion type="single" collapsible className="space-y-4">
                {terms.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border/50 shadow-soft overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <span className="text-lg font-semibold text-foreground text-left">
                        {item.term}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.definition}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dictionary;
