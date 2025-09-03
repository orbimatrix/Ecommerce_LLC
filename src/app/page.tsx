import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProductCategories from '@/components/ProductCategories';
import BrandsPartnerships from '@/components/BrandsPartnerships';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <ProductCategories />
      <BrandsPartnerships />
      <FAQ />
      <Footer />
    </div>
  );
}