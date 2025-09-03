import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Bridges Between Premier Brands and the Global Marketplace
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional wholesale distribution with integrity, operational excellence, and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link 
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 relative group"
              >
                Partner With Us
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full transform rotate-12 group-hover:scale-110 transition-transform duration-200">
                  Trusted Partner
                </div>
              </Link>
              <p className="text-gray-600 text-sm mt-2 sm:mt-0">
                Professional wholesale distribution services
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Wholesale Distribution Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
