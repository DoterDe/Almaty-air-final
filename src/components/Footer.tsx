import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1117] border-t border-[#94A3B8]/20 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#00C2A8] to-[#5FFFE1]">
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
              <div className="flex flex-col">
                <span className="text-lg text-[#F3F4F7]">Almaty AirCare</span>
                <span className="text-xs text-[#94A3B8]">Очистка воздуха</span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
              Инициатива по улучшению качества воздуха в Алматы через мониторинг,
              образование и коллективные действия.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 bg-[#1E2937] rounded-lg hover:bg-[#00C2A8]/20 hover:text-[#00C2A8] text-[#94A3B8] transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#1E2937] rounded-lg hover:bg-[#00C2A8]/20 hover:text-[#00C2A8] text-[#94A3B8] transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#1E2937] rounded-lg hover:bg-[#00C2A8]/20 hover:text-[#00C2A8] text-[#94A3B8] transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#1E2937] rounded-lg hover:bg-[#00C2A8]/20 hover:text-[#00C2A8] text-[#94A3B8] transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* О проекте */}
          <div>
            <h3 className="text-lg text-[#F3F4F7] mb-4">О проекте</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Наша миссия
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Команда
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Партнёры
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Отчёты и исследования
                </a>
              </li>
            </ul>
          </div>

          {/* Разделы */}
          <div>
            <h3 className="text-lg text-[#F3F4F7] mb-4">Разделы</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#map"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Карта качества воздуха
                </a>
              </li>
              <li>
                <a
                  href="#experiment"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Эксперимент
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Решения
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Сообщество
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
                >
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg text-[#F3F4F7] mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@almatyaircare.kz"
                  className="flex items-start gap-3 text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-[#00C2A8]" />
                  <span>info@almatyaircare.kz</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+77273123456"
                  className="flex items-start gap-3 text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-[#00C2A8]" />
                  <span>+7 (727) 312-34-56</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-[#94A3B8]">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    г. Алматы, пр. Абая 150/230
                    <br />
                    БЦ "Green Quarter", 5 этаж
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-[#1E2937] rounded-xl border border-[#94A3B8]/20">
              <p className="text-xs text-[#94A3B8] mb-2">Горячая линия</p>
              <a
                href="tel:+77273000911"
                className="text-lg text-[#00C2A8] hover:text-[#5FFFE1] transition-smooth"
              >
                +7 (727) 300-09-11
              </a>
              <p className="text-xs text-[#94A3B8] mt-1">Круглосуточно</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#94A3B8]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#94A3B8] text-center md:text-left">
              © {currentYear} Almaty AirCare. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-sm text-[#94A3B8] hover:text-[#00C2A8] transition-smooth"
              >
                Cookie
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-[#94A3B8]">
              Данные о качестве воздуха обновляются каждый час. Источники: Казгидромет, IQAir, собственная сеть датчиков.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
