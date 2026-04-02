import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Ashra",
  description: "Get in touch with Ashra for collaborations, inquiries, and custom design projects.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Have a project in mind? Let's discuss how we can collaborate to create something extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:ashrasiddique1@gmail.com" className="text-gray-600 hover:text-black transition">
                  ashrasiddique1@gmail.com
                </a>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+15551234567" className="text-gray-600 hover:text-black transition">
                  +91-7898357817
                </a>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  Bengaluru<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/ash_na221/" className="text-gray-600 hover:text-black transition">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/ashra-siddiqui-21431a2a8/" className="text-gray-600 hover:text-black transition">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-3">What types of projects do you take on?</h3>
              <p className="text-gray-600">
                I work on custom couture, ready-to-wear collections, sustainable fashion lines, and collaborative projects with brands and individuals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">What is the typical project timeline?</h3>
              <p className="text-gray-600">
                Timeline varies depending on the project scope. Custom pieces typically take 6-8 weeks, while collection development can span 3-6 months.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Do you offer custom bespoke services?</h3>
              <p className="text-gray-600">
                Yes! Custom bespoke designs are available for clients looking for made-to-measure pieces tailored to their specifications and vision.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">How do you approach sustainable design?</h3>
              <p className="text-gray-600">
                I prioritize eco-friendly materials, ethical production, minimal waste, and timeless designs that encourage longevity over fast fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
