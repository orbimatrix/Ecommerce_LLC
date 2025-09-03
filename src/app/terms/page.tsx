import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms carefully before using our website or services.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing the website of Shahan Khalid LLC ("we," "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this Site, including text, graphics, logos, and images, is our property or the property of our brand partners and is protected by copyright and other intellectual property laws. You may not use it without prior written permission.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Inquiries & Accounts</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Submission of a wholesale application does not guarantee that we will approve you for an account.</li>
                <li>We reserve the right to refuse business to anyone for any reason at any time.</li>
                <li>All wholesale accounts are subject to verification of business credentials and a signed Wholesale Agreement.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Purchases & Payment</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All product descriptions and pricing are subject to change without notice.</li>
                <li>We reserve the right to limit or cancel quantities purchased per person, per household, or per order.</li>
                <li>You agree to provide current, complete, and accurate purchase and account information.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You are prohibited from using the Site:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>For any unlawful purpose.</li>
                <li>To submit false or misleading information.</li>
                <li>To attempt to gain unauthorized access to any part of the Site.</li>
                <li>To interfere with the Site's security or functionality.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties; Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                This Site and all information on it are provided on an "as is" and "as available" basis without any warranties of any kind. We do not guarantee that the Site will be uninterrupted or error-free. In no event shall Shahan Khalid LLC be liable for any indirect or consequential damages arising from your use of this Site.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
