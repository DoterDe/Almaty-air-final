import { useState, useEffect } from 'react';
import { AlertTriangle, TrendingDown, Wind } from 'lucide-react';

interface HeroProps {
  onCTAClick: (section: string) => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const [aqi, setAqi] = useState(0);
  const targetAqi = 168;

  useEffect(() => {
    const interval = setInterval(() => {
      setAqi((prev) => {
        if (prev >= targetAqi) {
          clearInterval(interval);
          return targetAqi;
        }
        return prev + 3;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const getAQIStatus = (value: number) => {
    if (value <= 50) return { label: 'Хорошо', color: '#78FF9E' };
    if (value <= 100) return { label: 'Умеренно', color: '#FFD93D' };
    if (value <= 150) return { label: 'Вредно для чувствительных', color: '#FFA500' };
    if (value <= 200) return { label: 'Вредно', color: '#FF5563' };
    if (value <= 300) return { label: 'Очень вредно', color: '#8B008B' };
    return { label: 'Опасно', color: '#7E0023' };
  };

  const status = getAQIStatus(aqi);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1746545635824-18f125f415bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbG1hdHklMjBza3lsaW5lJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2NDA3MzAwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Almaty skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1720]/80 via-[#0F1720]/70 to-[#0F1720]"></div>
        
        {/* Smog overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FF5563]/10 to-transparent"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
          }}
        ></div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fadeInUp">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5563]/20 border border-[#FF5563]/50 rounded-full mb-8">
            <AlertTriangle className="w-4 h-4 text-[#FF5563]" />
            <span className="text-sm text-[#FF5563]">
              Критический уровень загрязнения
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-5xl mx-auto leading-tight">
            <span className="text-[#F3F4F7]">Алматы задыхается.</span>
            <br />
            <span className="bg-gradient-to-r from-[#00C2A8] to-[#5FFFE1] bg-clip-text text-transparent">
              Пора увидеть проблему
            </span>
            <br />
            <span className="text-[#F3F4F7]">и попробовать её решить.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed">
            Каждый день жители Алматы дышат воздухом, загрязнённым в 3-4 раза выше
            нормы. Это не просто цифры — это наше здоровье, наши дети, наше будущее.
          </p>

          {/* AQI Indicator */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative mb-4">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full flex flex-col items-center justify-center animate-glow transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, ${status.color}40 0%, transparent 70%)`,
                  border: `3px solid ${status.color}`,
                }}
              >
                <span
                  className="text-6xl sm:text-7xl mb-2 transition-all duration-500"
                  style={{ color: status.color }}
                >
                  {aqi}
                </span>
                <span className="text-sm text-[#F3F4F7] uppercase tracking-wider">
                  AQI Сейчас
                </span>
              </div>
            </div>
            <div
              className="px-6 py-2 rounded-full transition-all duration-500"
              style={{
                backgroundColor: `${status.color}20`,
                border: `1px solid ${status.color}60`,
              }}
            >
              <span style={{ color: status.color }}>{status.label}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-[#1E2937]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#94A3B8]/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-[#FF5563]" />
                <span className="text-3xl text-[#FF5563]">-3 года</span>
              </div>
              <p className="text-sm text-[#94A3B8]">
                Потеря продолжительности жизни
              </p>
            </div>

            <div className="bg-[#1E2937]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#94A3B8]/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-[#FFA500]" />
                <span className="text-3xl text-[#FFA500]">230+</span>
              </div>
              <p className="text-sm text-[#94A3B8]">
                Дней в году превышение нормы
              </p>
            </div>

            <div className="bg-[#1E2937]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#94A3B8]/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Wind className="w-5 h-5 text-[#00C2A8]" />
                <span className="text-3xl text-[#00C2A8]">2M+</span>
              </div>
              <p className="text-sm text-[#94A3B8]">
                Жителей в зоне риска
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onCTAClick('map')}
              className="px-8 py-4 bg-[#00C2A8] text-[#0F1720] rounded-full hover:bg-[#5FFFE1] transition-smooth neon-glow w-full sm:w-auto"
            >
              Посмотреть мой район
            </button>
            <button
              onClick={() => onCTAClick('experiment')}
              className="px-8 py-4 bg-transparent border-2 border-[#00C2A8] text-[#00C2A8] rounded-full hover:bg-[#00C2A8]/10 transition-smooth w-full sm:w-auto"
            >
              Попробовать очистить воздух
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-[#94A3B8] uppercase tracking-wider">
            Прокрутите вниз
          </span>
          <div className="w-6 h-10 border-2 border-[#94A3B8] rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-[#00C2A8] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
