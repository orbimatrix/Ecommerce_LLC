

import Image from 'next/image';

export default function ProductCategories() {
  const categories = [
    {
      name: "Health & Beauty",
      description: "Personal care, cosmetics, and wellness products",
      image: "/Health_Beauty.jpg"
    },
    {
      name: "Household Supplies",
      description: "Cleaning products, home essentials, and maintenance items",
      image: "/household.jpg"
    },
    {
      name: "Toys & Games",
      description: "Educational toys, entertainment, and recreational products",
      image: "/toys.jpg"
    },
    {
      name: "Grocery & Food",
      description: "Food products, beverages, and consumable goods",
      image: "/food.jpg"
    },
    {
      name: "Electronics & Tech",
      description: "Consumer electronics, accessories, and tech gadgets",
      image: "/electronics.jpg"
    },
    {
      name: "Sports & Outdoors",
      description: "Fitness equipment, outdoor gear, and sporting goods",
      image: "/sports.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Categories & Industry Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in wholesale distribution across multiple industries, helping brands reach their target markets through strategic partnerships and professional distribution channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Category Image */}
              <div className="h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Expand Your Brand&apos;s Reach?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re in Health & Beauty, Household Supplies, or any other category, we have the expertise and distribution network to help your products succeed in the marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Discuss Your Category
              </a>
              <a 
                href="/about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Learn About Our Process
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
