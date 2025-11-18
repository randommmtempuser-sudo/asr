import React, { useState, useRef, useEffect } from 'react';

// Type Definitions
interface Equipment {
  id: string;
  name: string;
  description: string;
  price: string;
  leaseTerm: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  equipment: Equipment[];
}

// Equipment Data
const categoriesData: Category[] = [
  {
    id: 'agricultural',
    name: 'Сельскохозяйственная техника',
    icon: '',
    equipment: [
      {
        id: 'tractor-1',
        name: 'Тракторы',
        description: 'Современные тракторы для эффективной обработки земли. Получите технику без первоначального взноса.',
        price: 'От 150,000 TJS',
        leaseTerm: '12-60 месяцев',
        image: 'items/item_7.png'
      },
      {
        id: 'combine-1',
        name: 'Комбайны',
        description: 'Высокопроизводительные комбайны для уборки урожая. Гибкие условия лизинга под ваш бизнес.',
        price: 'От 300,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'items/item_7.png'
      },
      {
        id: 'seeder-1',
        name: 'Сеялки и культиваторы',
        description: 'Точное оборудование для посева и обработки почвы. Налоговые льготы при лизинге.',
        price: 'От 50,000 TJS',
        leaseTerm: '12-48 месяцев',
        image: 'items/item_7.png'
      },
      {
        id: 'sprayer-1',
        name: 'Опрыскиватели',
        description: 'Профессиональные опрыскиватели для защиты растений. Быстрое оформление за 3 дня.',
        price: 'От 80,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'items/item_7.png'
      },
      {
        id: 'trailer-1',
        name: 'Прицепное оборудование',
        description: 'Широкий выбор прицепного оборудования для любых задач. Минимальный пакет документов.',
        price: 'От 30,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'items/item_7.png'
      }
    ]
  },
  {
    id: 'textile',
    name: 'Текстильное оборудование',
    icon: '🧵',
    equipment: [
      {
        id: 'sewing-1',
        name: 'Швейные машины',
        description: 'Промышленные швейные машины для производства. Лизинг с возможностью выкупа.',
        price: 'От 15,000 TJS',
        leaseTerm: '12-48 месяцев',
        image: 'items/item_6.png'
      },
      {
        id: 'weaving-1',
        name: 'Ткацкие станки',
        description: 'Современные ткацкие станки для текстильного производства. Гибкий график платежей.',
        price: 'От 100,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'items/item_6.png'
      },
      {
        id: 'knitting-1',
        name: 'Вязальные машины',
        description: 'Автоматизированные вязальные машины. Без скрытых комиссий и переплат.',
        price: 'От 60,000 TJS',
        leaseTerm: '12-48 месяцев',
        image: 'items/item_6.png'
      },
      {
        id: 'cutting-1',
        name: 'Раскройное оборудование',
        description: 'Точное раскройное оборудование для оптимизации производства. Консультация бесплатно.',
        price: 'От 40,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'items/item_6.png'
      },
      {
        id: 'overlock-1',
        name: 'Оверлоки промышленные',
        description: 'Профессиональные оверлоки для швейного производства. Одобрение за 24 часа.',
        price: 'От 12,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'items/item_6.png'
      }
    ]
  },
  {
    id: 'medical',
    name: 'Медицинское оборудование',
    icon: '🏥',
    equipment: [
      {
        id: 'ultrasound-1',
        name: 'УЗИ аппараты',
        description: 'Современные УЗИ аппараты для диагностики. Лизинг с сервисным обслуживанием.',
        price: 'От 200,000 TJS',
        leaseTerm: '24-60 месяцев',
         image: 'items/item_1.png'
      },
      {
        id: 'xray-1',
        name: 'Рентген оборудование',
        description: 'Цифровое рентген оборудование последнего поколения. Без первоначального взноса.',
        price: 'От 350,000 TJS',
        leaseTerm: '36-60 месяцев',
         image: 'items/item_1.png'
      },
      {
        id: 'laboratory-1',
        name: 'Лабораторное оборудование',
        description: 'Полный спектр лабораторного оборудования. Индивидуальные условия лизинга.',
        price: 'От 80,000 TJS',
        leaseTerm: '12-48 месяцев',
        image: 'items/item_1.png'
      },
      {
        id: 'dental-1',
        name: 'Стоматологические установки',
        description: 'Комплексное оснащение стоматологических кабинетов. Быстрое оформление.',
        price: 'От 120,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'items/item_1.png'
      },
      {
        id: 'operating-1',
        name: 'Операционные столы',
        description: 'Многофункциональные операционные столы. Налоговые преимущества при лизинге.',
        price: 'От 90,000 TJS',
        leaseTerm: '24-48 месяцев',
         image: 'items/item_1.png'
      }
    ]
  },
  {
    id: 'construction',
    name: 'Строительная техника',
    icon: '🏗️',
    equipment: [
      {
        id: 'excavator-1',
        name: 'Экскаваторы',
        description: 'Мощные экскаваторы для строительных работ. Лизинг с правом выкупа.',
        price: 'От 250,000 TJS',
        leaseTerm: '24-60 месяцев',
         image: 'items/item_5.png'
      },
      {
        id: 'bulldozer-1',
        name: 'Бульдозеры',
        description: 'Надежные бульдозеры для земляных работ. Гибкие условия платежей.',
        price: 'От 280,000 TJS',
        leaseTerm: '24-60 месяцев',
      image: 'items/item_5.png'
      },
      {
        id: 'crane-1',
        name: 'Автокраны',
        description: 'Автокраны различной грузоподъемности. Без скрытых комиссий.',
        price: 'От 400,000 TJS',
        leaseTerm: '36-60 месяцев',
        image: 'items/item_5.png'
      },
      {
        id: 'loader-1',
        name: 'Погрузчики',
        description: 'Фронтальные и телескопические погрузчики. Одобрение за 1 день.',
        price: 'От 150,000 TJS',
        leaseTerm: '12-48 месяцев',
        image: '/items/item_5.png'
      },
      {
        id: 'mixer-1',
        name: 'Бетономешалки',
        description: 'Профессиональные бетономешалки для строительства. Минимум документов.',
        price: 'От 45,000 TJS',
        leaseTerm: '12-36 месяцев',
       image: '/items/item_5.png'
      }
    ]
  },
  {
    id: 'production',
    name: 'Производственное оборудование',
    icon: '⚙️',
    equipment: [
      {
        id: 'cnc-1',
        name: 'Станки ЧПУ',
        description: 'Высокоточные станки с ЧПУ для современного производства. Лизинг с обучением персонала.',
        price: 'От 180,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'items/item_4.png'
      },
      {
        id: 'lathe-1',
        name: 'Токарные станки',
        description: 'Универсальные токарные станки для металлообработки. Без первоначального взноса.',
        price: 'От 70,000 TJS',
        leaseTerm: '12-48 месяцев',
       image: 'items/item_4.png'
      },
      {
        id: 'milling-1',
        name: 'Фрезерные станки',
        description: 'Современные фрезерные станки для точной обработки. Гибкий график платежей.',
        price: 'От 95,000 TJS',
        leaseTerm: '12-48 месяцев',
         image: 'items/item_4.png'
      },
      {
        id: 'press-1',
        name: 'Прессы гидравлические',
        description: 'Мощные гидравлические прессы для штамповки. Налоговые льготы.',
        price: 'От 120,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'src/assets/items/item_4.png'
      },
      {
        id: 'welding-1',
        name: 'Сварочное оборудование',
        description: 'Профессиональное сварочное оборудование. Быстрое оформление за 2 дня.',
        price: 'От 25,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'items/item_4.png'
      }
    ]
  },
  {
    id: 'commercial',
    name: 'Коммерческие автомобили',
    icon: '🚛',
    equipment: [
      {
        id: 'truck-1',
        name: 'Грузовые автомобили',
        description: 'Надежные грузовые автомобили для логистики. Лизинг с правом выкупа.',
        price: 'От 200,000 TJS',
        leaseTerm: '24-60 месяцев',
      image: 'items/item_3.png'
      },
      {
        id: 'van-1',
        name: 'Фургоны',
        description: 'Коммерческие фургоны для доставки товаров. Без скрытых платежей.',
        price: 'От 120,000 TJS',
        leaseTerm: '12-48 месяцев',
         image: 'items/item_3.png'
      },
      {
        id: 'refrigerator-1',
        name: 'Рефрижераторы',
        description: 'Рефрижераторы для перевозки скоропортящихся грузов. Гибкие условия.',
        price: 'От 250,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'items/item_3.png'
      },
      {
        id: 'bus-1',
        name: 'Автобусы',
        description: 'Пассажирские автобусы для коммерческих перевозок. Индивидуальный подход.',
        price: 'От 300,000 TJS',
        leaseTerm: '36-60 месяцев',
        image: 'src/assets/items/item_3.png'
      },
      {
        id: 'special-1',
        name: 'Спецтехника',
        description: 'Специализированная техника для различных задач. Одобрение за 24 часа.',
        price: 'От 180,000 TJS',
        leaseTerm: '24-48 месяцев',
 image: 'src/assets/items/item_3.png'
      }
    ]
  },
  {
    id: 'printing',
    name: 'Полиграфическое оборудование',
    icon: '🖨️',
    equipment: [
      {
        id: 'printing-1',
        name: 'Печатные машины',
        description: 'Профессиональные печатные машины для типографий. Лизинг с сервисом.',
        price: 'От 150,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: '/items/item_2.png'
      },
      {
        id: 'risograph-1',
        name: 'Ризографы',
        description: 'Высокоскоростные ризографы для массовой печати. Без первоначального взноса.',
        price: 'От 80,000 TJS',
        leaseTerm: '12-48 месяцев',
     image: 'src/assets/items/item_2.png'
      },
      {
        id: 'plotter-1',
        name: 'Плоттеры',
        description: 'Широкоформатные плоттеры для печати. Гибкий график платежей.',
        price: 'От 60,000 TJS',
        leaseTerm: '12-36 месяцев',
      image: 'src/assets/items/item_2.png'
      },
      {
        id: 'laminator-1',
        name: 'Ламинаторы',
        description: 'Промышленные ламинаторы для защиты печатной продукции. Быстрое оформление.',
        price: 'От 35,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'src/assets/items/item_2.png'
      },
      {
        id: 'cutter-1',
        name: 'Резаки промышленные',
        description: 'Точные резаки для полиграфического производства. Налоговые преимущества.',
        price: 'От 45,000 TJS',
        leaseTerm: '12-48 месяцев',
       image: 'src/assets/items/item_2.png'
      }
    ]
  }
];


