import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator as CalcIcon, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [cost, setCost] = useState(2000000);
  const [initialPayment, setInitialPayment] = useState(20);
  const [term, setTerm] = useState(36);
  const [leasingType, setLeasingType] = useState("auto");

  const calculateLeasing = () => {
    const rate = 0.10; // 10% годовых
    const initialAmount = (cost * initialPayment) / 100;
    const leasingAmount = cost - initialAmount;
    const monthlyRate = rate / 12;
    const monthlyPayment =
      (leasingAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    const totalAmount = monthlyPayment * term + initialAmount;
    const overpayment = totalAmount - cost;

    return {
      initialAmount,
      monthlyPayment,
      totalAmount,
      overpayment,
    };
  };

  const results = calculateLeasing();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("ru-RU").format(Math.round(num));
  };

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
              <CalcIcon className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Калькулятор лизинга
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Рассчитайте ежемесячный платёж и стоимость лизинга онлайн
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Input Section */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 backdrop-blur-sm animate-fade-in-up">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Параметры расчёта
                </h2>

                <div className="space-y-8">
                  <div>
                    <Label className="text-foreground mb-3 block">Тип лизинга</Label>
                    <Select value={leasingType} onValueChange={setLeasingType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Автомобили</SelectItem>
                        <SelectItem value="equipment">Оборудование</SelectItem>
                        <SelectItem value="real-estate">Недвижимость</SelectItem>
                        <SelectItem value="special">Спецтехника</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <Label className="text-foreground">Стоимость имущества</Label>
                      <span className="text-primary font-semibold">
                        {formatNumber(cost)} 
                      </span>
                    </div>
                    <Slider
                      value={[cost]}
                      onValueChange={(value) => setCost(value[0])}
                      min={500000}
                      max={10000000}
                      step={100000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>500 тыс. TJS</span>
                      <span>10 млн TJS</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <Label className="text-foreground">
                        Первоначальный взнос
                      </Label>
                      <span className="text-primary font-semibold">
                        {initialPayment}%
                      </span>
                    </div>
                    <Slider
                      value={[initialPayment]}
                      onValueChange={(value) => setInitialPayment(value[0])}
                      min={0}
                      max={50}
                      step={5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <Label className="text-foreground">Срок лизинга</Label>
                      <span className="text-primary font-semibold">
                        {term} мес.
                      </span>
                    </div>
                    <Slider
                      value={[term]}
                      onValueChange={(value) => setTerm(value[0])}
                      min={12}
                      max={60}
                      step={6}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>12 мес.</span>
                      <span>60 мес.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow">
                  <div className="flex items-center space-x-3 mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      Результаты расчёта
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/80 mb-2">Ежемесячный платёж</p>
                      <p className="text-4xl font-bold text-white">
                        {formatNumber(results.monthlyPayment)} TJS
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/20 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-white/80">Первоначальный взнос</span>
                        <span className="text-white font-semibold">
                          {formatNumber(results.initialAmount)} TJS
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Общая сумма</span>
                        <span className="text-white font-semibold">
                          {formatNumber(results.totalAmount)} TJS
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Переплата</span>
                        <span className="text-white font-semibold">
                          {formatNumber(results.overpayment)} TJS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 backdrop-blur-sm">
                  <p className="text-muted-foreground mb-4">
                    * Расчёт является предварительным. Точные условия определяются
                    индивидуально после рассмотрения заявки.
                  </p>
                  <Button asChild size="lg" className="w-full bg-gradient-primary shadow-soft">
                    <Link to="/#contact">Оформить заявку</Link>
                  </Button>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 backdrop-blur-sm">
                  <h4 className="font-semibold text-foreground mb-3">
                    Преимущества лизинга
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground text-sm">
                        НДС принимается к вычету
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground text-sm">
                        Платежи относятся на расходы
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted-foreground text-sm">
                        Не нужно сразу платить полную стоимость
                      </span>
                    </li>
                  </ul>
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

export default Calculator;
