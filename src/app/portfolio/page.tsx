import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems } from "@/data/portfolioData";

export const metadata = {
  title: "Portfolio - Ashra",
  description: "Explore Ashra's fashion design portfolio featuring various collections and styles.",
};

export default function PortfolioPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore a curated selection of my latest design work spanning evening wear, sustainable fashion, and innovative streetwear.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for a Collaboration?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new projects and creative opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition"
          >
            Get In Touch
          </a>
        </div>
      </section> */}
    </div>
  );
}
