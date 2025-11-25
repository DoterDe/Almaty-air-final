import { useState } from 'react';
import { Car, Factory, Home, Mountain, Wind, Users, X, TrendingUp } from 'lucide-react';

interface Cause {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  contribution: number;
  details: {
    explanation: string;
    statistics: string[];
    impact: string;
  };
}

const causes: Cause[] = [
  {
    id: 'cars',
    icon: <Car className="w-8 h-8" />,
    title: 'Автомобили',
    description: 'Более 500 тысяч автомобилей на дорогах города ежедневно выбрасывают тонны вредных веществ',
    contribution: 35,
    details: {
      explanation: 'Автомобильный транспорт — главный источник загрязнения воздуха в Алматы. Устаревший автопарк, пробки и низкое качество топлива усугубляют ситуацию. Каждый автомобиль выбрасывает оксиды азота, углекислый газ и мелкодисперсные частицы PM2.5, которые напрямую влияют на здоровье горожан.',
      statistics: [
        '520,000+ автомобилей на дорогах',
        '70% автопарка старше 10 лет',
        'Средняя скорость в час пик: 15 км/ч',
        '250 тонн выбросов NOx ежедневно'
      ],
      impact: 'Выхлопные газы вызывают заболевания дыхательных путей, сердечно-сосудистые проблемы и снижают продолжительность жизни в среднем на 2-3 года.'
    }
  },
  {
    id: 'tec',
    icon: <Factory className="w-8 h-8" />,
    title: 'ТЭЦ и заводы',
    description: 'Теплоэлектроцентрали и промышленные предприятия работают на угле и мазуте',
    contribution: 30,
    details: {
      explanation: 'ТЭЦ Алматы работают на угле и мазуте, выбрасывая в атмосферу сернистый ангидрид, оксиды азота и золу. Промышленные предприятия добавляют к этому тяжёлые металлы и токсичные соединения. Устаревшие фильтры не справляются с очисткой выбросов.',
      statistics: [
        '3 крупных ТЭЦ в городе',
        '2 млн тонн угля сжигается ежегодно',
        '15,000 тонн SO2 в год',
        '40+ промышленных предприятий'
      ],
      impact: 'Промышленные выбросы содержат канцерогенные вещества, приводят к хроническим заболеваниям лёгких и повышают риск онкологии.'
    }
  },
  {
    id: 'heating',
    icon: <Home className="w-8 h-8" />,
    title: 'Отопление домов',
    description: 'Частный сектор отапливается углём, создавая дополнительное загрязнение',
    contribution: 20,
    details: {
      explanation: 'В частном секторе Алматы более 100,000 домов отапливаются углём и дровами. При сжигании твёрдого топлива в атмосферу попадают PM2.5, PM10, угарный газ и полициклические ароматические углеводороды. Пик загрязнения приходится на отопительный сезон (октябрь-апрель).',
      statistics: [
        '100,000+ частных домов на угле',
        'Пик загрязнения зимой',
        'В 2-3 раза выше AQI в холодные месяцы',
        '80 тонн PM2.5 от печного отопления'
      ],
      impact: 'Зимой концентрация вредных веществ увеличивается в 2-3 раза, что приводит к росту респираторных заболеваний у детей и пожилых людей.'
    }
  },
  {
    id: 'geography',
    icon: <Mountain className="w-8 h-8" />,
    title: 'Рельеф (котловина)',
    description: 'Город расположен в котловине, что препятствует естественному рассеиванию смога',
    contribution: 10,
    details: {
      explanation: 'Алматы окружён горами с трёх сторон, что создаёт естественную «ловушку» для загрязнённого воздуха. Холодный воздух с гор опускается в котловину, накрывая город как крышка и не давая смогу рассеиваться. Это явление называется температурной инверсией.',
      statistics: [
        'Котловина глубиной до 1000м',
        'Горы высотой 3000-4000м',
        'Инверсия 120+ дней в году',
        'Застой воздуха до 5-7 дней подряд'
      ],
      impact: 'Географическое положение усиливает эффект от всех остальных источников загрязнения, делая ситуацию критической в безветренные дни.'
    }
  },
  {
    id: 'wind',
    icon: <Wind className="w-8 h-8" />,
    title: 'Отсутствие ветров',
    description: 'Слабая циркуляция воздуха не позволяет смогу рассеиваться',
    contribution: 3,
    details: {
      explanation: 'Среднегодовая скорость ветра в Алматы составляет всего 2-3 м/с, что недостаточно для эффективного рассеивания загрязнителей. В зимние месяцы часто наблюдаются антициклоны с полным отсутствием ветра, что приводит к накоплению смога.',
      statistics: [
        'Средняя скорость ветра: 2.5 м/с',
        '40% дней в году — безветрие',
        'Зимой штиль до 60% времени',
        'Необходимо 5+ м/с для очистки'
      ],
      impact: 'Отсутствие ветра превращает город в газовую камеру, где все выбросы концентрируются на уровне дыхания людей.'
    }
  },
  {
    id: 'population',
    icon: <Users className="w-8 h-8" />,
    title: 'Рост населения',
    description: 'Население города выросло на 50% за последние 20 лет',
    contribution: 2,
    details: {
      explanation: 'С 2000 года население Алматы увеличилось с 1.1 млн до 2+ млн человек. Рост населения привёл к увеличению количества автомобилей, потребления энергии и нагрузки на инфраструктуру. Город физически не успевает адаптироваться к таким темпам роста.',
      statistics: [
        '2+ млн жителей сейчас',
        '+50% за 20 лет',
        '+30,000 человек ежегодно',
        '400 автомобилей на 1000 жителей'
      ],
      impact: 'Быстрый рост населения без развития инфраструктуры создаёт дополнительную нагрузку на экосистему города.'
    }
  }
];

