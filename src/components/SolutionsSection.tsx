import { useState } from 'react';
import { Bus, Bike, Trees, Home, Activity, Zap, X, CheckCircle } from 'lucide-react';

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  imageUrl: string;
  details: {
    fullDescription: string;
    benefits: string[];
    cost: string;
    timeline: string;
    progress: number;
  };
}

const solutions: Solution[] = [
  {
    id: 'electric-buses',
    icon: <Bus className="w-6 h-6" />,
    title: 'Электробусы',
    description: 'Замена дизельных автобусов на электрические снизит выбросы на 40%',
    impact: 'Высокий',
    imageUrl: 'https://images.unsplash.com/photo-1761760178065-f45ba583a014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJ1cyUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NjM5NzY0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      fullDescription: 'Переход на электрический общественный транспорт — одно из самых эффективных решений для снижения загрязнения воздуха. Электробусы не производят прямых выбросов, работают тише и требуют меньше обслуживания. В Алматы уже запущен пилотный проект с 50 электробусами.',
      benefits: [
        'Нулевые выбросы на улицах города',
        'Снижение шума на 70%',
        'Экономия на топливе до 60%',
        'Срок службы на 40% дольше дизельных'
      ],
      cost: '~250 млрд тенге на 500 электробусов',
      timeline: '5-7 лет для полного перехода',
      progress: 25
    }
  },
  {
    id: 'bike-paths',
    icon: <Bike className="w-6 h-6" />,
    title: 'Велодорожки',
    description: 'Развитие велоинфраструктуры может снизить количество автомобилей на 15%',
    impact: 'Средний',
    imageUrl: 'https://images.unsplash.com/photo-1758599668234-68f52db62425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlY29sb2d5fGVufDF8fHx8MTc2NDA3MzAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      fullDescription: 'Создание безопасной и связной сети велодорожек по всему городу сделает велосипед реальной альтернативой автомобилю. Опыт европейских городов показывает, что при наличии инфраструктуры 20-30% поездок на короткие расстояния можно совершать на велосипеде.',
      benefits: [
        'Снижение трафика в центре города',
        'Улучшение здоровья горожан',
        'Экономия средств на топливо',
        'Развитие велокультуры'
      ],
      cost: '~15 млрд тенге на 200 км велодорожек',
      timeline: '3-4 года',
      progress: 15
    }
  },
  {
    id: 'greenery',
    icon: <Trees className="w-6 h-6" />,
    title: 'Озеленение',
    description: 'Посадка 100,000 деревьев в год поглотит 5,000 тонн CO2 ежегодно',
    impact: 'Высокий',
    imageUrl: 'https://images.unsplash.com/photo-1758599668234-68f52db62425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlY29sb2d5fGVufDF8fHx8MTc2NDA3MzAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      fullDescription: 'Деревья — естественные фильтры воздуха. Они поглощают CO2, вырабатывают кислород и задерживают пыль на листьях. Создание зелёных поясов вокруг промышленных зон и вдоль дорог значительно улучшит качество воздуха. План — довести площадь зелёных насаждений до 30% территории города.',
      benefits: [
        'Естественная фильтрация воздуха',
        'Снижение температуры летом',
        'Улучшение психологического климата',
        'Создание рекреационных зон'
      ],
      cost: '~5 млрд тенге ежегодно',
      timeline: 'Долгосрочный проект (10+ лет)',
      progress: 35
    }
  },
  {
    id: 'heating',
    icon: <Home className="w-6 h-6" />,
    title: 'Замена систем отопления',
    description: 'Перевод частных домов с угля на газ снизит PM2.5 на 30%',
    impact: 'Очень высокий',
    imageUrl: 'https://images.unsplash.com/photo-1761509418231-15bf0145b2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcG9sbHV0aW9uJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjQwNzMwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      fullDescription: 'Частный сектор, отапливающийся углём — один из главных источников зимнего смога. Программа газификации и субсидирования перехода на электрическое отопление может решить эту проблему за 5-7 лет. Альтернатива — тепловые насосы и солнечные коллекторы.',
      benefits: [
        'Снижение PM2.5 на 30% зимой',
        'Удобство для жителей',
        'Снижение риска пожаров',
        'Чистота в домах'
      ],
      cost: '~300 млрд тенге на газификацию',
      timeline: '5-7 лет',
      progress: 18
    }
  },
  {
    id: 'sensors',
    icon: <Activity className="w-6 h-6" />,
    title: 'Экосенсоры в школах',
    description: 'Установка датчиков качества воздуха для мониторинга и принятия решений',
    impact: 'Средний',
    imageUrl: 'https://images.unsplash.com/photo-1522161135122-3ab7ef2e63b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNpdHklMjBibHVlJTIwc2t5fGVufDF8fHx8MTc2NDA3MzAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      fullDescription: 'Сеть датчиков качества воздуха в школах, детских садах и больницах позволит в реальном времени отслеживать загрязнение и принимать меры: отменять уроки физкультуры, включать очистители, информировать родителей. Данные помогут властям принимать обоснованные решения.',
      benefits: [
        'Защита детей от загрязнения',
        'Данные для принятия решений',
        'Повышение осведомлённости',
        'Раннее предупреждение'
      ],
      cost: '~2 млрд тенге на 500 датчиков',
      timeline: '1-2 года',
      progress: 40
    }
  },
  {
    id: 'tec-gas',
    icon: <Zap className="w-6 h-6" />,
    title: 'Перевод ТЭЦ на газ',
    description: 'Модернизация теплоэлектроцентралей снизит выбросы SO2 на 80%',
    impact: 'Очень высокий',
    imageUrl: 'https://images.unsplash.com/photo-1761509418231-15bf0145b2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcG9sbHV0aW9uJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjQwNzMwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      fullDescription: 'Переход ТЭЦ с угля на природный газ — самое радикальное решение для снижения промышленных выбросов. Газ горит чище, не даёт золы и сажи. Дополнительно — установка современных фильтров и развитие возобновляемой энергетики (солнечные и ветровые станции).',
      benefits: [
        'Снижение SO2 на 80%',
        'Снижение PM на 70%',
        'Повышение КПД станций',
        'Соответствие мировым стандартам'
      ],
      cost: '~500 млрд тенге на модернизацию',
      timeline: '7-10 лет',
      progress: 12
    }
  }
];

