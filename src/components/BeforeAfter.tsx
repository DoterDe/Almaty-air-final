import { useState } from 'react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
            Алматы, которой она может быть
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto mb-8">
            Проведите линию, чтобы увидеть разницу между загрязнённым городом и чистым будущим
          </p>
        </div>

        {/* Before/After Container */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border-4 border-[#00C2A8]/50 shadow-2xl">
          <div
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Clean City) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1522161135122-3ab7ef2e63b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNpdHklMjBibHVlJTIwc2t5fGVufDF8fHx8MTc2NDA3MzAwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Чистая Алматы"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-8 right-8 px-4 py-2 bg-[#78FF9E]/90 backdrop-blur-sm rounded-full">
                <span className="text-sm text-[#0F1720]">После: Чистый воздух</span>
              </div>
            </div>

            {/* Before Image (Smog City) with clip */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1758187948084-2346aed52a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBwb2xsdXRpb24lMjBzbW9nJTIwY2l0eXxlbnwxfHx8fDE3NjQwNzMwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Алматы в смоге"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-8 left-8 px-4 py-2 bg-[#FF5563]/90 backdrop-blur-sm rounded-full">
                <span className="text-sm text-white">До: Смог</span>
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-1">
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 1L1 8L7 15" stroke="#0F1720" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L7 8L1 15" stroke="#0F1720" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Top & Bottom Indicators */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-xl"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          <div className="bg-[#1E2937] p-6 rounded-2xl border border-[#94A3B8]/20 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="text-right">
                <p className="text-2xl text-[#FF5563] line-through opacity-70">168</p>
                <p className="text-xs text-[#94A3B8]">До</p>
              </div>
              <div className="text-4xl text-[#94A3B8]">→</div>
              <div className="text-left">
                <p className="text-2xl text-[#78FF9E]">42</p>
                <p className="text-xs text-[#94A3B8]">После</p>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8]">AQI (Индекс качества воздуха)</p>
          </div>

          <div className="bg-[#1E2937] p-6 rounded-2xl border border-[#94A3B8]/20 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="text-right">
                <p className="text-2xl text-[#FF5563] line-through opacity-70">-3 года</p>
                <p className="text-xs text-[#94A3B8]">До</p>
              </div>
              <div className="text-4xl text-[#94A3B8]">→</div>
              <div className="text-left">
                <p className="text-2xl text-[#78FF9E]">+2 года</p>
                <p className="text-xs text-[#94A3B8]">После</p>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8]">Продолжительность жизни</p>
          </div>

          <div className="bg-[#1E2937] p-6 rounded-2xl border border-[#94A3B8]/20 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="text-right">
                <p className="text-2xl text-[#FF5563] line-through opacity-70">230 дней</p>
                <p className="text-xs text-[#94A3B8]">До</p>
              </div>
              <div className="text-4xl text-[#94A3B8]">→</div>
              <div className="text-left">
                <p className="text-2xl text-[#78FF9E]">20 дней</p>
                <p className="text-xs text-[#94A3B8]">После</p>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8]">Превышение нормы в году</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#94A3B8] mb-6">
            Это не фантастика. Это реальность, которую мы можем создать вместе.
          </p>
          <button className="px-8 py-4 bg-[#00C2A8] text-[#0F1720] rounded-full hover:bg-[#5FFFE1] transition-smooth neon-glow">
            Присоединиться к движению
          </button>
        </div>
      </div>
    </section>
  );
}
