import { Sun, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">SolarElite</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium solar energy solutions for a sustainable future.
            </p>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Inverters
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  EV Chargers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span>1-800-SOLAR-01</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span>info@solarelite.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-500 mt-1" />
                <span>Nationwide Service Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-zinc-700 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Facebook">
              <span className="text-2xl">f</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Twitter">
              <span className="text-2xl">𝕏</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="LinkedIn">
              <span className="text-2xl">in</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Instagram">
              <span className="text-2xl">📷</span>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 SolarElite. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