const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('agricultural');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const navRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll Progress Handler
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(progress);
      setShowBackToTop(scrolled > 500);
      
      // Sticky navigation
      if (navRef.current) {
        const navTop = navRef.current.offsetTop;
        setIsNavSticky(scrolled > navTop - 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for card animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Attach observer to cards
  useEffect(() => {
    const cards = document.querySelectorAll('.equipment-card');
    cards.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });
  }, [activeCategory, searchQuery]);

  // Smooth scroll to category
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = categoryRefs.current[categoryId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter equipment by search query
  const filteredCategories = categoriesData.map(category => ({
    ...category,
    equipment: category.equipment.filter(eq =>
      eq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.equipment.length > 0);

  // Keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent, categoryId: string, index: number) => {
    if (e.key === 'ArrowRight' && index < categoriesData.length - 1) {
      scrollToCategory(categoriesData[index + 1].id);
    } else if (e.key === 'ArrowLeft' && index > 0) {
      scrollToCategory(categoriesData[index - 1].id);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToCategory(categoryId);
    }
  };

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00A74F] to-[#008890] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
            <a href="/" className="text-[#879097] hover:text-[#00A74F] transition-colors">
              Главная
            </a>
            <span className="text-[#879097]">/</span>
            <span className="text-[#373435] font-medium">Услуги</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-gradient-to-br from-[#00A74F] to-[#008890] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto"> 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Наши услуги
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              Лизинговые решения для любого бизнеса
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              АСР Лизинг предлагает широкий спектр оборудования и техники в лизинг. 
              Гибкие условия, быстрое оформление и индивидуальный подход к каждому клиенту.
            </p>
          </div>
        </div>
      </header>

{/* Search Bar */}
                <div className="bg-white shadow-md py-6 relative z-10" style={{ marginTop: '-100px' }}>
                  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Поиск оборудования..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-6 py-4 pl-12 rounded-lg border-2 border-gray-200 focus:border-[#00A74F] focus:outline-none transition-colors text-[#373435]"
                          aria-label="Поиск оборудования"
                        />
                        <svg 
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#879097]"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
      {/* Sticky Category Navigation */}
      <div 
        ref={navRef}
        className={`bg-white shadow-lg transition-all duration-300 z-40 ${
          isNavSticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-2 scrollbar-hide">
            {categoriesData.map((category, index) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                onKeyDown={(e) => handleKeyDown(e, category.id, index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A74F] focus:ring-offset-2 ${
                  activeCategory === category.id
                    ? 'bg-[#00A74F] text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-[#373435] hover:bg-gray-200'
                }`}
                aria-label={`Перейти к категории ${category.name}`}
                aria-current={activeCategory === category.id ? 'true' : 'false'}
                tabIndex={0}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-medium text-sm md:text-base">{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.equipment.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Benefits */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#373435] mb-4">
                Преимущества лизинга
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#00A74F]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00A74F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#373435]">Без первоначального взноса</h4>
                    <p className="text-sm text-[#879097]">Получите оборудование без крупных вложений</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#008890]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008890]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#373435]">Гибкий график платежей</h4>
                    <p className="text-sm text-[#879097]">Индивидуальные условия под ваш бизнес</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#00A74F]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00A74F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#373435]">Налоговые льготы</h4>
                    <p className="text-sm text-[#879097]">Оптимизация налогообложения</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#008890]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008890]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#373435]">Быстрое оформление</h4>
                    <p className="text-sm text-[#879097]">Одобрение заявки за 24 часа</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-[#00A74F] to-[#008890] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Получить консультацию
              </button>
            </div>
          </aside>

          {/* Equipment Categories */}
          <div className="flex-1">
            {filteredCategories.length === 0 ? (
              // Empty State
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <svg className="w-24 h-24 mx-auto text-[#879097] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-[#373435] mb-2">Ничего не найдено</h3>
                <p className="text-[#879097]">Попробуйте изменить поисковый запрос</p>
              </div>
            ) : (
              filteredCategories.map((category, categoryIndex) => (
                <section
                  key={category.id}
                  ref={(el) => (categoryRefs.current[category.id] = el)}
                  className="mb-16"
                  id={category.id}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-8">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-[#373435]">{category.name}</h2>
                      <p className="text-[#879097]">{category.equipment.length} видов оборудования</p>
                    </div>
                  </div>

                  {/* Equipment Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.equipment.map((equipment, index) => {
                      const cardId = `${category.id}-${equipment.id}`;
                      const isVisible = visibleCards.has(cardId);
                      
                      return (
                        <div
                          key={equipment.id}
                          id={cardId}
                          className={`equipment-card bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-103 ${
                            isVisible 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-8'
                          }`}
                          style={{
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          {/* Equipment Image */}
                        <div className="relative h-48 overflow-hidden">
  <img 
    src={equipment.image} 
    alt={equipment.name} 
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute top-4 right-4 bg-[#00A74F] text-white px-3 py-1 rounded-full text-xs font-semibold">
    Лизинг
  </div>
</div>

                          {/* Equipment Info */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-[#373435] mb-2 group-hover:text-[#00A74F] transition-colors">
                              {equipment.name}
                            </h3>
                            <p className="text-[#879097] text-sm mb-4 line-clamp-2">
                              {equipment.description}
                            </p>

                            {/* Key Parameters */}
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center space-x-2 text-sm">
                                <svg className="w-5 h-5 text-[#00A74F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-semibold text-[#373435]">{equipment.price}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <svg className="w-5 h-5 text-[#008890]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-[#879097]">Срок: {equipment.leaseTerm}</span>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-gradient-to-r from-[#00A74F] to-[#008890] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A74F] focus:ring-offset-2">
                              Получить консультацию
                            </button>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#00A74F]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
                            <p className="text-white text-sm">
                              Нажмите для получения подробной консультации по лизингу
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Block between categories */}
                  {categoryIndex < filteredCategories.length - 1 && categoryIndex % 2 === 1 && (
                    <div className="mt-12 bg-gradient-to-r from-[#00A74F] to-[#008890] rounded-xl p-8 text-white text-center">
                      <h3 className="text-2xl font-bold mb-3">Не нашли нужное оборудование?</h3>
                      <p className="mb-6 text-white/90">
                        Оставьте заявку, и наши специалисты подберут оптимальное решение для вашего бизнеса
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                          type="text"
                          placeholder="Ваше имя"
                          className="px-4 py-3 rounded-lg text-[#373435] focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                          type="tel"
                          placeholder="Телефон"
                          className="px-4 py-3 rounded-lg text-[#373435] focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-[#00A74F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                          Отправить заявку
                        </button>
                      </div>
                    </div>
                  )}
                </section>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-[#00A74F] to-[#008890] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A74F] focus:ring-offset-2 z-50 ${
          showBackToTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Вернуться наверх"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Services;
