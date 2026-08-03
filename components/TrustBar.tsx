import { Star, CheckCircle } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { label: 'Tier-1 Panels', icon: '⭐' },
    { label: 'NABCEP Certified', icon: '✓' },
    { label: '25-Year Warranty', icon: '🛡️' },
    { label: '0% Financing', icon: '💰' },
    { label: 'Backup Power Ready', icon: '🔋' },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-8 border-t border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Star Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              4.9/5 from 2,000+ Reviews
            </span>
          </div>

          {/* Trust Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
