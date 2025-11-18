import React, { useState, useRef, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ========================================================================
// Структуры данных и основной компонент
// ========================================================================
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

interface SearchResult extends Equipment {
  categoryId: string;
  categoryName: string;
}

// Данные с добавленными иконками
const categoriesData: Category[] = [
    {
    id: 'agricultural',
    name: 'Сельскохозяйственная техника',
    icon: '🚜',
    equipment: [
      {
        id: 'tractor-1',
        name: 'Тракторы',
        description: 'Современные тракторы для эффективной обработки земли. Получите технику без первоначального взноса.',
        price: 'От 150,000 TJS',
        leaseTerm: '12-60 месяцев',
        image: 'https://via.placeholder.com/400x200/00A74F/FFFFFF?text=Tractor'
      },
      {
        id: 'combine-1',
        name: 'Комбайны',
        description: 'Высокопроизводительные комбайны для уборки урожая. Гибкие условия лизинга под ваш бизнес.',
        price: 'От 300,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'https://via.placeholder.com/400x200/008890/FFFFFF?text=Combine'
      },
      {
        id: 'seeder-1',
        name: 'Сеялки и культиваторы',
        description: 'Точное оборудование для посева и обработки почвы. Налоговые льготы при лизинге.',
        price: 'От 50,000 TJS',
        leaseTerm: '12-48 месяцев',
        image: 'https://via.placeholder.com/400x200/00A74F/FFFFFF?text=Seeder'
      },
      {
        id: 'sprayer-1',
        name: 'Опрыскиватели',
        description: 'Оборудование для точного внесения удобрений и защиты растений от вредителей.',
        price: 'От 80,000 TJS',
        leaseTerm: '12-36 месяцев',
        image: 'https://via.placeholder.com/400x200/008890/FFFFFF?text=Sprayer'
      },
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
        image: 'https://via.placeholder.com/400x200/008890/FFFFFF?text=Sewing'
      },
      {
        id: 'weaving-1',
        name: 'Ткацкие станки',
        description: 'Современные ткацкие станки для текстильного производства. Гибкий график платежей.',
        price: 'От 100,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'https://via.placeholder.com/400x200/00A74F/FFFFFF?text=Weaving'
      },
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
        image: 'https://via.placeholder.com/400x200/00A74F/FFFFFF?text=Ultrasound'
      },
      {
        id: 'xray-1',
        name: 'Рентген оборудование',
        description: 'Цифровое рентген оборудование последнего поколения. Без первоначального взноса.',
        price: 'От 350,000 TJS',
        leaseTerm: '36-60 месяцев',
        image: 'https://via.placeholder.com/400x200/008890/FFFFFF?text=X-Ray'
      },
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
        image: 'https://via.placeholder.com/400x200/00A74F/FFFFFF?text=Excavator'
      },
      {
        id: 'bulldozer-1',
        name: 'Бульдозеры',
        description: 'Надежные бульдозеры для земляных работ любой сложности. Выгодные условия лизинга.',
        price: 'От 400,000 TJS',
        leaseTerm: '24-72 месяцев',
        image: 'https://via.placeholder.com/400x200/008890/FFFFFF?text=Bulldozer'
      },
       {
        id: 'dump-truck-1',
        name: 'Самосвалы',
        description: 'Грузовые самосвалы для перевозки сыпучих материалов на стройплощадках.',
        price: 'От 320,000 TJS',
        leaseTerm: '24-60 месяцев',
        image: 'https://via.placeholder.com/400x200/00A74F/FFFFFF?text=Dump+Truck'
      },
    ]
  },
];


