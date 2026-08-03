'use client';

import { Button } from './ui/button';
import { Mail, MessageSquare } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-green-700 to-green-800 dark:from-green-900 dark:to-green-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready for Energy Independence?
        </h2>

        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Get your personalized solar + battery quote in under 60 seconds. Our experts will design the perfect system for your home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Get Free Quote
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </Button>
        </div>

        {/* Trust Line */}
        <p className="text-green-100 text-sm mt-8">
          ✓ No obligation • ✓ Free consultation • ✓ Expert advice
        </p>
      </div>
    </section>
  );
}
