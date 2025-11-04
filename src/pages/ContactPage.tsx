import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F5]">
      <div className="bg-gradient-to-b from-neutral-100 to-[#FBF8F5] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-[#0f0f0f] mb-6">
            Get in Touch
          </h1>
          <p className="text-neutral-600 text-xl leading-relaxed">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
              <Mail size={28} className="text-[#C9A66B]" />
            </div>
            <h3 className="font-medium text-xl mb-2">Email Us</h3>
            <p className="text-neutral-600">hello@tulsacandle.co</p>
            <p className="text-neutral-600">wholesale@tulsacandle.co</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
              <Phone size={28} className="text-[#C9A66B]" />
            </div>
            <h3 className="font-medium text-xl mb-2">Call Us</h3>
            <p className="text-neutral-600">(918) 555-0123</p>
            <p className="text-neutral-600 text-sm">Mon-Fri, 9am-5pm CST</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/10 rounded-full mb-4">
              <MapPin size={28} className="text-[#C9A66B]" />
            </div>
            <h3 className="font-medium text-xl mb-2">Visit Us</h3>
            <p className="text-neutral-600">123 Cherry Street</p>
            <p className="text-neutral-600">Tulsa, OK 74103</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl text-[#0f0f0f] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-[#C9A66B]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-[#C9A66B]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-[#C9A66B]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-[#C9A66B] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0f0f0f] text-[#FBF8F5] px-8 py-4 font-medium hover:bg-neutral-800 transition-colors"
              >
                Send Message
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center">Thank you! We'll be in touch soon.</p>
              )}
            </form>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h2 className="font-playfair text-3xl text-[#0f0f0f] mb-6">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg text-[#0f0f0f] mb-2">Shipping & Delivery</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We offer free shipping on orders over $50. Standard shipping takes 3-5 business
                  days, with expedited options available at checkout.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#0f0f0f] mb-2">Returns & Exchanges</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied,
                  we'll make it right with a full refund or exchange.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#0f0f0f] mb-2">Wholesale Inquiries</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Interested in carrying our products? Contact our wholesale team at
                  wholesale@tulsacandle.co for pricing and minimum order information.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#0f0f0f] mb-2">Candle Care</h3>
                <p className="text-neutral-600 leading-relaxed">
                  For optimal performance, trim wick to 1/4" before each burn and allow wax to melt
                  completely across the surface on first use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
