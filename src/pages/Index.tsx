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
  { name: 'Алексей', role: 'Курьер на велосипеде · 8 мес.', text: 'Совмещаю с учёбой. График полностью свободный, выхожу когда удобно. Деньги приходят точно в срок.', earn: '3 800 ₽/день' },
  { name: 'Марина', role: 'Пеший курьер · 1 год', text: 'Начала подрабатывать вечерами. За месяц получается хорошая прибавка к зарплате. Поддержка всегда на связи.', earn: '2 400 ₽/день' },
  { name: 'Дмитрий', role: 'Курьер на авто · 6 мес.', text: 'Работаю полный день, заказов всегда хватает. Доход выше, чем ожидал. Рекомендую всем.', earn: '5 200 ₽/день' },
];

const faq = [
  { q: 'Нужен ли опыт работы?', a: 'Нет, опыт не требуется. Мы всё объясним и поможем на старте — справится каждый.' },
  { q: 'Как быстро можно начать?', a: 'После подачи заявки и регистрации вы сможете выйти на первую смену уже в течение 1–2 дней.' },
  { q: 'Как происходят выплаты?', a: 'На карту Яндекс Про деньги приходят в течение нескольких минут после заказа. На карты других банков — на следующий рабочий день.' },
  { q: 'Можно ли совмещать с другой работой?', a: 'Да! Вы сами выбираете удобное время для смен — можно работать в свободные часы.' },
  { q: 'Нужна ли своя машина или велосипед?', a: 'Нет. В приложении Яндекс Про доступна аренда техники. Также можно работать пешком.' },
  { q: 'Берёте ли комиссию с чаевых?', a: 'Нет. Чаевые полностью ваши — мы не берём с них никакой комиссии.' },
];

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

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const go = () => window.open(REG_URL, '_blank');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-ink">

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-gray-100 bg-white/98 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
        <div className="container flex h-14 items-center justify-between px-4 md:h-16 md:px-8">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Яндекс Еда" className="h-8 w-auto md:h-9" />
            <span className="text-base font-bold md:text-lg">Яндекс <span className="font-normal text-gray-500">Еда</span></span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
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
      <section className="relative min-h-[90vh] overflow-hidden bg-yellow">
        {/* декоративные круги */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ink/5" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-ink/5" />

        <div className="container relative grid min-h-[90vh] items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-0">
          {/* Текст */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Набор курьеров открыт
            </span>
            <h1 className="mt-5 text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl font-bold">
              Работай<br />
              <span className="relative inline-block">
                курьером
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-ink/20" />
              </span>
              {' '}—<br />
              зарабатывай
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75 md:text-lg">
              Свободный график, мгновенные выплаты и доход<br className="hidden md:block" />
              <strong> от 5 000 рублей в день</strong>. Оформление за 2–3 часа.
            </p>

            {/* Мини-теги доверия */}
            <div className="mt-5 flex flex-wrap gap-2">
              {['Официальное трудоустройство', 'Бесплатная экипировка', 'Поддержка 24/7'].map(t => (
                <span key={t} className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/50 px-3 py-1 text-xs font-medium text-ink">
                  <Icon name="Check" size={12} />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button onClick={go} size="lg" className="rounded-full bg-ink px-8 text-base font-bold text-white shadow-xl transition hover:scale-105 hover:bg-ink/90 hover:shadow-2xl active:scale-100">
                Стать курьером
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
              <Button
                onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="rounded-full border-ink/25 bg-white/50 px-8 text-base font-semibold text-ink backdrop-blur hover:bg-white/80"
              >
                Как это работает
              </Button>
            </div>

            {/* Мини-статы под кнопкой */}
            <div className="mt-8 flex gap-6 border-t border-ink/10 pt-6">
              {[{ v: '2–3 часа', l: 'оформление' }, { v: 'мгновенно', l: 'выплаты' }, { v: '24/7', l: 'поддержка' }].map(s => (
                <div key={s.l}>
                  <div className="text-lg font-extrabold md:text-xl">{s.v}</div>
                  <div className="text-xs text-ink/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Фото */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Основное фото */}
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img src={HERO_IMG} alt="Курьер Яндекс Еды" className="h-[420px] w-full object-cover md:h-[520px]" />
              </div>
              {/* Карточка-бейдж доход */}
              <div className="absolute -left-4 bottom-12 rounded-2xl bg-white px-5 py-3 shadow-xl md:-left-10">
                <div className="text-xs font-medium text-gray-500">Средний заработок</div>
                <div className="mt-0.5 text-2xl font-extrabold text-ink">5 000 ₽</div>
                <div className="text-xs text-gray-400">в день</div>
              </div>
              {/* Карточка-бейдж курьеры */}
              <div className="absolute -right-4 top-10 rounded-2xl bg-ink px-5 py-3 shadow-xl md:-right-10">
                <div className="text-xs font-medium text-white/60">Курьеров в России</div>
                <div className="mt-0.5 text-2xl font-extrabold text-yellow">150К+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Счётчик статистики */}
      <section className="bg-ink text-white">
        <div className="container grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4 px-4 md:px-8">
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

      {/* Benefits */}
      <section id="benefits" className="container px-4 py-16 md:px-8 md:py-28">
        <div className="mb-10 max-w-xl md:mb-14">
          <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Почему мы</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Всё сделано<br />для вашего удобства</h2>
          <p className="mt-3 text-gray-500">Тысячи курьеров уже зарабатывают с Яндекс Едой каждый день</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${b.accent ? 'bg-yellow' : 'border border-gray-100 bg-white hover:border-yellow'}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${b.accent ? 'bg-ink/10' : 'bg-yellow'}`}>
                <Icon name={b.icon} size={22} className="text-ink" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Фото-секция */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">Выбери свой способ доставки</h2>
            <p className="mt-2 text-gray-500">На любом транспорте — или без него</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="group relative cursor-pointer overflow-hidden rounded-3xl" onClick={go}>
              <img src={BIKE_IMG} alt="Курьер на велосипеде" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-96" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xl font-extrabold text-white md:text-2xl">На велосипеде или самокате</div>
                <div className="mt-1 text-sm text-white/75">Быстро, удобно, без пробок</div>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-yellow px-4 py-1.5 text-sm font-bold text-ink">
                  Зарабатывай больше <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            </div>
            <div className="group relative cursor-pointer overflow-hidden rounded-3xl" onClick={go}>
              <img src={WALK_IMG} alt="Пеший курьер" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-96" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xl font-extrabold text-white md:text-2xl">Пешком по своему району</div>
                <div className="mt-1 text-sm text-white/75">Заказы рядом с домом</div>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-yellow px-4 py-1.5 text-sm font-bold text-ink">
                  Начни сегодня <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Доход блок */}
      <section id="income" className="py-16 md:py-28">
        <div className="container grid items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
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

          {/* Тёмная карточка дохода */}
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-10 text-white md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-yellow/10" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-yellow/10" />
            <div className="relative">
              <Icon name="TrendingUp" size={40} className="text-yellow" />
              <div className="mt-5 text-5xl font-extrabold leading-none text-yellow md:text-6xl">от 5 000 ₽</div>
              <div className="mt-2 text-sm text-white/60">средний доход активного курьера в день</div>
              <div className="mt-7 h-px bg-white/10" />
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div>
                  <div className="text-2xl font-extrabold text-yellow">150 000+</div>
                  <div className="mt-1 text-xs text-white/50">курьеров в России</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-yellow">700+</div>
                  <div className="mt-1 text-xs text-white/50">городов присутствия</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-yellow">1–2 дня</div>
                  <div className="mt-1 text-xs text-white/50">до первой смены</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-yellow">0 ₽</div>
                  <div className="mt-1 text-xs text-white/50">комиссия с чаевых</div>
                </div>
              </div>
              <p className="mt-6 text-xs text-white/30">Реальный заработок зависит от города и количества заказов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="bg-gray-50 py-16 md:py-28">
        <div className="container px-4 md:px-8">
          <div className="mb-10 text-center md:mb-14">
            <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Просто и быстро</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Начать легко</h2>
            <p className="mt-2 text-gray-500">4 шага до первого заказа</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {steps.map((s, i) => (
              <div key={s.num} className="relative rounded-3xl bg-white p-6 shadow-sm md:p-8">
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
            ))}
          </div>
          <div className="mt-10 text-center md:mt-12">
            <Button onClick={go} size="lg" className="rounded-full bg-yellow px-10 text-base font-extrabold text-ink shadow-lg transition hover:scale-105 hover:bg-yellow/90 hover:shadow-xl">
              Оставить заявку сейчас
              <Icon name="ArrowRight" size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 md:py-28">
        <div className="container px-4 md:px-8">
          <div className="mb-10 text-center md:mb-14">
            <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">Реальные люди</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Что говорят курьеры</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-600">«{r.text}»</p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow text-sm font-extrabold text-ink">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{r.name}</div>
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
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16 md:py-28">
        <div className="container px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center md:mb-12">
              <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">FAQ</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Частые вопросы</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-gray-100 bg-white px-5">
                  <AccordionTrigger className="text-left text-sm font-bold hover:no-underline md:text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-gray-500 md:text-base">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA финальный */}
      <section className="container px-4 py-16 md:px-8 md:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-yellow px-6 py-14 text-center md:px-8 md:py-24">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ink/5" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-ink/5" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Набор открыт прямо сейчас
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-6xl">
              Готов зарабатывать от 5 000 ₽ в день?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-ink/70 md:text-lg">
              Оформление за 2–3 часа. Первые деньги — после первого заказа.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button onClick={go} size="lg" className="w-full rounded-full bg-ink px-10 text-base font-extrabold text-white shadow-xl transition hover:scale-105 hover:bg-ink/90 sm:w-auto">
                Стать курьером сейчас
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
            </div>
            <p className="mt-4 text-xs text-ink/50">Бесплатно · Без опыта · Официально</p>
          </div>
        </div>
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
    </div>
  );
};

export default Index;