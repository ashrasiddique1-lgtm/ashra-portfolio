export const metadata = {
  title: "About - Ashra",
  description: "Learn more about Ashra, a visionary fashion designer with over 15 years of experience.",
};

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A creative journey focused on craftsmanship, structure, and innovation, where technical expertise meets artistic design.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/profile.jpg"
                alt="Ashra - Fashion Designer"
                width={400}
                height={500}
                priority
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">My Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fashion designer specializing in pattern making, garment construction, corsetry, and draping. My work focuses on structured silhouettes, intricate detailing, and creative garment development. I combine technical precision with artistic expression to create designs that are both innovative and well-crafted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      {/* <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Evening Wear</h3>
              <p className="text-gray-600">
                Creating elegant and sophisticated gowns for special occasions, featuring intricate details and luxurious fabrics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainable Design</h3>
              <p className="text-gray-600">
                Pioneering eco-friendly fashion through innovative materials and ethical production practices without compromising style.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Couture & Bespoke</h3>
              <p className="text-gray-600">
                Designing custom pieces tailored to individual clients, offering personalized consultations and made-to-measure services.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Awards Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-2">Sustainable Fashion Award 2023</h3>
              <p className="text-gray-600">Recognized for innovation in eco-friendly couture and sustainable design practices.</p>
              <p className="text-sm text-gray-500 mt-2">International Fashion Council</p>
            </div>
            
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-2">Designer of the Year 2022</h3>
              <p className="text-gray-600">Honored for creative excellence and influence in contemporary fashion design.</p>
              <p className="text-sm text-gray-500 mt-2">Fashion Weekly Magazine</p>
            </div>
            
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-2">Rising Star Award 2021</h3>
              <p className="text-gray-600">Recognized as an emerging talent shaping the future of fashion.</p>
              <p className="text-sm text-gray-500 mt-2">Global Fashion Summit</p>
            </div>
            
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-semibold mb-2">Featured Designer 2020-Present</h3>
              <p className="text-gray-600">Regular features in Vogue, Harper's Bazaar, and other leading fashion publications.</p>
              <p className="text-sm text-gray-500 mt-2">International Media</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with innovative design and sustainable practices.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition"
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}
