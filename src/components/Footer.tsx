import { Link } from "react-router-dom";
import logo from "@/assets/logo_1.png";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl"><img src={logo} alt="" /></span>
              </div>
              <span className="text-xl font-bold">ООО АСР Лизинг</span>
            </div>
            <p className="text-sm text-background/80">
              Профессиональные лизинговые решения для вашего бизнеса. 
              Надёжность, прозрачность, выгодные условия.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Наши услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Калькулятор
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Center */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Центр знаний</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/knowledge/leasing"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Лизинг
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge/dictionary"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Словарь
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge/media"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Аудио/Видео
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge/trainings"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Тренинги
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/80">
                    Республика Таджикистан г.Душанбе, ул. Бохтар 37/1, 6 этаж, 602
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  +992-227-17-17
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@leasingpro.ru"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  Info@asrleasing.tj
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/60">
            Предоставлять лизинговые услуги превосходного качества, которые удовлетворяют финансовые потребности наших клиентов с помощью инновационных идей.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
