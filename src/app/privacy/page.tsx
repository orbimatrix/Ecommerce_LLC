import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Shahan Khalid LLC ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with us as a potential or current brand partner or customer.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Contact Information:</strong> Name, company name, email address, phone number, business address.</li>
                <li><strong>Business Information:</strong> Tax ID (EIN), business licenses, wholesale applications, product information.</li>
                <li><strong>Communication Data:</strong> Records of correspondence when you contact us.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We also automatically collect certain information via cookies and similar tracking technologies:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, referring website.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Evaluate and establish wholesale partnerships.</li>
                <li>Process orders and manage our business relationship.</li>
                <li>Communicate with you about products, services, and updates.</li>
                <li>Improve our Site and business operations.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your data. We may share information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (e.g., web hosting, payment processing, logistics).</li>
                <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or sale of company assets.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choices</h2>
              <p className="text-gray-600 leading-relaxed">
                You can opt-out of marketing communications by using the "unsubscribe" link in our emails. You can also configure your browser to refuse cookies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement reasonable security measures to protect your information. However, no electronic transmission is 100% secure.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> legal@shahankhalidllc.com
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 5900 BALCONES DR STE 46931, AUSTIN, TX 78731
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
