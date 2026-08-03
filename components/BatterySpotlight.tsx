import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function BatterySpotlight() {
  const benefits = [
    'Store excess energy from peak production',
    'Power your home during outages',
    'Maximize self-consumption rates',
    'Reduce grid dependence',
  ];

  const comparison = [
    { feature: 'Solar Panels Only', solar: '✓', solarBattery: '✓' },
    { feature: 'Store Excess Energy', solar: '✗', solarBattery: '✓' },
    { feature: 'Backup Power 24/7', solar: '✗', solarBattery: '✓' },
    { feature: 'Energy Independence', solar: 'Partial', solarBattery: '✓' },
    { feature: 'Maximize Efficiency', solar: '50-60%', solarBattery: '80-90%' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Unlock True Energy Independence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pairing solar panels with advanced battery storage is the ultimate solution for maximum energy independence and reliability.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/battery-storage.png"
              alt="Battery storage system integrated with solar"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Why Add Battery Storage?
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-8 overflow-x-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Solar Only vs. Solar + Battery
          </h3>

          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-zinc-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">
                  Solar Only
                </th>
                <th className="text-center py-3 px-4 font-semibold bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-300 rounded-t-lg">
                  Solar + Battery
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700/50 transition-colors"
                >
                  <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">
                    {row.solar}
                  </td>
                  <td className="py-4 px-4 text-center bg-yellow-50 dark:bg-yellow-950/20 text-gray-900 dark:text-white font-semibold">
                    {row.solarBattery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
