'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Cloud, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'web-dev',
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design'],
    },
    {
      id: 'mobile-dev',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: ['React Native', 'iOS/Android', 'Cross-platform'],
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      features: ['AWS/Azure', 'DevOps', 'Microservices'],
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data processing and analytics solutions',
      features: ['Big Data', 'Analytics', 'Machine Learning'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