export function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <>
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F1720] to-[#111827]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#78FF9E]/20 border border-[#78FF9E]/50 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-[#78FF9E]" />
              <span className="text-sm text-[#78FF9E]">План действий</span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
              Решения: что можно сделать
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Реальные меры, которые могут изменить ситуацию в ближайшие годы
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-6">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution)}
                className="bg-[#1E2937] rounded-3xl border border-[#94A3B8]/20 overflow-hidden hover-lift transition-smooth cursor-pointer group"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={solution.imageUrl}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E2937] via-transparent to-transparent md:from-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-[#00C2A8]/20 rounded-xl text-[#00C2A8] flex-shrink-0">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl text-[#F3F4F7] group-hover:text-[#00C2A8] transition-smooth">
                            {solution.title}
                          </h3>
                          <span className="px-3 py-1 bg-[#78FF9E]/20 border border-[#78FF9E]/50 rounded-full text-sm text-[#78FF9E] whitespace-nowrap ml-4">
                            {solution.impact} эффект
                          </span>
                        </div>
                        <p className="text-[#94A3B8] mb-4 leading-relaxed">
                          {solution.description}
                        </p>
                        <button className="text-[#00C2A8] hover:text-[#5FFFE1] transition-smooth flex items-center gap-2">
                          Подробнее
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Panel */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/80 backdrop-blur-sm animate-fadeInUp">
          <div
            className="w-full max-w-2xl bg-[#1E2937] overflow-y-auto border-l border-[#94A3B8]/20"
            style={{ animation: 'slideInRight 0.3s ease-out' }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#1E2937] border-b border-[#94A3B8]/20 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00C2A8]/20 rounded-xl text-[#00C2A8]">
                  {selectedSolution.icon}
                </div>
                <div>
                  <h3 className="text-2xl text-[#F3F4F7]">{selectedSolution.title}</h3>
                  <p className="text-sm text-[#94A3B8]">
                    Эффект: {selectedSolution.impact}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSolution(null)}
                className="p-2 hover:bg-[#111827] rounded-full transition-smooth flex-shrink-0"
              >
                <X className="w-6 h-6 text-[#94A3B8]" />
              </button>
            </div>

            {/* Image */}
            <div className="relative h-64">
              <img
                src={selectedSolution.imageUrl}
                alt={selectedSolution.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2937] to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-lg text-[#F3F4F7] mb-3">Детальное описание</h4>
                <p className="text-[#94A3B8] leading-relaxed">
                  {selectedSolution.details.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg text-[#F3F4F7] mb-3">Преимущества</h4>
                <div className="space-y-2">
                  {selectedSolution.details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#78FF9E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#94A3B8]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#111827] p-4 rounded-2xl border border-[#94A3B8]/20">
                  <p className="text-sm text-[#94A3B8] mb-1">Примерная стоимость</p>
                  <p className="text-[#F3F4F7]">{selectedSolution.details.cost}</p>
                </div>
                <div className="bg-[#111827] p-4 rounded-2xl border border-[#94A3B8]/20">
                  <p className="text-sm text-[#94A3B8] mb-1">Сроки реализации</p>
                  <p className="text-[#F3F4F7]">{selectedSolution.details.timeline}</p>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg text-[#F3F4F7]">Прогресс реализации</h4>
                  <span className="text-[#00C2A8]">{selectedSolution.details.progress}%</span>
                </div>
                <div className="w-full h-3 bg-[#111827] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00C2A8] to-[#5FFFE1] transition-all duration-500"
                    style={{ width: `${selectedSolution.details.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
