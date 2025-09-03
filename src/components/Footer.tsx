import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Shahan Khalid LLC Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Building bridges between premier brands and the global marketplace through professional wholesale distribution.
            </p>
            <div className="text-gray-600">
              <p className="mb-2">
                <strong>Address:</strong><br />
                5900 BALCONES DR STE 46931<br />
                AUSTIN, TX 78731
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                href="/#services" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link 
                href="/privacy" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Partnership Info
              </a>
            </div>
          </div>
        </div>
       
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Shahan Khalid LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
