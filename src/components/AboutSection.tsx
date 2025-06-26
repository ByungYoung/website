'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Shield, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast execution',
    },
    {
      icon: Users,
      title: 'Team',
      description: 'World-class experts',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
