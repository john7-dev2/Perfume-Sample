import { Instagram, Facebook, Mail } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const { error } = await supabase
      .from('email_subscribers')
      .insert([{ email }]);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setEmail('');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <footer className="bg-[#0f0f0f] text-[#FBF8F5] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl mb-4">Tulsa Candle Co.</h3>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              Crafting luxury fragrances that transform spaces into sensory experiences.
              Each candle is hand-poured with premium ingredients and designed to elevate your everyday moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-[#C9A66B] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#C9A66B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#C9A66B] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-[#C9A66B] transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-[#C9A66B] transition-colors">Fragrance Guide</a></li>
              <li><a href="#" className="hover:text-[#C9A66B] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#C9A66B] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#C9A66B] transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Stay Connected</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Subscribe for exclusive offers and new scent releases
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-none focus:outline-none focus:border-[#C9A66B] text-sm"
              />
              <button
                type="submit"
                className="w-full bg-[#C9A66B] text-[#0f0f0f] px-4 py-2 font-medium hover:bg-[#b8965a] transition-colors text-sm"
              >
                Subscribe
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-xs">Thank you for subscribing!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-xs">Already subscribed or error occurred</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-400">
          <p>&copy; 2025 Tulsa Candle Company. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#C9A66B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A66B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C9A66B] transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
