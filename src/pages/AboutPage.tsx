import { Leaf, Heart, Sparkles, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F5]">
      <div className="bg-gradient-to-b from-neutral-100 to-[#FBF8F5] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-[#0f0f0f] mb-6">
            Our Story
          </h1>
          <p className="text-neutral-600 text-xl leading-relaxed">
            Where craftsmanship meets consciousness
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
              <span className="text-neutral-500 font-medium">No Image</span>
            </div>
          </div>
          <div>
            <h2 className="font-playfair text-4xl text-[#0f0f0f] mb-6">
              Born in Tulsa, Crafted for the World
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-4">
              Founded in 2020, Tulsa Candle Company emerged from a simple belief: that fragrance
              has the power to transform not just spaces, but moments and memories.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed mb-4">
              What began as a passion project in a small Tulsa workshop has blossomed into a
              luxury brand known for its meticulous attention to detail, premium ingredients, and
              commitment to sustainable practices.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Each candle is a testament to our dedication to the craft—hand-poured, carefully
              tested, and designed to bring warmth and elegance into your home.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-playfair text-4xl text-[#0f0f0f] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
                <Sparkles size={28} className="text-[#C9A66B]" />
              </div>
              <h3 className="font-medium text-xl mb-3">Quality First</h3>
              <p className="text-neutral-600 leading-relaxed">
                We use only premium natural waxes and the finest fragrance oils to create candles
                that burn clean and last longer.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
                <Leaf size={28} className="text-[#C9A66B]" />
              </div>
              <h3 className="font-medium text-xl mb-3">Sustainability</h3>
              <p className="text-neutral-600 leading-relaxed">
                From recyclable packaging to sustainable sourcing, we're committed to protecting
                our planet at every step.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
                <Heart size={28} className="text-[#C9A66B]" />
              </div>
              <h3 className="font-medium text-xl mb-3">Handcrafted</h3>
              <p className="text-neutral-600 leading-relaxed">
                Every candle is hand-poured by our artisans, ensuring each piece meets our exacting
                standards.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
                <Award size={28} className="text-[#C9A66B]" />
              </div>
              <h3 className="font-medium text-xl mb-3">Excellence</h3>
              <p className="text-neutral-600 leading-relaxed">
                We never compromise on quality, testing each fragrance extensively before it reaches
                you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-12 text-center">
          <h2 className="font-playfair text-4xl text-[#0f0f0f] mb-6">
            The Tulsa Difference
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            We believe luxury shouldn't come at the expense of ethics. That's why every candle is
            cruelty-free, phthalate-free, and made with sustainable practices. Our candles are
            more than just home décor—they're an invitation to slow down, breathe deeply, and savor
            the moment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-playfair text-[#C9A66B] mb-2">5+</p>
              <p className="text-sm text-neutral-600">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl font-playfair text-[#C9A66B] mb-2">50+</p>
              <p className="text-sm text-neutral-600">Unique Fragrances</p>
            </div>
            <div>
              <p className="text-4xl font-playfair text-[#C9A66B] mb-2">10K+</p>
              <p className="text-sm text-neutral-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-playfair text-[#C9A66B] mb-2">100%</p>
              <p className="text-sm text-neutral-600">Hand-Poured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
