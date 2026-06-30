import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const REG_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=cf9de84c45fe4d1bb8ea9a6c97512c5c&utm_content=blank';

const LOGO_URL = 'https://logo-teka.com/wp-content/uploads/2025/06/yandex-eda-sign-logo.svg';
const HERO_IMG = 'https://cdn.poehali.dev/projects/8e0ffd89-1049-4107-9ee2-4f408e4b556f/files/3b4a0cd4-6da5-46d7-97b6-dce40e577100.jpg';
const BIKE_IMG = 'https://cdn.poehali.dev/projects/8e0ffd89-1049-4107-9ee2-4f408e4b556f/files/20683b7f-f2cd-43a7-ad5d-c36340f12ee9.jpg';
const WALK_IMG = 'https://cdn.poehali.dev/projects/8e0ffd89-1049-4107-9ee2-4f408e4b556f/files/0368a7e7-6655-417b-9883-28b185c7aa1d.jpg';

const benefits = [
  { icon: 'Wallet', title: 'От 5 000 рублей в день', text: 'Чем больше заказов — тем выше доход. Никаких потолков и ограничений.', accent: true },
  { icon: 'CalendarClock', title: 'Свободный график', text: 'Сам решаешь, когда выходить. Работай 2 часа или весь день — как удобно.' },
  { icon: 'Zap', title: 'Мгновенные выплаты', text: 'На карту Яндекс Про деньги приходят через несколько минут после заказа.' },
  { icon: 'Bike', title: 'Любой транспорт', text: 'Пешком, на самокате, велосипеде, скутере или авто — выбираешь сам.' },
  { icon: 'HandCoins', title: 'Чаевые — только твои', text: 'Мы не берём комиссию с чаевых. Всё, что оставил клиент — полностью твоё.' },
  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Служба поддержки всегда на связи в приложении — помогут в любой ситуации.' },
];

const steps = [
  { num: '01', title: 'Оставь заявку', text: 'Заполни короткую анкету — 2–3 минуты.', icon: 'ClipboardList' },
  { num: '02', title: 'Загрузи документы', text: 'Паспорт и ИНН — через приложение Яндекс Про.', icon: 'FileText' },
  { num: '03', title: 'Получи экипировку', text: 'Заберёшь термосумку в точке выдачи в своём городе.', icon: 'ShoppingBag' },
  { num: '04', title: 'Зарабатывай', text: 'Выходи на смену и получай деньги уже после первого заказа.', icon: 'BadgeCheck' },
];

const reviews = [
  { name: 'Алексей', city: 'Москва', role: 'Курьер на велосипеде · 8 мес.', text: 'Совмещаю с учёбой в вузе. График полностью свободный — выхожу когда удобно. Деньги приходят точно в срок, ни разу не задержали.', earn: '3 800 ₽/день' },
  { name: 'Марина', city: 'Санкт-Петербург', role: 'Пеший курьер · 1 год', text: 'Начала подрабатывать вечерами после основной работы. За месяц получается хорошая прибавка. Поддержка всегда на связи, быстро решают любые вопросы.', earn: '2 400 ₽/день' },
  { name: 'Дмитрий', city: 'Москва', role: 'Курьер на авто · 6 мес.', text: 'Работаю полный день, заказов всегда хватает. Доход вышел выше, чем ожидал. Особенно приятны бонусы в часы пик — реально удваивают заработок.', earn: '5 200 ₽/день' },
  { name: 'Иван', city: 'Казань', role: 'Курьер на самокате · 4 мес.', text: 'Раньше работал в офисе, теперь катаюсь по городу и зарабатываю больше. Свежий воздух, никакого начальника над головой. Советую попробовать.', earn: '4 100 ₽/день' },
  { name: 'Ольга', city: 'Новосибирск', role: 'Пеший курьер · 7 мес.', text: 'Оформилась за один день — всё онлайн, никуда ехать не пришлось. Первый заказ взяла уже вечером того же дня. Очень удобное приложение.', earn: '2 900 ₽/день' },
  { name: 'Руслан', city: 'Краснодар', role: 'Курьер на авто · 1.5 года', text: 'Работаю дольше всех в нашем чате. Стабильный доход, много постоянных клиентов в моём районе. Яндекс Еда — лучший способ зарабатывать на своём авто.', earn: '6 300 ₽/день' },
  { name: 'Анастасия', city: 'Екатеринбург', role: 'Пеший курьер · 3 мес.', text: 'Мама в декрете — нашла идеальную подработку. Работаю пока муж дома, от 2 до 5 часов в день. Деньги небольшие, но стабильные и без задержек.', earn: '1 800 ₽/день' },
  { name: 'Тимур', city: 'Уфа', role: 'Курьер на велосипеде · 10 мес.', text: 'За лето заработал на новый ноутбук. Летом очень много заказов, особенно в выходные. Зимой тоже работаю — выдали тёплую форму бесплатно.', earn: '4 500 ₽/день' },
  { name: 'Светлана', city: 'Ростов-на-Дону', role: 'Пеший курьер · 5 мес.', text: 'Потеряла работу и не знала что делать. Подруга посоветовала попробовать. Теперь зарабатываю больше, чем на прошлой работе, и сама себе хозяйка.', earn: '3 200 ₽/день' },
];

