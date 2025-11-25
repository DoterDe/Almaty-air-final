import { useState } from 'react';
import { X, MapPin, Wind, AlertCircle } from 'lucide-react';

interface District {
  id: string;
  name: string;
  aqi: number;
  population: number;
  mainPollutants: string[];
}

const districts: District[] = [
  { id: 'almaly', name: 'Алмалинский', aqi: 178, population: 250000, mainPollutants: ['PM2.5', 'NO2', 'CO'] },
  { id: 'auezov', name: 'Ауэзовский', aqi: 195, population: 450000, mainPollutants: ['PM2.5', 'PM10', 'SO2'] },
  { id: 'bostandyk', name: 'Бостандыкский', aqi: 142, population: 300000, mainPollutants: ['PM2.5', 'NO2'] },
  { id: 'zhetysu', name: 'Жетысуский', aqi: 165, population: 280000, mainPollutants: ['PM2.5', 'O3'] },
  { id: 'medeu', name: 'Медеуский', aqi: 98, population: 120000, mainPollutants: ['PM10', 'NO2'] },
  { id: 'nauryzbay', name: 'Наурызбайский', aqi: 188, population: 350000, mainPollutants: ['PM2.5', 'SO2', 'CO'] },
  { id: 'turksib', name: 'Турксибский', aqi: 201, population: 340000, mainPollutants: ['PM2.5', 'PM10', 'NO2'] },
  { id: 'alatau', name: 'Алатауский', aqi: 112, population: 180000, mainPollutants: ['PM10', 'O3'] },
];

export function InteractiveMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return '#78FF9E';
    if (aqi <= 100) return '#FFD93D';
    if (aqi <= 150) return '#FFA500';
    if (aqi <= 200) return '#FF5563';
    return '#8B008B';
  };

  const getAQILabel = (aqi: number) => {
    if (aqi <= 50) return 'Хорошо';
    if (aqi <= 100) return 'Умеренно';
    if (aqi <= 150) return 'Вредно для чувствительных';
    if (aqi <= 200) return 'Вредно';
    return 'Очень вредно';
  };

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C2A8]/20 border border-[#00C2A8]/50 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#00C2A8]" />
            <span className="text-sm text-[#00C2A8]">Интерактивная карта</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
            Живая карта Алматы
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Выберите район, чтобы увидеть, чем вы дышите каждый день
          </p>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Simplified Map Visualization */}
          <div className="bg-[#1E2937] p-8 rounded-3xl border border-[#94A3B8]/20">
            <div className="grid grid-cols-2 gap-4">
              {districts.map((district) => {
                const color = getAQIColor(district.aqi);
                const isHovered = hoveredDistrict === district.id;
                const isSelected = selectedDistrict?.id === district.id;
                
                return (
                  <button
                    key={district.id}
                    onClick={() => setSelectedDistrict(district)}
                    onMouseEnter={() => setHoveredDistrict(district.id)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    className="relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: `${color}20`,
                      borderColor: isHovered || isSelected ? color : `${color}40`,
                      boxShadow: isHovered || isSelected ? `0 0 20px ${color}40` : 'none',
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300"
                        style={{
                          backgroundColor: `${color}30`,
                          border: `2px solid ${color}`,
                        }}
                      >
                        <span className="text-2xl" style={{ color }}>
                          {district.aqi}
                        </span>
                      </div>
                      <span className="text-sm text-[#F3F4F7] text-center">
                        {district.name}
                      </span>
                      <span className="text-xs text-[#94A3B8]">
                        {getAQILabel(district.aqi)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-8 pt-8 border-t border-[#94A3B8]/20">
              <h4 className="text-sm text-[#94A3B8] mb-4 uppercase tracking-wider">
                Уровни AQI
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Хорошо', color: '#78FF9E', range: '0-50' },
                  { label: 'Умеренно', color: '#FFD93D', range: '51-100' },
                  { label: 'Вредно', color: '#FFA500', range: '101-150' },
                  { label: 'Опасно', color: '#FF5563', range: '151-200' },
                  { label: 'Очень опасно', color: '#8B008B', range: '201+' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[#F3F4F7]">{item.label}</span>
                      <span className="text-xs text-[#94A3B8]">{item.range}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* District Details */}
          <div className="lg:sticky lg:top-24">
            {selectedDistrict ? (
              <div className="bg-[#1E2937] p-8 rounded-3xl border border-[#94A3B8]/20 relative">
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-[#111827] rounded-full transition-smooth"
                >
                  <X className="w-5 h-5 text-[#94A3B8]" />
                </button>

                <div className="mb-6">
                  <h3 className="text-3xl text-[#F3F4F7] mb-2">
                    {selectedDistrict.name} район
                  </h3>
                  <p className="text-[#94A3B8]">
                    Население: {(selectedDistrict.population / 1000).toFixed(0)}K жителей
                  </p>
                </div>

                {/* AQI Display */}
                <div
                  className="p-6 rounded-2xl mb-6"
                  style={{
                    backgroundColor: `${getAQIColor(selectedDistrict.aqi)}20`,
                    border: `2px solid ${getAQIColor(selectedDistrict.aqi)}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-[#94A3B8] mb-1">Текущий AQI</p>
                      <p
                        className="text-5xl"
                        style={{ color: getAQIColor(selectedDistrict.aqi) }}
                      >
                        {selectedDistrict.aqi}
                      </p>
                    </div>
                    <Wind
                      className="w-12 h-12"
                      style={{ color: getAQIColor(selectedDistrict.aqi) }}
                    />
                  </div>
                  <p
                    className="text-lg"
                    style={{ color: getAQIColor(selectedDistrict.aqi) }}
                  >
                    {getAQILabel(selectedDistrict.aqi)}
                  </p>
                </div>

                {/* Main Pollutants */}
                <div className="mb-6">
                  <h4 className="text-sm text-[#94A3B8] mb-3 uppercase tracking-wider">
                    Основные загрязнители
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDistrict.mainPollutants.map((pollutant) => (
                      <span
                        key={pollutant}
                        className="px-4 py-2 bg-[#FF5563]/20 border border-[#FF5563]/50 rounded-full text-sm text-[#FF5563]"
                      >
                        {pollutant}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Health Impact */}
                <div className="bg-[#111827] p-6 rounded-2xl">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-[#FFA500] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-[#F3F4F7] mb-2">
                        Влияние на здоровье
                      </h4>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        При таком уровне загрязнения все жители могут испытывать
                        проблемы со здоровьем. Людям с заболеваниями дыхательных
                        путей и сердца следует ограничить физическую активность на
                        открытом воздухе.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#94A3B8]/20">
                    <p className="text-sm text-[#94A3B8]">
                      <span className="text-[#00C2A8]">Рекомендация:</span> Используйте
                      маски N95, закрывайте окна, включите очистители воздуха.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#1E2937] p-12 rounded-3xl border border-[#94A3B8]/20 text-center">
                <MapPin className="w-16 h-16 text-[#94A3B8] mx-auto mb-4" />
                <p className="text-[#94A3B8] text-lg">
                  Выберите район на карте, чтобы увидеть подробную информацию о
                  качестве воздуха
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
