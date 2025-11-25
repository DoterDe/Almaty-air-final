import { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      style={{ height: isScrolled ? '64px' : '72px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 transition-smooth hover:opacity-80"
          >
            <div
              className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#00C2A8] to-[#5FFFE1] transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L4 8L12 14L20 8L12 2Z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M12 14L4 20L8 22L12 20L16 22L20 20L12 14Z"
                  fill="white"
                  opacity="0.6"
                />
                <path
                  d="M14 10C14 9 13.5 8 12 8C10.5 8 10 9 10 10C10 11 10.5 12 12 12L14 14C15 13 15 11 14 10Z"
                  fill="#0F1720"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-[#F3F4F7]">
                Almaty AirCare
              </span>
              <span className="text-xs text-[#94A3B8]">Очистка воздуха</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Главная', id: 'hero' },
              { label: 'Мониторинг', id: 'map' },
              { label: 'Решения', id: 'solutions' },
              { label: 'Эксперименты', id: 'experiment' },
              { label: 'Сообщество', id: 'community' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-[#F3F4F7] hover:text-[#00C2A8] transition-smooth group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#00C2A8] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('map')}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#00C2A8] text-[#0F1720] rounded-full hover:bg-[#5FFFE1] transition-smooth neon-glow"
          >
            <MapPin className="w-4 h-4" />
            <span>Мой район</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F3F4F7] p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-[#94A3B8]/20">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {[
              { label: 'Главная', id: 'hero' },
              { label: 'Мониторинг', id: 'map' },
              { label: 'Решения', id: 'solutions' },
              { label: 'Эксперименты', id: 'experiment' },
              { label: 'Сообщество', id: 'community' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-[#F3F4F7] hover:text-[#00C2A8] py-2 transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('map')}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#00C2A8] text-[#0F1720] rounded-full hover:bg-[#5FFFE1] transition-smooth justify-center mt-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Мой район</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