const faq = [
  { q: 'Нужен ли опыт работы?', a: 'Нет, опыт не требуется. Мы всё объясним и поможем на старте — справится каждый.' },
  { q: 'Как быстро можно начать?', a: 'После подачи заявки и регистрации вы сможете выйти на первую смену уже в течение 1–2 дней.' },
  { q: 'Как происходят выплаты?', a: 'На карту Яндекс Про деньги приходят в течение нескольких минут после заказа. На карты других банков — на следующий рабочий день.' },
  { q: 'Можно ли совмещать с другой работой?', a: 'Да! Вы сами выбираете удобное время для смен — можно работать в свободные часы.' },
  { q: 'Нужна ли своя машина или велосипед?', a: 'Нет. В приложении Яндекс Про доступна аренда техники. Также можно работать пешком.' },
  { q: 'Берёте ли комиссию с чаевых?', a: 'Нет. Чаевые полностью ваши — мы не берём с них никакой комиссии.' },
];

function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const visibleCount = 3;
  const total = reviews.length;

  useEffect(() => {
    if (!isAuto) return;
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % (total - visibleCount + 1));
    }, 3500);
    return () => clearInterval(t);
  }, [isAuto, total]);

  const prev = () => { setIsAuto(false); setCurrent(c => Math.max(0, c - 1)); };
  const next = () => { setIsAuto(false); setCurrent(c => Math.min(total - visibleCount, c + 1)); };

  return (
    <div className="relative">
      {/* Карточки */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + ${20 / visibleCount}px)))` }}
        >
          {reviews.map((r) => (
            <div
              key={r.name + r.city}
              className="flex w-[calc(33.333%-14px)] flex-none flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="fill-yellow text-yellow" />
                  ))}
                </div>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-400">{r.city}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 md:text-base">«{r.text}»</p>
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow text-sm font-extrabold text-ink">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-ink">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.role}</div>
                  </div>
                </div>
                <div className="rounded-xl bg-green-50 px-3 py-1.5 text-center">
                  <div className="text-sm font-extrabold text-green-600">{r.earn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Управление */}
      <div className="mt-8 flex items-center justify-between">
        {/* Точки */}
        <div className="flex gap-2">
          {Array.from({ length: total - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsAuto(false); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-ink' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        {/* Стрелки */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-ink hover:bg-ink hover:text-white disabled:opacity-30"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={next}
            disabled={current >= total - visibleCount}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-ink hover:bg-ink hover:text-white disabled:opacity-30"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ value, label, prefix = '', suffix = '' }: { value: number; label: string; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1400, started);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-extrabold text-yellow md:text-4xl">{prefix}{count.toLocaleString('ru')}{suffix}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function IncomeCalculator({ onApply }: { onApply: () => void }) {
  const [hours, setHours] = useState(6);
  const [days, setDays] = useState(5);
  const perHour = 650;
  const daily = hours * perHour;
  const monthly = daily * days * 4;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl md:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow">
          <Icon name="Calculator" size={20} className="text-ink" />
        </div>
        <h3 className="text-lg font-extrabold">Посчитай свой доход</h3>
      </div>

      <div className="space-y-6">
        <div>
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span className="text-gray-600">Часов в день</span>
            <span className="font-extrabold text-ink">{hours} ч</span>
          </div>
          <input
            type="range" min={2} max={12} step={1} value={hours}
            onChange={e => setHours(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#FCE000]"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400"><span>2 ч</span><span>12 ч</span></div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span className="text-gray-600">Дней в неделю</span>
            <span className="font-extrabold text-ink">{days} дн</span>
          </div>
          <input
            type="range" min={1} max={7} step={1} value={days}
            onChange={e => setDays(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#FCE000]"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400"><span>1 дн</span><span>7 дн</span></div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <div className="text-xs text-gray-500">в день</div>
          <div className="mt-1 text-2xl font-extrabold text-ink">{daily.toLocaleString('ru')} ₽</div>
        </div>
        <div className="rounded-2xl bg-yellow p-4 text-center">
          <div className="text-xs text-ink/60">в месяц</div>
          <div className="mt-1 text-2xl font-extrabold text-ink">{monthly.toLocaleString('ru')} ₽</div>
        </div>
      </div>

      <Button onClick={onApply} className="mt-5 w-full rounded-full bg-ink py-3 font-bold text-white transition hover:scale-105 hover:bg-ink/90">
        Хочу столько зарабатывать →
      </Button>
      <p className="mt-2 text-center text-xs text-gray-400">Расчёт примерный. Реальный доход зависит от города и активности.</p>
    </div>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [applicants] = useState(() => Math.floor(Math.random() * 30) + 47);
  const go = () => window.open(REG_URL, '_blank');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setStickyVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-ink">

      {/* Sticky mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden transition-all duration-500 ${stickyVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <button
          onClick={go}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-4 text-base font-extrabold text-white shadow-2xl active:scale-95"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Стать курьером — от 5 000 ₽/день
        </button>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'border-b border-gray-100 bg-white/98 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
        <div className="container flex h-14 items-center justify-between px-4 md:h-16 md:px-8">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Яндекс Еда" className="h-8 w-auto md:h-9" />
            <span className="text-base font-bold md:text-lg">Яндекс <span className="font-normal text-gray-500">Еда</span></span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
            <a href="#calc" className="transition hover:text-ink">Калькулятор</a>
            <a href="#benefits" className="transition hover:text-ink">Преимущества</a>
            <a href="#how" className="transition hover:text-ink">Как начать</a>
            <a href="#reviews" className="transition hover:text-ink">Отзывы</a>
            <a href="#faq" className="transition hover:text-ink">Вопросы</a>
          </nav>
          <Button onClick={go} className="hidden rounded-full bg-ink px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-ink/90 hover:shadow-lg md:inline-flex">
            Стать курьером
          </Button>
          <button className="p-1 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-4 text-gray-700">
              <a href="#calc" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Калькулятор дохода</a>
              <a href="#benefits" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Преимущества</a>
              <a href="#how" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Как начать</a>
              <a href="#reviews" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Отзывы</a>
              <a href="#faq" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Вопросы</a>
              <Button onClick={go} className="mt-1 w-full rounded-full bg-ink font-bold text-white">Стать курьером →</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Фон: левая часть — жёлтая, правая — тёмная (на десктопе) */}
        <div className="absolute inset-0 flex">
          <div className="w-full bg-yellow md:w-[55%]" />
          <div className="hidden bg-ink md:block md:w-[45%]" />
        </div>
        {/* Декоративные круги */}
        <div className="pointer-events-none absolute left-[30%] top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-ink/5" />

        <div className="container relative grid min-h-[92vh] items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-0">

          {/* Левая колонка — текст */}
          <div className="flex flex-col justify-center">
            {/* Соцдоказательство */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-ink shadow backdrop-blur">
              <span className="flex -space-x-1">
                {['А', 'М', 'Д'].map((l, i) => (
                  <span key={i} className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-yellow ring-2 ring-white">{l}</span>
                ))}
              </span>
              <span><strong>{applicants} человек</strong> подали заявку сегодня</span>
            </div>

            {/* Бейдж статуса */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Набор курьеров открыт
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Стань курьером<br />
              <span className="relative inline-block whitespace-nowrap">
                Яндекс Еды
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-ink/25" />
              </span>
              <br />
              <span className="text-ink/60">и зарабатывай</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
              Свободный график, мгновенные выплаты и доход<br className="hidden md:block" />
              <strong className="text-ink"> от 5 000 рублей в день</strong>. Оформление за 2–3 часа — начни уже сегодня.
            </p>

            {/* Теги */}
            <div className="mt-5 flex flex-wrap gap-2">
              {['Официальное трудоустройство', 'Бесплатная экипировка', 'Поддержка 24/7'].map(t => (
                <span key={t} className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-3 py-1.5 text-xs font-medium text-ink shadow-sm">
                  <Icon name="Check" size={12} />
                  {t}
                </span>
              ))}
            </div>

            {/* Кнопки */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={go} size="lg" className="group rounded-full bg-ink px-9 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-ink/85 active:scale-100">
                Стать курьером
                <Icon name="ArrowRight" size={20} className="ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => document.getElementById('calc')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-ink/20 bg-white/60 px-8 text-base font-semibold text-ink backdrop-blur hover:border-ink/40 hover:bg-white/90"
              >
                <Icon name="Calculator" size={18} className="mr-2" />
                Посчитать доход
              </Button>
            </div>

            {/* Мини-статы */}
            <div className="mt-8 flex gap-7 border-t border-ink/10 pt-7">
              {[{ v: '2–3 часа', l: 'оформление' }, { v: 'мгновенно', l: 'выплаты' }, { v: '24/7', l: 'поддержка' }].map(s => (
                <div key={s.l}>
                  <div className="text-lg font-extrabold md:text-xl">{s.v}</div>
                  <div className="text-xs text-ink/50">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка — фото */}
          <div className="relative flex items-center justify-center py-8 md:py-0">
            {/* Декоративное кольцо */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[440px] w-[440px] rounded-full border-2 border-white/10 md:h-[560px] md:w-[560px]" />
            </div>

            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Фото */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
                <img
                  src={HERO_IMG}
                  alt="Курьер Яндекс Еды"
                  className="h-[440px] w-full object-cover md:h-[560px]"
                  style={{ objectPosition: 'center 15%' }}
                />
                {/* Градиент снизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Бейдж: заработок — слева снизу */}
              <div className="absolute -left-5 bottom-16 rounded-2xl bg-white p-4 shadow-2xl md:-left-12">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow">
                    <Icon name="TrendingUp" size={18} className="text-ink" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400">Средний доход</div>
                    <div className="text-xl font-extrabold leading-none text-ink">5 000 ₽</div>
                    <div className="text-[11px] text-gray-400">в день</div>
                  </div>
                </div>
              </div>

              {/* Бейдж: курьеры — справа середина */}
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-2xl bg-ink p-4 shadow-2xl md:-right-12">
                <div className="text-[11px] text-white/50">Курьеров в России</div>
                <div className="mt-0.5 text-2xl font-extrabold leading-none text-yellow">150К+</div>
              </div>

              {/* Бейдж: рейтинг — справа снизу */}
              <div className="absolute -right-5 bottom-5 rounded-2xl bg-yellow p-3 shadow-2xl md:-right-12">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={12} className="fill-ink text-ink" />)}
                </div>
                <div className="mt-0.5 text-xs font-bold text-ink">4.9 в App Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Счётчик статистики */}
      <section className="bg-ink text-white">
        <div className="container grid grid-cols-2 divide-x divide-white/10 px-4 md:grid-cols-4 md:px-8">
          {[
            { value: 5000, label: 'рублей в день', prefix: 'от ', suffix: '' },
            { value: 150000, label: 'курьеров в России', prefix: '', suffix: '+' },
            { value: 700, label: 'городов присутствия', prefix: '', suffix: '+' },
            { value: 0, label: 'комиссия с чаевых', prefix: '', suffix: ' ₽' },
          ].map((s, i) => (
            <div key={i} className="px-4 py-7 md:px-8 md:py-10">
              <StatCounter value={s.value} label={s.label} prefix={s.prefix} suffix={s.suffix} />
            </div>
          ))}
        </div>
      </section>

      {/* Калькулятор дохода */}
      <section id="calc" className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <FadeIn>
            <div className="mb-10 text-center md:mb-14">
              <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Калькулятор</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Сколько ты заработаешь?</h2>
              <p className="mt-2 text-gray-500">Подвигай ползунки и посмотри на свою будущую зарплату</p>
            </div>
          </FadeIn>
          <div className="mx-auto max-w-lg">
            <FadeIn delay={100}>
              <IncomeCalculator onApply={go} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <FadeIn>
            <div className="mb-10 max-w-xl md:mb-14">
              <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Почему мы</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Всё сделано<br />для вашего удобства</h2>
              <p className="mt-3 text-gray-500">Тысячи курьеров уже зарабатывают с Яндекс Едой каждый день</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 80}>
                <div className={`group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${b.accent ? 'bg-yellow' : 'border border-gray-100 bg-white hover:border-yellow'}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${b.accent ? 'bg-ink/10' : 'bg-yellow'}`}>
                    <Icon name={b.icon} size={22} className="text-ink" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Фото-секция */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <FadeIn>
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-extrabold md:text-4xl">Выбери свой способ доставки</h2>
              <p className="mt-2 text-gray-500">На любом транспорте — или без него</p>
            </div>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {[
              { img: BIKE_IMG, alt: 'Курьер на велосипеде', title: 'На велосипеде или самокате', sub: 'Быстро, удобно, без пробок', cta: 'Зарабатывай больше' },
              { img: WALK_IMG, alt: 'Пеший курьер', title: 'Пешком по своему району', sub: 'Заказы рядом с домом', cta: 'Начни сегодня' },
            ].map((item, i) => (
              <FadeIn key={item.alt} delay={i * 120}>
                <div className="group relative cursor-pointer overflow-hidden rounded-3xl" onClick={go}>
                  <img src={item.img} alt={item.alt} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-96" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xl font-extrabold text-white md:text-2xl">{item.title}</div>
                    <div className="mt-1 text-sm text-white/75">{item.sub}</div>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-yellow px-4 py-1.5 text-sm font-bold text-ink transition group-hover:gap-2.5">
                      {item.cta} <Icon name="ArrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Доход блок */}
      <section id="income" className="bg-gray-50 py-16 md:py-24">
        <div className="container grid items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <FadeIn>
            <div>
              <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Требования минимальные</span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Стать курьером<br />может каждый</h2>
              <p className="mt-3 text-gray-500">Опыт не нужен — мы всему научим</p>
              <ul className="mt-8 space-y-4">
                {[
                  'Возраст от 18 до 55 лет',
                  'Гражданство РФ, Беларуси или разрешение на работу',
                  'Смартфон на Android или iOS',
                  'Желание работать и зарабатывать',
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow">
                      <Icon name="Check" size={13} className="text-ink" />
                    </span>
                    <span className="text-base font-medium">{r}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={go} size="lg" className="mt-9 rounded-full bg-ink px-9 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-ink/90">
                Подать заявку →
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-10 text-white md:px-10 md:py-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-yellow/10" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-yellow/10" />
              <div className="relative">
                <Icon name="TrendingUp" size={40} className="text-yellow" />
                <div className="mt-5 text-5xl font-extrabold leading-none text-yellow md:text-6xl">от 5 000 ₽</div>
                <div className="mt-2 text-sm text-white/60">средний доход активного курьера в день</div>
                <div className="mt-7 h-px bg-white/10" />
                <div className="mt-6 grid grid-cols-2 gap-5">
                  {[
                    { v: '150 000+', l: 'курьеров в России' },
                    { v: '700+', l: 'городов присутствия' },
                    { v: '1–2 дня', l: 'до первой смены' },
                    { v: '0 ₽', l: 'комиссия с чаевых' },
                  ].map(s => (
                    <div key={s.l}>
                      <div className="text-2xl font-extrabold text-yellow">{s.v}</div>
                      <div className="mt-1 text-xs text-white/50">{s.l}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-white/30">Реальный заработок зависит от города и количества заказов.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <FadeIn>
            <div className="mb-10 text-center md:mb-14">
              <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Просто и быстро</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Начать легко</h2>
              <p className="mt-2 text-gray-500">4 шага до первого заказа</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 100}>
                <div className="relative h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
                  {i < steps.length - 1 && (
                    <div className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                      <Icon name="ChevronRight" size={20} className="text-gray-300" />
                    </div>
                  )}
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow">
                    <Icon name={s.icon} size={20} className="text-ink" />
                  </div>
                  <div className="mt-4 text-4xl font-extrabold text-gray-100">{s.num}</div>
                  <h3 className="mt-1 text-base font-extrabold md:text-lg">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="mt-10 text-center md:mt-12">
              <Button onClick={go} size="lg" className="rounded-full bg-yellow px-10 text-base font-extrabold text-ink shadow-lg transition hover:scale-105 hover:bg-yellow/90 hover:shadow-xl">
                Оставить заявку сейчас
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
              <p className="mt-3 text-sm text-gray-400">Займёт 2–3 минуты. Без лишних требований.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="overflow-hidden bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <FadeIn>
            <div className="mb-10 flex flex-col items-center text-center md:mb-12">
              <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Реальные люди</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Что говорят курьеры</h2>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={18} className="fill-yellow text-yellow" />)}
                </div>
                <span className="text-sm font-semibold text-gray-600">4.9 из 5 · 12 400+ отзывов</span>
              </div>
            </div>
          </FadeIn>

          {/* Слайдер */}
          <ReviewsSlider />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="mb-10 text-center md:mb-12">
                <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">FAQ</span>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Частые вопросы</h2>
              </div>
            </FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <AccordionItem value={`item-${i}`} className="rounded-2xl border border-gray-100 bg-white px-5">
                    <AccordionTrigger className="text-left text-sm font-bold hover:no-underline md:text-base">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-gray-500 md:text-base">{item.a}</AccordionContent>
                  </AccordionItem>
                </FadeIn>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA финальный */}
      <section className="container px-4 py-16 md:px-8 md:py-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-yellow px-6 py-14 text-center md:px-8 md:py-24">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ink/5" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-ink/5" />
            <div className="relative">
              {/* Соцдоказательство */}
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-ink shadow-sm backdrop-blur">
                <span className="flex -space-x-1">
                  {['К', 'И', 'С'].map((l, i) => (
                    <span key={i} className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-yellow ring-2 ring-white">{l}</span>
                  ))}
                </span>
                Присоединились сегодня · набор открыт
              </div>

              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight md:text-6xl">
                Готов зарабатывать<br />от 5 000 ₽ в день?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-ink/70 md:text-lg">
                Оформление за 2–3 часа. Первые деньги — после первого заказа.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button onClick={go} size="lg" className="w-full rounded-full bg-ink px-10 text-base font-extrabold text-white shadow-xl transition hover:scale-105 hover:bg-ink/90 sm:w-auto">
                  Стать курьером сейчас
                  <Icon name="ArrowRight" size={20} className="ml-1" />
                </Button>
                <Button
                  onClick={() => document.getElementById('calc')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-ink/25 bg-white/60 px-8 font-semibold text-ink hover:bg-white/80 sm:w-auto"
                >
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Посчитать доход
                </Button>
              </div>
              <p className="mt-4 text-xs text-ink/50">Бесплатно · Без опыта · Официально</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-12 text-white md:py-16">
        <div className="container flex flex-col items-center gap-5 px-4 text-center md:px-8">
          <img src={LOGO_URL} alt="Яндекс Еда" className="h-8 w-auto brightness-0 invert md:h-9" />
          <p className="max-w-sm text-sm text-white/50">
            Официальный набор курьеров-партнёров. Свободный график и стабильный доход.
          </p>
          <Button onClick={go} className="rounded-full bg-yellow px-7 font-bold text-ink transition hover:scale-105 hover:bg-yellow/90">
            Стать курьером →
          </Button>
        </div>
        <div className="container mt-8 border-t border-white/10 px-4 pt-6 text-center text-xs text-white/30 md:px-8">
          © 2026 Набор курьеров Яндекс.Еда. Все права защищены.
        </div>
      </footer>

      {/* Отступ снизу на мобильном для sticky CTA */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;