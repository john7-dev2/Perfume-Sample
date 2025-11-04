import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { supabase, Product } from '../lib/supabase';

type HomePageProps = {
  onNavigate: (page: string, productSlug?: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .limit(3);

    if (data) {
      setFeaturedProducts(data);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-neutral-100 to-[#FBF8F5]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A66B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-neutral-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl text-[#0f0f0f] mb-6 leading-tight">
            Elevate Your Space
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hand-poured luxury candles crafted with premium fragrance oils and natural wax
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="bg-[#0f0f0f] text-[#FBF8F5] px-8 py-4 font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center group"
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-[#0f0f0f] text-[#0f0f0f] px-8 py-4 font-medium hover:bg-[#0f0f0f] hover:text-[#FBF8F5] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0f0f] mb-4">
            Featured Collection
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Discover our signature scents, carefully curated for discerning taste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
onClick={() => onNavigate('about')}
            >
              <div className="aspect-square bg-neutral-200 mb-4 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                  <span className="text-neutral-500 font-medium">No Image</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="font-playfair text-2xl text-[#0f0f0f] mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-600 mb-3 line-clamp-2">
                {product.short_description}
              </p>
              <p className="text-[#C9A66B] font-medium">
                From ${product.base_price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center text-[#0f0f0f] hover:text-[#C9A66B] transition-colors font-medium"
          >
            Learn More About Us
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FBF8F5] to-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0f0f] mb-6">
                Our Story
              </h2>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                Founded in the heart of Tulsa, we believe in the transformative power of scent.
                Each candle is a carefully crafted sensory journey, blending premium natural wax
                with complex fragrance compositions.
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                Our commitment to sustainability and artisanal craftsmanship ensures that every
                candle not only elevates your space but honors our planet.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="border-b-2 border-[#0f0f0f] text-[#0f0f0f] font-medium pb-1 hover:border-[#C9A66B] hover:text-[#C9A66B] transition-colors"
              >
                Read Our Full Story
              </button>
            </div>
            <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                <span className="text-neutral-500 font-medium">No Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0f0f] mb-4">
            Customer Reviews
          </h2>
          <p className="text-neutral-600 text-lg">
            Hear from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah M.',
              rating: 5,
              comment: 'The most luxurious candles I\'ve ever purchased. The scent fills my entire home without being overwhelming.',
            },
            {
              name: 'James L.',
              rating: 5,
              comment: 'Exceptional quality and beautiful packaging. Perfect for gifts or treating yourself.',
            },
            {
              name: 'Emily R.',
              rating: 5,
              comment: 'I\'ve tried many high-end candle brands, and Tulsa Candle Co. is truly unmatched. The burn time is incredible.',
            },
          ].map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#C9A66B] text-[#C9A66B]" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              <p className="text-sm font-medium text-[#0f0f0f]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f0f0f] text-[#FBF8F5]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            Join Our Community
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Be the first to discover new fragrances, exclusive offers, and scent styling tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-none focus:outline-none focus:border-[#C9A66B] text-[#FBF8F5]"
            />
            <button
              type="submit"
              className="bg-[#C9A66B] text-[#0f0f0f] px-8 py-4 font-medium hover:bg-[#b8965a] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
