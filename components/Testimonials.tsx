'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'SolarElite completely transformed our home energy. We went from $300+ monthly bills to virtually zero with the solar and battery system. The installation team was professional and the monitoring app is fantastic.',
      image: '/solar-panels.png',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Best investment we made! The battery backup saved us during the blackouts last summer. Customer support is responsive and the system keeps delivering savings month after month.',
      image: '/battery-storage.png',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'Excellent service from start to finish. The team explained everything clearly and the installation was smooth. Our home feels future-proof with solar and battery storage now.',
      image: '/solar-panels.png',
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Denver, CO',
      rating: 5,
      text: 'Amazing experience with SolarElite. The free consultation was thorough, the design was perfect for our roof, and installation happened faster than expected. Highly recommend!',
      image: '/battery-storage.png',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real Stories from Real Customers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of homeowners who've already made the switch to clean energy
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 sm:p-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Testimonial Content */}
            <div className="flex-1 px-6 sm:px-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{current.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{current.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{current.location}</p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-yellow-500 w-8'
                    : 'bg-gray-300 dark:bg-zinc-600'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
