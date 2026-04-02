export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">ASHRA
Fashion Designer & Pattern Maker</h3>
            <p className="text-gray-400 text-sm">
              Specializing in Corsetry, Draping, and Garment Development
for Contemporary & Couture Fashion
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.instagram.com/ash_na221/" className="hover:text-white transition">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/ashra-siddiqui-21431a2a8/" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: ashrasiddique1@gmail.com</li>
              <li>Phone: +91 7898357817</li>
              <li>Location: Bangalore</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Ashra Fashion. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
