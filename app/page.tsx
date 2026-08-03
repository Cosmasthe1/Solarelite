import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Products from '@/components/Products';
import BatterySpotlight from '@/components/BatterySpotlight';
import InstallationProcess from '@/components/InstallationProcess';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <TrustBar />
      <Products />
      <BatterySpotlight />
      <InstallationProcess />
      <Benefits />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
