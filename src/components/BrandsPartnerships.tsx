import Image from 'next/image';

export default function BrandsPartnerships() {
  const brandCategories = [
    {
      category: "Health & Beauty",
      description: "We work with trusted distributors and brand partners in personal care, cosmetics, and wellness products.",
      brands: [
        { name: "Beauty Essentials", logo: "https://picsum.photos/120/60?random=10" },
        { name: "Wellness Pro", logo: "https://picsum.photos/120/60?random=11" },
        { name: "Care Plus", logo: "https://picsum.photos/120/60?random=12" }
      ]
    },
    {
      category: "Household & Cleaning",
      description: "Partnering with leading manufacturers of cleaning products and home essentials.",
      brands: [
        { name: "Clean Home", logo: "https://picsum.photos/120/60?random=13" },
        { name: "Fresh Solutions", logo: "https://picsum.photos/120/60?random=14" },
        { name: "Home Care Pro", logo: "https://picsum.photos/120/60?random=15" }
      ]
    },
    {
      category: "Electronics & Tech",
      description: "Collaborating with innovative technology brands and electronic device manufacturers.",
      brands: [
        { name: "Tech Innovations", logo: "https://picsum.photos/120/60?random=16" },
        { name: "Digital Solutions", logo: "https://picsum.photos/120/60?random=17" },
        { name: "Smart Devices", logo: "https://picsum.photos/120/60?random=18" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Brand Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with established distributors and brand partners across multiple industries, ensuring quality products and reliable supply chains for our wholesale distribution network.
          </p>
        </div>

        <div className="space-y-16">
          {brandCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Brand Logos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.brands.map((brand, brandIndex) => (
                  <div 
                    key={brandIndex}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Brand Logo */}
                      <div className="relative w-32 h-16 mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Brand Name */}
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {brand.name}
                      </h4>
                      
                      {/* Partnership Status */}
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Trusted Partner
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our established relationships with trusted brands and distributors ensure quality, reliability, and competitive pricing for all our wholesale partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                All our brand partners meet strict quality standards and compliance requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">
                Reliable supply chains ensure timely delivery and consistent inventory availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
              <p className="text-gray-600">
                Volume partnerships enable us to offer competitive wholesale pricing to our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Network?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re a brand looking for distribution or a retailer seeking reliable wholesale partners, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Become a Partner
              </a>
              <a 
                href="/about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
