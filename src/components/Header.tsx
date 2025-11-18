import logo from "@/assets/logo_1.png";
// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Принимаем новый пропс: `shouldAppearOnScroll`
const Header = ({ shouldAppearOnScroll = false }) => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false); // Новое состояние для отслеживания скролла
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Если header не должен появляться по скроллу (например, на внутренних страницах),
    // мы просто убедимся, что он всегда виден, установив isScrolledPastHero в true.
    if (!shouldAppearOnScroll) {
      setIsScrolledPastHero(true);
      return; // Выходим, так как слушатель скролла не нужен
    }

    const handleScroll = () => {
      // Это пороговое значение должно соответствовать высоте вашей HeroSection или
      // быть достаточно большим, чтобы header не появлялся слишком рано.
      // Я ставлю 400px как пример. Настройте это значение.
      setIsScrolledPastHero(window.scrollY > 400); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldAppearOnScroll]); // Перезапускаем эффект, если меняется shouldAppearOnScroll

  const knowledgeItems = [
    { name: "Лизинг", path: "/knowledge/leasing" },
    { name: "Словарь", path: "/knowledge/dictionary" },
    { name: "Аудио/Видео", path: "/knowledge/media" },
    { name: "Презентации", path: "/knowledge/presentations" },
    { name: "Тренинги", path: "/knowledge/trainings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Комбинируем логику видимости:
  // Если shouldAppearOnScroll = false, header всегда виден.
  // Если shouldAppearOnScroll = true, header виден только после скролла.
  const isHeaderVisible = shouldAppearOnScroll ? isScrolledPastHero : true;

  // Используем `isHeaderVisible` для трансформации и `isScrolledPastHero` для фона
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform 
        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} 
        ${isScrolledPastHero // Используем isScrolledPastHero для изменения фона
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
              <img src={logo} alt="Logo"></img>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              О нас
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Центр знаний</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-md">
                {knowledgeItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className="cursor-pointer hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/careers"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/careers") ? "text-primary" : "text-foreground"
              }`}
            >
              Вакансии
            </Link>

            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-foreground"
              }`}
            >
              Наши услуги
            </Link>

            <Link
              to="/calculator"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/calculator") ? "text-primary" : "text-foreground"
              }`}
            >
              Калькулятор
            </Link>

            <Button
              asChild
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/#contact">Оставить заявку</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 space-y-4 animate-fade-in bg-card/95 backdrop-blur-md rounded-lg px-4 shadow-soft">
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              О нас
            </Link>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Центр знаний</p>
              {knowledgeItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 pl-4 text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Вакансии
            </Link>

            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Наши услуги
            </Link>

            <Link
              to="/calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Калькулятор
            </Link>

            <Button
              asChild
              className="w-full bg-gradient-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/#contact">Оставить заявку</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;