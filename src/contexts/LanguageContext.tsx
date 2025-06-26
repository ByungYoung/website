'use client';

import { createContext, useContext, useMemo, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services', 
  'nav.contact': 'Contact',
  'hero.title': 'Liquid bank',
  'hero.subtitle': 'We democratize banking and Cryptocurrency',
  'hero.cta': 'Get Started',
  'hero.learn': 'Learn More',
  'about.title': 'About Us',
  'about.description': 'Our best tech team provides innovative solutions with the latest technology',
  'services.title': 'Services',
  'contact.title': 'Contact Us'
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { readonly children: ReactNode }) {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] ?? key;
  };

  const value = useMemo(() => ({ t }), []);

  return (
    <LanguageContext.Provider value={value}>
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
