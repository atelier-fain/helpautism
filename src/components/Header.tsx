import { Heart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Cine suntem', href: '#about' },
    { label: 'Ce facem', href: '#programs' },
    { label: 'Povești', href: '#stories' },
    { label: 'Autism', href: '#autism' },
    { label: 'Implică-te', href: '#get-involved' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-[#00B8B0] rounded-lg">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Help Autism</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#00B8B0] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <button className="px-3 py-1 rounded hover:bg-gray-100 transition-colors font-medium text-[#00B8B0]">
                RO
              </button>
              <span className="text-gray-300">|</span>
              <button className="px-3 py-1 rounded hover:bg-gray-100 transition-colors text-gray-600">
                EN
              </button>
            </div>

            <button className="bg-[#E23E8E] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#c9357a] transition-all shadow-md hover:shadow-lg">
              Donează
            </button>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#00B8B0] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
