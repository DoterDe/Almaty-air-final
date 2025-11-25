import { useState, useEffect } from 'react';
import { Users, Heart, TreePine, Wind, Mail, CheckCircle } from 'lucide-react';

export function Community() {
  const [memberCount, setMemberCount] = useState(0);
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const targetMembers = 12847;
  const targetTrees = 8562;

  useEffect(() => {
    const memberInterval = setInterval(() => {
      setMemberCount((prev) => {
        if (prev >= targetMembers) {
          clearInterval(memberInterval);
          return targetMembers;
        }
        return prev + 127;
      });
    }, 10);

    const treesInterval = setInterval(() => {
      setTreesPlanted((prev) => {
        if (prev >= targetTrees) {
          clearInterval(treesInterval);
          return targetTrees;
        }
        return prev + 85;
      });
    }, 10);

    return () => {
      clearInterval(memberInterval);
      clearInterval(treesInterval);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111827] to-[#0F1720]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5FFFE1]/20 border border-[#5FFFE1]/50 rounded-full mb-6">
            <Users className="w-4 h-4 text-[#5FFFE1]" />
            <span className="text-sm text-[#5FFFE1]">Вместе мы сильнее</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 text-[#F3F4F7]">
            Сообщество AirCare
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Присоединяйтесь к движению за чистый воздух в Алматы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Community Stats */}
          <div className="space-y-6">
            {/* Live Counter */}
            <div className="bg-[#1E2937] p-8 rounded-3xl border border-[#94A3B8]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#00C2A8]/20 rounded-xl">
                  <Users className="w-6 h-6 text-[#00C2A8]" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#F3F4F7]">Участников движения</h3>
                  <p className="text-sm text-[#94A3B8]">И количество растёт каждый день</p>
                </div>
              </div>
              <div className="text-center py-6">
                <div className="text-6xl sm:text-7xl text-[#00C2A8] mb-2 animate-float">
                  {memberCount.toLocaleString('ru-RU')}
                </div>
                <p className="text-sm text-[#94A3B8]">активных участников</p>
              </div>
            </div>

            {/* Trees Planted */}
            <div className="bg-[#1E2937] p-8 rounded-3xl border border-[#94A3B8]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#78FF9E]/20 rounded-xl">
                  <TreePine className="w-6 h-6 text-[#78FF9E]" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#F3F4F7]">Деревьев посажено</h3>
                  <p className="text-sm text-[#94A3B8]">За последние 6 месяцев</p>
                </div>
              </div>
              <div className="text-center py-6">
                <div className="text-6xl sm:text-7xl text-[#78FF9E] mb-2 animate-float">
                  {treesPlanted.toLocaleString('ru-RU')}
                </div>
                <p className="text-sm text-[#94A3B8]">деревьев в городе</p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1E2937] p-6 rounded-2xl border border-[#94A3B8]/20 text-center">
                <Wind className="w-8 h-8 text-[#00C2A8] mx-auto mb-3" />
                <div className="text-3xl text-[#F3F4F7] mb-1">-12%</div>
                <p className="text-xs text-[#94A3B8]">Снижение AQI в районах акций</p>
              </div>
              <div className="bg-[#1E2937] p-6 rounded-2xl border border-[#94A3B8]/20 text-center">
                <Heart className="w-8 h-8 text-[#FF5563] mx-auto mb-3" />
                <div className="text-3xl text-[#F3F4F7] mb-1">50K+</div>
                <p className="text-xs text-[#94A3B8]">Волонтёрских часов</p>
              </div>
            </div>
          </div>

          {/* Community Image & Subscribe */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden border border-[#94A3B8]/20 h-80">
              <img
                src="https://images.unsplash.com/photo-1758599668234-68f52db62425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlY29sb2d5fGVufDF8fHx8MTc2NDA3MzAwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Посадка деревьев"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg mb-2">
                  "Вместе мы посадили лес размером с 40 футбольных полей"
                </p>
                <p className="text-[#94A3B8] text-sm">
                  — Команда AirCare Almaty
                </p>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-gradient-to-br from-[#00C2A8]/20 to-[#5FFFE1]/20 p-8 rounded-3xl border border-[#00C2A8]/50">
              <h3 className="text-2xl text-[#F3F4F7] mb-3">
                Присоединяйтесь к движению
              </h3>
              <p className="text-[#94A3B8] mb-6">
                Получайте новости о мероприятиях, акциях по озеленению и способах помочь городу
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ваш email"
                      className="w-full pl-12 pr-4 py-4 bg-[#1E2937] border border-[#94A3B8]/20 rounded-2xl text-[#F3F4F7] placeholder-[#94A3B8] focus:outline-none focus:border-[#00C2A8] transition-smooth"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#00C2A8] text-[#0F1720] rounded-2xl hover:bg-[#5FFFE1] transition-smooth neon-glow"
                  >
                    Подписаться на обновления
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-[#78FF9E]/20 border border-[#78FF9E]/50 rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-[#78FF9E]" />
                  <p className="text-[#78FF9E]">
                    Спасибо! Вы подписаны на новости AirCare
                  </p>
                </div>
              )}

              <p className="text-xs text-[#94A3B8] mt-4 text-center">
                Мы уважаем вашу конфиденциальность. Никакого спама.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-[#1E2937] p-8 rounded-3xl border border-[#94A3B8]/20">
          <h3 className="text-2xl text-[#F3F4F7] mb-6 text-center">
            Предстоящие мероприятия
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827] p-6 rounded-2xl border border-[#94A3B8]/20 hover-lift transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#78FF9E]/20 rounded-lg">
                  <TreePine className="w-5 h-5 text-[#78FF9E]" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">15 декабря 2024</p>
                  <p className="text-sm text-[#F3F4F7]">10:00 - 16:00</p>
                </div>
              </div>
              <h4 className="text-lg text-[#F3F4F7] mb-2">Посадка деревьев</h4>
              <p className="text-sm text-[#94A3B8] mb-4">
                Парк Первого Президента. Посадим 500 саженцев вместе!
              </p>
              <button className="text-sm text-[#00C2A8] hover:text-[#5FFFE1] transition-smooth">
                Зарегистрироваться →
              </button>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-[#94A3B8]/20 hover-lift transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#00C2A8]/20 rounded-lg">
                  <Users className="w-5 h-5 text-[#00C2A8]" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">22 декабря 2024</p>
                  <p className="text-sm text-[#F3F4F7]">14:00 - 17:00</p>
                </div>
              </div>
              <h4 className="text-lg text-[#F3F4F7] mb-2">Эко-марафон</h4>
              <p className="text-sm text-[#94A3B8] mb-4">
                Площадь Республики. Бег за чистый воздух, 5 и 10 км.
              </p>
              <button className="text-sm text-[#00C2A8] hover:text-[#5FFFE1] transition-smooth">
                Зарегистрироваться →
              </button>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-[#94A3B8]/20 hover-lift transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#5FFFE1]/20 rounded-lg">
                  <Wind className="w-5 h-5 text-[#5FFFE1]" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">10 января 2025</p>
                  <p className="text-sm text-[#F3F4F7]">18:00 - 20:00</p>
                </div>
              </div>
              <h4 className="text-lg text-[#F3F4F7] mb-2">Экологический форум</h4>
              <p className="text-sm text-[#94A3B8] mb-4">
                Онлайн. Как каждый может влиять на экологию города.
              </p>
              <button className="text-sm text-[#00C2A8] hover:text-[#5FFFE1] transition-smooth">
                Зарегистрироваться →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
