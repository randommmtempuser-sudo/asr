import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Phone, Mail, MapPin } from "lucide-react";

// Схема валидации формы остается без изменений
const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email"),
  leasingType: z.string().min(1, "Выберите тип лизинга"),
});

type FormValues = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      leasingType: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация API-запроса
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    toast.success("Заявка отправлена!", {
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Основной контейнер с сеткой */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Левая колонка: Контакты */}
          <div className="lg:col-span-2 text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Предпочитаете другой способ связи? Выберите удобный для вас вариант. Мы всегда на связи.
            </p>

            <div className="space-y-4">
              {/* Контакт: Телефон */}
              <div className="bg-white/10 p-5 rounded-lg flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <a href="tel:+992123456789" className="text-white/90 hover:underline">+992 123 456 789</a>
                </div>
              </div>

              {/* Контакт: Email */}
              <div className="bg-white/10 p-5 rounded-lg flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@asrleasing.tj" className="text-white/90 hover:underline">info@asrleasing.tj</a>
                </div>
              </div>
              
              {/* Контакт: Адрес */}
              <div className="bg-white/10 p-5 rounded-lg flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-semibold">Офис</h3>
                  <p className="text-white/90">г. Душанбе, ул. Айни, 48</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма */}
          <div className="lg:col-span-3">
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-glow border border-white/20 animate-scale-in">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Оставьте заявку</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Ваше имя</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Иван Иванов"
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                          />
                        </FormControl>
                        <FormMessage className="text-white/90" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Телефон</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+992 XXX XXXXXX"
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                          />
                        </FormControl>
                        <FormMessage className="text-white/90" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                          />
                        </FormControl>
                        <FormMessage className="text-white/90" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="leasingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Тип лизинга</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/20 border-white/30 text-white">
                              <SelectValue placeholder="Выберите тип" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="auto">Автомобили</SelectItem>
                            <SelectItem value="equipment">Оборудование</SelectItem>
                            <SelectItem value="real-estate">Недвижимость</SelectItem>
                            <SelectItem value="special">Спецтехника</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-white/90" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-primary hover:bg-white/90 shadow-soft group"
                    size="lg"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;