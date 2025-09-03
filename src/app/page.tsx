import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProductCategories from '@/components/ProductCategories';
import BrandsPartnerships from '@/components/BrandsPartnerships';
import Certifications from '@/components/Certifications';
import WhyPartner from '@/components/WhyPartner';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <ProductCategories />
      <BrandsPartnerships />
      <Certifications />
      <WhyPartner />
      <Footer />
    </div>
  );
}