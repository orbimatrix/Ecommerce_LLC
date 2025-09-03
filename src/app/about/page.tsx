import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './about.css';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
            <Navigation />

      {/* Hero Section */}
      <section className="about-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                         <h1 className="text-4xl md:text-6xl font-bold mb-6">
               Building Bridges Between Premier Brands and the Global Marketplace
             </h1>
             <p className="text-xl md:text-2xl text-blue-100">
               Learn more about our mission, values, and commitment to wholesale distribution excellence
             </p>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Shahan Khalid LLC</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
              <div className="prose prose-lg max-w-none text-gray-700">
                                 <p className="text-xl leading-relaxed mb-6">
                   Welcome to Shahan Khalid LLC. My name is Shahan Khalid, and I am the founder and driving force behind this company. I started this venture with a simple, powerful belief: that the best products should be accessible to everyone, everywhere.
                 </p>
                 <p className="text-lg leading-relaxed">
                   After meticulously establishing our business foundation and securing all necessary legal and operational certifications, we are now poised to become a trusted leader in wholesale distribution.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Mission Section */}
      <section className="py-20 about-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Foundation</h3>
                                 <p className="text-gray-600 mb-4">
                   Shahan Khalid LLC is a dynamic and forward-thinking wholesale distributor built on a foundation of integrity, operational excellence, and strategic growth.
                 </p>
                 <p className="text-gray-600">
                   Our mission is to create exceptional value for our brand partners by providing a streamlined, reliable, and scalable channel to amplify their reach and maximize their sales potential on marketplaces like Amazon.
                 </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
                                 <p className="text-gray-600 mb-4">
                   We achieve this by leveraging deep market expertise, sophisticated data analytics, and a meticulous approach to inventory and supply chain management.
                 </p>
                 <p className="text-gray-600">
                   We don't just move products; we build brands and foster their success in the competitive e-commerce landscape.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach is built on three key pillars that drive mutual growth and long-term success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow about-card">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Wholesale Distribution</h3>
               <p className="text-gray-600">
                 We are not brokers or liquidators. We are professional wholesalers who invest in inventory, manage logistics, and execute data-driven sales strategies. Our focus is on the long-term health and profitability of the products we represent.
               </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow about-card">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Genuine Partnerships</h3>
               <p className="text-gray-600">
                 We view our relationships with brands not as transactions, but as true partnerships. We believe in transparent communication, collaborative planning, and protecting your brand's integrity above all else. You can trust us to be a faithful steward of your brand identity and pricing policies.
               </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow about-card">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Cultivating Long-Term Brand Relationships</h3>
               <p className="text-gray-600">
                 Our goal is to be your #1 wholesale partner for years to come. We are committed to growing together, adapting to market changes, and consistently delivering on our promises. We measure our success by your growth and satisfaction.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 about-cta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                         <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
             <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
               We are actively seeking to partner with innovative and quality-focused brands. If you are looking for a distributor who is professional, legitimate, and passionately committed to driving mutual growth, we would be honored to discuss a potential partnership.
             </p>
             <p className="text-lg mb-8 text-blue-100">
               Contact us today to explore how we can build a successful future together.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                               <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                   Get In Touch
                 </Link>
              <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

            <Footer />
    </div>
  );
}
