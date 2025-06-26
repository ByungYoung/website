import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Tech Company - 혁신적인 기술 솔루션',
  description: 'Building the future with innovative technology and creative solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className={inter.className}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
      </body>
    </html>
  );
}
