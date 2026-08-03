import { DollarSign, TrendingUp, Leaf, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Save on Electricity Bills',
      description: 'Reduce energy costs by 70-100% with solar and battery systems',
    },
    {
      icon: TrendingUp,
      title: 'Increase Home Value',
      description: 'Add 3-4% to your home value and attract eco-conscious buyers',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Impact',
      description: 'Generate 25+ tons of CO2 offset over system lifetime',
    },
    {
      icon: Shield,
      title: 'Reliable Backup Power',
      description: 'Stay powered during outages with 24/7 battery backup and monitoring app',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SolarElite?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Transform your energy independence with measurable benefits
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bottom Accent */}
                <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-6 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
