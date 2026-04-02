import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Ashra Siddique",
  description: "Get in touch for pattern making, draping, and garment development collaborations.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Open to collaborations in pattern making, draping, and garment development. 
            Whether you're a brand, designer, or production team, let's create refined and well-crafted garments together.
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
                <a href="tel:+917898357817" className="text-gray-600 hover:text-black transition">
                  +91 78983 57817
                </a>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  Bengaluru, India
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
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div>
              <h3 className="text-lg font-semibold mb-3">
                What services do you offer?
              </h3>
              <p className="text-gray-600">
                I specialize in pattern making, draping, garment development, 
                corsetry, and sample development for couture, bridal, and ready-to-wear collections.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Do you work with fashion brands?
              </h3>
              <p className="text-gray-600">
                Yes. I collaborate with fashion brands, designers, and manufacturers 
                for development, fittings, and production-ready pattern making.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Do you accept freelance projects?
              </h3>
              <p className="text-gray-600">
                Yes. I'm available for freelance pattern making, draping, and 
                garment development projects both remotely and onsite.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">
                What types of garments do you specialize in?
              </h3>
              <p className="text-gray-600">
                My expertise includes corsets, evening gowns, bridal wear, 
                structured garments, and complex draped silhouettes.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}