'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.services': '서비스',
    'nav.contact': '연락처',
    'hero.title': '혁신적인 기술로 미래를 만듭니다',
    'hero.subtitle': '우리는 최첨단 기술과 창의적인 솔루션으로 세상을 변화시킵니다',
    'hero.cta': '시작하기',
    'hero.learn': '더 알아보기',
    'about.title': '우리에 대해',
    'about.description': '최고의 기술팀이 최신 기술로 혁신적인 솔루션을 제공합니다',
    'services.title': '서비스',
    'contact.title': '연락하기'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services', 
    'nav.contact': 'Contact',
    'hero.title': 'Building the Future with Innovative Technology',
    'hero.subtitle': 'We transform the world with cutting-edge technology and creative solutions',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    'about.title': 'About Us',
    'about.description': 'Our best tech team provides innovative solutions with the latest technology',
    'services.title': 'Services',
    'contact.title': 'Contact Us'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ko] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
