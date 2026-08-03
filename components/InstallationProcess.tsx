import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function InstallationProcess() {
  const steps = [
    {
      step: 1,
      title: 'Free Consultation & Site Survey',
      description: 'Our experts assess your property, energy needs, and system sizing',
      icon: '📋',
    },
    {
      step: 2,
      title: 'Custom System Design',
      description: 'Tailored solar and battery configuration for optimal performance',
      icon: '🎨',
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Expert team installs panels, inverters, and battery storage safely',
      icon: '🔧',
    },
    {
      step: 4,
      title: 'Monitoring & Support',
      description: 'Lifetime monitoring app and dedicated customer support',
      icon: '📱',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Simple Installation Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From consultation to monitoring, we handle every step of your solar journey
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-yellow-400"></div>
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/installation-process.png"
            alt="Professional solar installation team"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
