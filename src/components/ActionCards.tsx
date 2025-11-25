import { useState } from 'react';
import { Bus, Trees, Home, Flame, Users, ChevronDown, ChevronUp } from 'lucide-react';

interface Action {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedContent: {
    howTo: string;
    impact: string;
    tips: string[];
  };
}

const actions: Action[] = [
  {
    id: 'transport',
    icon: <Bus className="w-6 h-6" />,
    title: 'Использовать общественный транспорт',
    description: 'Один автобус заменяет 40 легковых автомобилей на дороге',
    expandedContent: {
      howTo: 'Планируйте маршруты заранее, используйте приложения для отслеживания транспорта, купите проездной на месяц для экономии.',
      impact: 'Если 20% водителей пересядут на общественный транспорт, выбросы CO2 снизятся на 15%.',
      tips: [
        'Используйте метро в часы пик',
        'Комбинируйте автобус + велосипед',
        'Планируйте поездки заранее',
        'Воспользуйтесь проездным билетом'
      ]
    }
  },
  {
    id: 'trees',
    icon: <Trees className="w-6 h-6" />,
    title: 'Сажать деревья',
    description: 'Одно дерево поглощает до 22 кг CO2 в год',
    expandedContent: {
      howTo: 'Присоединяйтесь к экологическим акциям, сажайте деревья во дворе, участвуйте в субботниках по озеленению.',
      impact: 'Дерево среднего размера производит кислород для 2 человек в день и фильтрует воздух от пыли.',
      tips: [
        'Участвуйте в акциях по озеленению',
        'Посадите дерево во дворе',
        'Ухаживайте за существующими деревьями',
        'Поддерживайте городские парки'
      ]
    }
  },
  {
    id: 'air-purifiers',
    icon: <Home className="w-6 h-6" />,
    title: 'Умные очистители дома',
    description: 'Очистители воздуха снижают концентрацию PM2.5 на 80-90%',
    expandedContent: {
      howTo: 'Установите очиститель с HEPA-фильтром в спальне и гостиной, регулярно меняйте фильтры, проветривайте в чистые дни.',
      impact: 'Очистители создают безопасную зону внутри дома, особенно важно для детей и людей с аллергией.',
      tips: [
        'Выбирайте очистители с HEPA H13',
        'Меняйте фильтры раз в 6-12 месяцев',
        'Держите очиститель включённым 24/7',
        'Ставьте в спальне и детской комнате'
      ]
    }
  },
  {
    id: 'no-burning',
    icon: <Flame className="w-6 h-6" />,
    title: 'Не жечь мусор',
    description: 'Сжигание мусора производит токсичные диоксины и PM2.5',
    expandedContent: {
      howTo: 'Сортируйте отходы, используйте контейнеры для раздельного сбора, сдавайте опасные отходы в специальные пункты.',
      impact: 'Один костёр из пластика загрязняет воздух на расстоянии до 1 км и может вызвать острое отравление.',
      tips: [
        'Используйте официальные контейнеры',
        'Сортируйте мусор',
        'Компостируйте органику',
        'Сообщайте о нарушениях'
      ]
    }
  },
  {
    id: 'carpooling',
    icon: <Users className="w-6 h-6" />,
    title: 'Карпулинг (совместные поездки)',
    description: 'Делите поездки с коллегами и соседями',
    expandedContent: {
      howTo: 'Создайте чат с соседями/коллегами, договоритесь о графике, чередуйтесь за рулём, используйте приложения для карпулинга.',
      impact: 'Карпулинг снижает количество автомобилей на дорогах, уменьшает пробки и выбросы на 60-75%.',
      tips: [
        'Договоритесь с коллегами',
        'Используйте приложения для поиска попутчиков',
        'Чередуйтесь за рулём',
        'Экономьте на топливе вместе'
      ]
    }
  }
];

export function ActionCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1720]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
            Что может сделать каждый
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Маленькие действия миллионов людей создают большие изменения
          </p>
        </div>

        {/* Action Cards */}
        <div className="space-y-4">
          {actions.map((action) => {
            const isExpanded = expandedCard === action.id;
            
            return (
              <div
                key={action.id}
                className="bg-[#1E2937] rounded-3xl border border-[#94A3B8]/20 overflow-hidden transition-all duration-300"
              >
                {/* Card Header */}
                <button
                  onClick={() => toggleCard(action.id)}
                  className="w-full p-6 flex items-center gap-4 hover:bg-[#1E2937]/80 transition-smooth text-left"
                >
                  <div className="p-3 bg-[#00C2A8]/20 rounded-xl text-[#00C2A8] flex-shrink-0">
                    {action.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl text-[#F3F4F7] mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8]">
                      {action.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-[#00C2A8]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#94A3B8]" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-6 animate-fadeInUp">
                    <div className="pt-4 border-t border-[#94A3B8]/20">
                      {/* How To */}
                      <div className="mb-6">
                        <h4 className="text-sm text-[#00C2A8] mb-2 uppercase tracking-wider">
                          Как это сделать
                        </h4>
                        <p className="text-[#94A3B8] leading-relaxed">
                          {action.expandedContent.howTo}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="mb-6 p-4 bg-[#00C2A8]/10 border border-[#00C2A8]/30 rounded-2xl">
                        <h4 className="text-sm text-[#00C2A8] mb-2 uppercase tracking-wider">
                          Влияние на окружающую среду
                        </h4>
                        <p className="text-[#F3F4F7] leading-relaxed">
                          {action.expandedContent.impact}
                        </p>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 className="text-sm text-[#00C2A8] mb-3 uppercase tracking-wider">
                          Практические советы
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {action.expandedContent.tips.map((tip, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-[#00C2A8] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-[#94A3B8]">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[#00C2A8]/20 to-[#5FFFE1]/20 border border-[#00C2A8]/50 rounded-3xl text-center">
          <h3 className="text-2xl text-[#F3F4F7] mb-4">
            Начните с одного действия уже сегодня
          </h3>
          <p className="text-[#94A3B8] mb-6">
            Каждое маленькое изменение в поведении приближает нас к чистому воздуху
          </p>
          <button className="px-8 py-4 bg-[#00C2A8] text-[#0F1720] rounded-full hover:bg-[#5FFFE1] transition-smooth neon-glow">
            Получить персональный план действий
          </button>
        </div>
      </div>
    </section>
  );
}
