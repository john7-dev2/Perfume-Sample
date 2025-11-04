import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8F5]">
      {/* Simple Navigation */}
      <nav className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair text-2xl font-semibold text-[#0f0f0f]">
              Tulsa Candle Co.
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => handleNavigate('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home'
                    ? 'text-[#C9A66B] border-b-2 border-[#C9A66B] pb-1'
                    : 'text-neutral-600 hover:text-[#0f0f0f]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'about'
                    ? 'text-[#C9A66B] border-b-2 border-[#C9A66B] pb-1'
                    : 'text-neutral-600 hover:text-[#0f0f0f]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'contact'
                    ? 'text-[#C9A66B] border-b-2 border-[#C9A66B] pb-1'
                    : 'text-neutral-600 hover:text-[#0f0f0f]'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
