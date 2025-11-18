import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string; // Добавил пропс className для большей гибкости
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
  className = '' // Инициализируем className
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const scrollTriggerInstanceRef = useRef<ScrollTrigger | null>(null);

  // Эта функция будет запускать саму анимацию
  const executeAnimation = () => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === 'horizontal' ? 'x' : 'y';

    // Убиваем любую предыдущую анимацию для этого компонента, если она есть
    if (tweenRef.current) {
      tweenRef.current.kill();
      tweenRef.current = null;
    }

    // Убедимся, что элемент видим, прежде чем начинать анимацию
    gsap.set(el, { visibility: 'visible' });

    tweenRef.current = gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete: onComplete // Используем переданный колбэк onComplete
    });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // --- Очистка любых существующих экземпляров GSAP/ScrollTrigger ---
    // Это критически важно для предотвращения конфликтов при перерендеринге или быстрых обновлениях.
    if (tweenRef.current) {
      tweenRef.current.kill();
      tweenRef.current = null;
    }
    if (scrollTriggerInstanceRef.current) {
      scrollTriggerInstanceRef.current.kill();
      scrollTriggerInstanceRef.current = null;
    }
    gsap.killTweensOf(el); // Убедимся, что ВСЕ твины, нацеленные на этот элемент, убиты

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    // --- Установка начального состояния элемента (скрыт и смещен) ---
    // Элемент будет скрыт до вызова executeAnimation (через ScrollTrigger или напрямую)
    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'hidden' // Скрываем элемент, пока анимация не начнется
    });

    // --- Создание ScrollTrigger ---
    scrollTriggerInstanceRef.current = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      toggleActions: 'play none none none', // Анимация запускается при входе, не реверсируется, не паузится, не возобновляется
      once: true, // Срабатывает только один раз
      onEnter: executeAnimation, // Запускаем нашу анимацию, когда триггер входит в область видимости
    });

    // --- Функция очистки для useEffect ---
    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
      if (scrollTriggerInstanceRef.current) {
        scrollTriggerInstanceRef.current.kill(); // Убиваем ScrollTrigger
        scrollTriggerInstanceRef.current = null;
      }
      gsap.killTweensOf(el); // Убедимся, что все твины для элемента убиты при размонтировании
    };
  }, [
    children, // Включено, чтобы useEffect перезапускался при изменении дочерних элементов
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete
  ]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default AnimatedContent;