export function CausesSection() {
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  return (
    <>
      <section id="causes" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1720]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5563]/20 border border-[#FF5563]/50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#FF5563]" />
              <span className="text-sm text-[#FF5563]">Анализ проблемы</span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
              Почему воздух грязный
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Загрязнение воздуха в Алматы — это результат сочетания нескольких факторов
            </p>
          </div>

          {/* Causes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className="bg-[#1E2937] p-6 rounded-3xl border border-[#94A3B8]/20 hover-lift transition-smooth cursor-pointer group"
                onClick={() => setSelectedCause(cause)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#FF5563]/20 rounded-xl text-[#FF5563] group-hover:bg-[#FF5563]/30 transition-smooth">
                    {cause.icon}
                  </div>
                  <div className="px-3 py-1 bg-[#FF5563]/20 border border-[#FF5563]/50 rounded-full">
                    <span className="text-sm text-[#FF5563]">{cause.contribution}%</span>
                  </div>
                </div>
                
                <h3 className="text-xl text-[#F3F4F7] mb-3 group-hover:text-[#00C2A8] transition-smooth">
                  {cause.title}
                </h3>
                
                <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">
                  {cause.description}
                </p>

                <button className="text-sm text-[#00C2A8] hover:text-[#5FFFE1] transition-smooth flex items-center gap-2">
                  Подробнее
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCause && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeInUp">
          <div className="bg-[#1E2937] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#94A3B8]/20">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#1E2937] border-b border-[#94A3B8]/20 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FF5563]/20 rounded-xl text-[#FF5563]">
                  {selectedCause.icon}
                </div>
                <div>
                  <h3 className="text-2xl text-[#F3F4F7]">{selectedCause.title}</h3>
                  <p className="text-sm text-[#94A3B8]">
                    Вклад в загрязнение: {selectedCause.contribution}%
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCause(null)}
                className="p-2 hover:bg-[#111827] rounded-full transition-smooth"
              >
                <X className="w-6 h-6 text-[#94A3B8]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Explanation */}
              <div>
                <h4 className="text-lg text-[#F3F4F7] mb-3">Объяснение</h4>
                <p className="text-[#94A3B8] leading-relaxed">
                  {selectedCause.details.explanation}
                </p>
              </div>

              {/* Statistics */}
              <div>
                <h4 className="text-lg text-[#F3F4F7] mb-3">Статистика</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCause.details.statistics.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[#111827] p-4 rounded-xl border border-[#94A3B8]/20"
                    >
                      <p className="text-sm text-[#94A3B8]">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-[#FF5563]/10 border border-[#FF5563]/30 p-6 rounded-2xl">
                <h4 className="text-lg text-[#FF5563] mb-3">Влияние на здоровье</h4>
                <p className="text-[#F3F4F7] leading-relaxed">
                  {selectedCause.details.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
