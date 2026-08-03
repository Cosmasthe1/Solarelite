'use client';

import Image from 'next/image';
import { ArrowRight, Battery, Zap, Plug2, TrendingUp } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'High-Efficiency Solar Panels',
      category: 'Monocrystalline',
      specs: '22.5% Efficiency, 400W',
      image: '/solar-panels.png',
      highlight: false,
    },
    {
      id: 2,
      name: 'Solar Battery Storage',
      category: 'Home Batteries',
      specs: '13.5 kWh Capacity, 24/7 Backup',
      image: '/battery-storage.png',
      highlight: true,
      badge: 'Energy Independence',
    },
    {
      id: 3,
      name: 'Hybrid Inverters',
      category: 'Power Management',
      specs: '8kW Rating, Smart Monitoring',
      image: '/solar-panels.png',
      highlight: false,
    },
    {
      id: 4,
      name: 'EV Charger Integration',
      category: 'Smart Charging',
      specs: 'Level 2 Charger, 7.7kW',
      image: '/battery-storage.png',
      highlight: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Premium Product Lineup
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Complete solar and energy storage solutions for maximum efficiency
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                product.highlight ? 'md:col-span-1 ring-2 ring-yellow-500' : ''
              }`}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-zinc-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.highlight && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 bg-white dark:bg-zinc-900">
                <p className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  {product.specs.split(',').map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span>{spec.trim()}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-semibold transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
