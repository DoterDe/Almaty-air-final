import { useState, useEffect } from 'react';
import { Sparkles, Car, Factory, Trees, TrendingDown, CheckCircle } from 'lucide-react';

export function AQIExperiment() {
  const baseAQI = 168;
  const [carReduction, setCarReduction] = useState(0);
  const [powerPlantModernization, setPowerPlantModernization] = useState(0);
  const [greenery, setGreenery] = useState(0);
  const [calculatedAQI, setCalculatedAQI] = useState(baseAQI);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Calculate new AQI based on sliders
    const reduction =
      carReduction * 0.5 +
      powerPlantModernization * 0.7 +
      greenery * 0.4;
    
    const newAQI = Math.max(30, Math.round(baseAQI - reduction));
    
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setCalculatedAQI(newAQI);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [carReduction, powerPlantModernization, greenery]);

  const improvement = Math.round(((baseAQI - calculatedAQI) / baseAQI) * 100);

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return '#78FF9E';
    if (aqi <= 100) return '#FFD93D';
    if (aqi <= 150) return '#FFA500';
    if (aqi <= 200) return '#FF5563';
    return '#8B008B';
  };

  const getComparisonText = (aqi: number) => {
    if (aqi <= 50) return 'уровень чистого горного воздуха';
    if (aqi <= 80) return 'уровень маленького европейского города';
    if (aqi <= 100) return 'уровень крупного европейского города';
    if (aqi <= 130) return 'уровень среднего азиатского города';
    if (aqi <= 150) return 'уровень загрязнённого мегаполиса';
    return 'всё ещё опасный уровень загрязнения';
  };

  const resetAll = () => {
    setCarReduction(0);
    setPowerPlantModernization(0);
    setGreenery(0);
  };

  return (
    <section id="experiment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111827] to-[#0F1720]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5FFFE1]/20 border border-[#5FFFE1]/50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#5FFFE1]" />
            <span className="text-sm text-[#5FFFE1]">Интерактивный эксперимент</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
            Почисти воздух сам
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Измените параметры ниже и посмотрите, как различные меры могут улучшить
            качество воздуха в Алматы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Controls */}
          <div className="lg:col-span-3 space-y-6">
            {/* Car Reduction Slider */}
            <div className="bg-[#1E2937] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 hover-lift transition-smooth">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#FF5563]/20 rounded-xl">
                  <Car className="w-6 h-6 text-[#FF5563]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#F3F4F7] mb-2">
                    Снижение автомобилей на дорогах
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    Развитие общественного транспорта, велодорожек и карпулинга
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#94A3B8]">0%</span>
                  <span className="text-2xl text-[#00C2A8]">{carReduction}%</span>
                  <span className="text-sm text-[#94A3B8]">60%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={carReduction}
                  onChange={(e) => setCarReduction(Number(e.target.value))}
                  className="w-full h-3 bg-[#111827] rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #00C2A8 0%, #00C2A8 ${(carReduction / 60) * 100}%, #111827 ${(carReduction / 60) * 100}%, #111827 100%)`,
                  }}
                />
              </div>
            </div>

            {/* Power Plant Slider */}
            <div className="bg-[#1E2937] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 hover-lift transition-smooth">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#FFA500]/20 rounded-xl">
                  <Factory className="w-6 h-6 text-[#FFA500]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#F3F4F7] mb-2">
                    Модернизация ТЭЦ
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    Переход на газ, установка фильтров, использование возобновляемой энергии
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#94A3B8]">0%</span>
                  <span className="text-2xl text-[#00C2A8]">{powerPlantModernization}%</span>
                  <span className="text-sm text-[#94A3B8]">100%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={powerPlantModernization}
                  onChange={(e) => setPowerPlantModernization(Number(e.target.value))}
                  className="w-full h-3 bg-[#111827] rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #00C2A8 0%, #00C2A8 ${powerPlantModernization}%, #111827 ${powerPlantModernization}%, #111827 100%)`,
                  }}
                />
              </div>
            </div>

            {/* Greenery Slider */}
            <div className="bg-[#1E2937] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 hover-lift transition-smooth">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#78FF9E]/20 rounded-xl">
                  <Trees className="w-6 h-6 text-[#78FF9E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#F3F4F7] mb-2">
                    Озеленение района
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    Посадка деревьев, создание парков и зелёных зон
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#94A3B8]">0%</span>
                  <span className="text-2xl text-[#00C2A8]">{greenery}%</span>
                  <span className="text-sm text-[#94A3B8]">80%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={greenery}
                  onChange={(e) => setGreenery(Number(e.target.value))}
                  className="w-full h-3 bg-[#111827] rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #00C2A8 0%, #00C2A8 ${(greenery / 80) * 100}%, #111827 ${(greenery / 80) * 100}%, #111827 100%)`,
                  }}
                />
              </div>
            </div>

            <button
              onClick={resetAll}
              className="w-full py-3 bg-[#111827] text-[#94A3B8] rounded-xl hover:bg-[#1E2937] transition-smooth border border-[#94A3B8]/20"
            >
              Сбросить все параметры
            </button>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* AQI Result */}
              <div
                className={`bg-[#1E2937] p-8 rounded-3xl border-2 transition-all duration-500 ${
                  isAnimating ? 'scale-105' : ''
                }`}
                style={{
                  borderColor: getAQIColor(calculatedAQI),
                  boxShadow: `0 0 40px ${getAQIColor(calculatedAQI)}30`,
                }}
              >
                <div className="text-center mb-6">
                  <p className="text-sm text-[#94A3B8] mb-2 uppercase tracking-wider">
                    Новый AQI
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl text-[#FF5563] line-through opacity-50">
                      {baseAQI}
                    </span>
                    <TrendingDown className="w-6 h-6 text-[#00C2A8]" />
                    <span
                      className="text-6xl transition-all duration-500"
                      style={{ color: getAQIColor(calculatedAQI) }}
                    >
                      {calculatedAQI}
                    </span>
                  </div>
                  
                  {improvement > 0 && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#78FF9E]/20 border border-[#78FF9E]/50 rounded-full">
                      <CheckCircle className="w-4 h-4 text-[#78FF9E]" />
                      <span className="text-sm text-[#78FF9E]">
                        Улучшение на {improvement}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#111827] rounded-2xl">
                    <p className="text-sm text-[#94A3B8] mb-2">Сравнение</p>
                    <p className="text-[#F3F4F7]">
                      Это {getComparisonText(calculatedAQI)}
                    </p>
                  </div>

                  {improvement >= 20 && (
                    <div className="p-4 bg-[#00C2A8]/10 border border-[#00C2A8]/30 rounded-2xl">
                      <p className="text-sm text-[#00C2A8] mb-2">
                        Влияние на здоровье
                      </p>
                      <p className="text-sm text-[#F3F4F7]">
                        {improvement >= 40
                          ? 'Значительное снижение риска респираторных заболеваний'
                          : 'Снижение симптомов у людей с чувствительностью к загрязнению'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Impact Summary */}
              <div className="bg-[#1E2937] p-6 rounded-3xl border border-[#94A3B8]/20">
                <h4 className="text-lg text-[#F3F4F7] mb-4">
                  Ваши изменения
                </h4>
                <div className="space-y-3">
                  {carReduction > 0 && (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#00C2A8] rounded-full"></div>
                      <span className="text-[#94A3B8]">
                        Снижение выбросов от транспорта на{' '}
                        <span className="text-[#00C2A8]">{Math.round(carReduction * 0.5)} AQI</span>
                      </span>
                    </div>
                  )}
                  {powerPlantModernization > 0 && (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#00C2A8] rounded-full"></div>
                      <span className="text-[#94A3B8]">
                        Снижение промышленных выбросов на{' '}
                        <span className="text-[#00C2A8]">{Math.round(powerPlantModernization * 0.7)} AQI</span>
                      </span>
                    </div>
                  )}
                  {greenery > 0 && (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#00C2A8] rounded-full"></div>
                      <span className="text-[#94A3B8]">
                        Природная фильтрация воздуха на{' '}
                        <span className="text-[#00C2A8]">{Math.round(greenery * 0.4)} AQI</span>
                      </span>
                    </div>
                  )}
                  {carReduction === 0 && powerPlantModernization === 0 && greenery === 0 && (
                    <p className="text-sm text-[#94A3B8] text-center py-4">
                      Измените параметры, чтобы увидеть результат
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