// ========================================================================
// Вспомогательный компонент для карточки товара
// ========================================================================
const EquipmentCard: React.FC<{ equipment: Equipment | SearchResult; isVisible: boolean; index: number; categoryName?: string }> = ({ equipment, isVisible, index, categoryName }) => (
    <div
    id={`${'categoryId' in equipment ? equipment.categoryId : ''}-${equipment.id}`}
    className={`bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="relative h-48 overflow-hidden">
      <img src={equipment.image} alt={equipment.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute top-4 right-4 bg-[#00A74F] text-white px-3 py-1 rounded-full text-xs font-semibold">
        Лизинг
      </div>
    </div>
    <div className="p-6">
      {categoryName && (
        <p className="text-sm font-semibold text-[#008890] mb-1">{categoryName}</p>
      )}
      <h3 className="text-xl font-bold text-[#373435] mb-2 group-hover:text-[#00A74F] transition-colors">
        {equipment.name}
      </h3>
      <p className="text-[#879097] text-sm mb-4 h-10 line-clamp-2">
        {equipment.description}
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <svg className="w-5 h-5 text-[#00A74F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="font-semibold text-[#373435]">{equipment.price}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <svg className="w-5 h-5 text-[#008890]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-[#879097]">Срок: {equipment.leaseTerm}</span>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-[#00A74F] to-[#008890] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00A74F] focus:ring-offset-2">
        Получить консультацию
      </button>
    </div>
  </div>
);


// ========================================================================
// Основной компонент Services
// ========================================================================
const Services: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categoriesData[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  const isSearching = searchQuery.trim() !== '';

  const displayedItems = useMemo(() => {
    if (isSearching) {
      return searchResults;
    }
    const activeCategory = categoriesData.find(cat => cat.id === activeCategoryId);
    return activeCategory ? activeCategory.equipment : [];
  }, [isSearching, searchResults, activeCategoryId]);

  useEffect(() => {
    setVisibleCards(new Set()); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );
    const timeoutId = setTimeout(() => {
      const cards = document.querySelectorAll('.card-observable');
      cards.forEach((card) => observer.observe(card));
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
    
  }, [displayedItems]);
  
  useEffect(() => {
    if (isSearching) {
      const results = categoriesData.flatMap(category =>
        category.equipment
          .filter(eq =>
            eq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            eq.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(eq => ({ ...eq, categoryId: category.id, categoryName: category.name }))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, isSearching]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    if (searchQuery) setSearchQuery('');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <header className="bg-gradient-to-br from-[#00A74F] to-[#008890] text-white py-32 md:py-40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Наши услуги</h1>
            <p className="text-xl md:text-2xl text-white/90">Лизинговые решения для любого бизнеса</p>
        </div>
      </header>
      
      {/* Убрали весь sticky-функционал */}
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
           {/* Поиск */}
           <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Глобальный поиск оборудования..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 rounded-lg border-2 border-gray-200 focus:border-[#00A74F] focus:outline-none transition-colors"
                />
                 <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
       

           {/* Чипсы категорий */}
           <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
              {isSearching && (
                <div className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#00A74F] to-[#008890]">
                  Результаты поиска ({searchResults.length})
                </div>
              )}
              {categoriesData.map(category => {
                const isActive = !isSearching && activeCategoryId === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-semibold border transition-all duration-300 whitespace-nowrap ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#00A74F] to-[#008890] text-white border-transparent shadow-md' 
                        : 'bg-white text-[#879097] border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name} ({category.equipment.length})</span>
                  </button>
                )
              })}
           </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displayedItems.map((equipment, index) => {
               const cardId = `${'categoryId' in equipment ? equipment.categoryId : activeCategoryId}-${equipment.id}`;
               return (
                  <div key={equipment.id} id={cardId} className="card-observable">
                      <EquipmentCard 
                          equipment={equipment} 
                          isVisible={visibleCards.has(cardId)} 
                          index={index}
                          categoryName={isSearching ? (equipment as SearchResult).categoryName : undefined}
                      />
                  </div>
               );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#373435] mb-2">Ничего не найдено</h3>
            <p className="text-[#879097]">Попробуйте изменить поисковый запрос или выбрать другую категорию.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Services;