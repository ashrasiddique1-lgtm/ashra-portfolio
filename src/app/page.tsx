import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center px-4">
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">
            ASHRA
          </h1>

          <p className="text-gray-500 mb-6">
            Fashion Designer • Pattern Maker
          </p>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Specializing in Corsetry, Draping and Garment Development 
            for Contemporary & Couture Fashion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition inline-block"
            >
              View Portfolio
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition inline-block"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </section>


      {/* Featured Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="bg-gray-200 h-64 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Corset Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Corsetry & Structured Designs
              </h3>
              <p className="text-gray-600">
                Structured silhouettes with precision pattern making
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 h-64 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Draping Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Draping & Development
              </h3>
              <p className="text-gray-600">
                Experimental draping and garment development
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 h-64 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Pattern Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pattern Making
              </h3>
              <p className="text-gray-600">
                Technical pattern making and grading expertise
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="bg-gray-300 h-96 flex items-center justify-center">
                <span className="text-gray-500">Profile Image</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">
                About Ashra
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Ashra Siddique is a fashion designer and pattern maker 
                specializing in corsetry, draping, and garment development. 
                Her work focuses on structured silhouettes and technical precision.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                With experience in development, mock making, grading, and design 
                corrections, Ashra combines creativity with strong technical skills 
                to create innovative garments.
              </p>

              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                Learn More
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="font-medium">Corsetry</div>
            <div className="font-medium">Draping</div>
            <div className="font-medium">Pattern Making</div>
            <div className="font-medium">Garment Development</div>
            <div className="font-medium">Grading</div>
            <div className="font-medium">Construction</div>
          </div>

        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-400">Developments</div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-gray-400">Corset Projects</div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-400">Draping Experiments</div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Client Projects</div>
            </div>

          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-6">
            Available for Freelance & Collaborations
          </h2>

          <p className="text-gray-600 mb-8">
            Let's create something unique together
          </p>

          <Link
            href="/contact"
            className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>

        </div>
      </section>

    </div>
  );
}