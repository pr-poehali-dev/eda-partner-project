import { useState } from 'react';
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
  { icon: 'Wallet', title: 'От 5 000 рублей в день', text: 'Чем больше заказов выполняешь — тем выше доход. Никаких потолка и ограничений.' },
  { icon: 'CalendarClock', title: 'Свободный график', text: 'Сам решаешь, когда выходить на смену. Работай 2 часа или весь день — как удобно.' },
  { icon: 'Banknote', title: 'Мгновенные выплаты', text: 'На карту Яндекс Про деньги приходят в течение нескольких минут после завершения заказа.' },
  { icon: 'Bike', title: 'Любой транспорт', text: 'Пешком, на самокате, велосипеде, скутере или авто — выбираешь сам.' },
  { icon: 'PackageCheck', title: 'Техника в аренду', text: 'В приложении Яндекс Про можно арендовать велосипед, самокат или скутер для доставки.' },
  { icon: 'ShoppingBag', title: 'Без тяжестей', text: 'Заказы только из ресторанов, магазинов и аптек — ничего тяжёлого и громоздкого.' },
  { icon: 'HandCoins', title: 'Чаевые — только ваши', text: 'Мы не берём комиссию с чаевых. Всё, что оставил клиент — полностью ваше.' },
  { icon: 'MapPin', title: 'Заказы рядом', text: 'Умный алгоритм подбирает заказы поблизости, чтобы тратить меньше времени на дорогу.' },
  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Служба поддержки всегда на связи в приложении или по телефону.' },
];

const requirements = [
  'Возраст от 18 до 55 лет',
  'Гражданство РФ, Беларуси или разрешение на работу',
  'Смартфон на Android или iOS',
  'Желание работать и зарабатывать',
];

const steps = [
  { num: '01', title: 'Оставь заявку', text: 'Заполни короткую анкету по ссылке — это займёт 2–3 минуты.' },
  { num: '02', title: 'Загрузи документы', text: 'Паспорт и ИНН — через приложение Яндекс Про.' },
  { num: '03', title: 'Получи экипировку', text: 'Заберёшь термосумку в точке выдачи в своём городе.' },
  { num: '04', title: 'Начни зарабатывать', text: 'Выходи на смену и получай деньги уже после первого заказа.' },
];

const reviews = [
  { name: 'Алексей', role: 'Курьер на велосипеде, 8 мес.', text: 'Совмещаю с учёбой. График полностью свободный, выхожу когда удобно. Деньги приходят точно в срок.' },
  { name: 'Марина', role: 'Пеший курьер, 1 год', text: 'Начала подрабатывать вечерами. За месяц получается хорошая прибавка к зарплате. Поддержка всегда на связи.' },
  { name: 'Дмитрий', role: 'Курьер на авто, 6 мес.', text: 'Работаю полный день, заказов всегда хватает. Доход выше, чем ожидал. Рекомендую.' },
];

const faq = [
  { q: 'Нужен ли опыт работы?', a: 'Нет, опыт не требуется. Мы всё объясним и поможем на старте — справится каждый.' },
  { q: 'Как быстро можно начать?', a: 'После подачи заявки и регистрации вы сможете выйти на первую смену уже в течение 1–2 дней.' },
  { q: 'Как происходят выплаты?', a: 'На карту Яндекс Про деньги приходят в течение нескольких минут после завершения заказа. На карты других банков — на следующий рабочий день.' },
  { q: 'Можно ли совмещать с другой работой?', a: 'Да! Вы сами выбираете удобное время для смен — можно работать в свободные часы.' },
  { q: 'Нужна ли своя машина или велосипед?', a: 'Нет. В приложении Яндекс Про доступна аренда техники. Также можно работать пешком или на своём транспорте.' },
  { q: 'Берёте ли комиссию с чаевых?', a: 'Нет. Чаевые полностью ваши — мы не берём с них никакой комиссии.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = () => window.open(REG_URL, '_blank');

  return (
    <div className="min-h-screen bg-white font-sans text-ink">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
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
          <Button onClick={go} className="hidden rounded-full bg-ink px-5 font-semibold text-white hover:bg-ink/90 md:inline-flex">
            Стать курьером
          </Button>
          <button className="p-1 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-gray-700">
              <a href="#benefits" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Преимущества</a>
              <a href="#how" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Как начать</a>
              <a href="#reviews" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Отзывы</a>
              <a href="#faq" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Вопросы</a>
              <Button onClick={go} className="mt-1 w-full rounded-full bg-ink font-semibold text-white">Стать курьером</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-yellow">
        <div className="container grid items-center gap-6 px-4 py-10 md:grid-cols-2 md:gap-8 md:px-8 md:py-20">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-3 py-1 text-xs font-semibold text-ink md:px-4 md:py-1.5 md:text-sm">
              <Icon name="Sparkles" size={14} /> Набор курьеров открыт
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:mt-5 md:text-6xl">
              Работай курьером —<br className="hidden md:block" /> зарабатывай сразу
            </h1>
            <p className="mt-3 text-base text-ink/80 md:mt-5 md:max-w-md md:text-lg">
              Свободный график, мгновенные выплаты и доход от 5 000 рублей в день. Оформление за 2–3 часа, первый заказ — уже сегодня.
            </p>
            <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row">
              <Button onClick={go} size="lg" className="w-full rounded-full bg-ink px-8 text-base font-bold text-white hover:bg-ink/90 md:w-auto">
                Стать курьером
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
              <Button
                onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="w-full rounded-full border-ink/20 bg-white/40 px-8 text-base font-semibold text-ink hover:bg-white/70 md:w-auto"
              >
                Как это работает
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 md:mt-8 md:flex md:gap-8">
              <div className="rounded-xl bg-ink/10 p-3 text-center md:rounded-none md:bg-transparent md:p-0 md:text-left">
                <div className="text-lg font-extrabold md:text-2xl">2–3 часа</div>
                <div className="text-xs text-ink/70 md:text-sm">на оформление</div>
              </div>
              <div className="rounded-xl bg-ink/10 p-3 text-left md:rounded-none md:bg-transparent md:p-0 md:text-left">
                <div className="text-sm font-extrabold md:text-2xl">мгновенно</div>
                <div className="text-xs text-ink/70 md:text-sm">выплаты на карту</div>
              </div>
              <div className="rounded-xl bg-ink/10 p-3 text-center md:rounded-none md:bg-transparent md:p-0 md:text-left">
                <div className="text-lg font-extrabold md:text-2xl">24/7</div>
                <div className="text-xs text-ink/70 md:text-sm">поддержка</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in hidden md:block">
            <img src={HERO_IMG} alt="Курьер Яндекс.Еды" className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Доход баннер */}
      <section className="bg-ink text-white">
        <div className="container grid grid-cols-2 gap-0 px-4 md:grid-cols-4 md:px-8">
          {[
            { value: 'от 5 000 ₽', label: 'в день' },
            { value: '150 000+', label: 'курьеров в России' },
            { value: '1–2 дня', label: 'до первой смены' },
            { value: '0 ₽', label: 'комиссия с чаевых' },
          ].map((s, i) => (
            <div key={i} className="border-white/10 px-6 py-6 text-center [&:not(:last-child)]:border-r md:py-8">
              <div className="text-2xl font-extrabold text-yellow md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="container px-4 py-10 md:px-8 md:py-24">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-2xl font-extrabold md:text-4xl">Почему выбирают нас</h2>
          <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Тысячи курьеров уже зарабатывают с Яндекс Едой</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-yellow hover:shadow-lg md:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow transition-transform group-hover:scale-110 md:h-12 md:w-12">
                <Icon name={b.icon} size={22} className="text-ink" />
              </div>
              <h3 className="mt-4 text-base font-bold md:mt-5 md:text-lg">{b.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500 md:mt-2">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Фото секция */}
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="relative overflow-hidden rounded-3xl">
              <img src={BIKE_IMG} alt="Курьер на велосипеде" className="h-64 w-full object-cover md:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xl font-extrabold md:text-2xl">На велосипеде или самокате</div>
                <div className="mt-1 text-sm text-white/80">Быстро, удобно, без пробок</div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={WALK_IMG} alt="Пеший курьер" className="h-64 w-full object-cover md:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xl font-extrabold md:text-2xl">Пешком по своему району</div>
                <div className="mt-1 text-sm text-white/80">Заказы рядом с домом</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-10 md:py-24">
        <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-10 md:px-8">
          <div>
            <span className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold text-ink md:text-sm">Требования минимальные</span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-4xl">Стать курьером<br className="hidden md:block" /> может каждый</h2>
            <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Опыт не нужен — мы всему научим</p>
            <ul className="mt-6 space-y-3 md:mt-8 md:space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow md:h-7 md:w-7">
                    <Icon name="Check" size={14} className="text-ink" />
                  </span>
                  <span className="text-sm font-medium md:text-base">{r}</span>
                </li>
              ))}
            </ul>
            <Button onClick={go} size="lg" className="mt-7 w-full rounded-full bg-ink px-8 font-bold text-white hover:bg-ink/90 md:mt-9 md:w-auto">
              Подать заявку →
            </Button>
          </div>
          <div className="rounded-3xl bg-ink p-7 text-white md:p-10">
            <Icon name="TrendingUp" size={36} className="text-yellow" />
            <div className="mt-5 text-4xl font-extrabold text-yellow md:mt-6 md:text-5xl">от 5 000 ₽</div>
            <div className="mt-1 text-sm text-white/70 md:text-base">средний доход активного курьера в день</div>
            <div className="mt-6 h-px bg-white/10 md:mt-8" />
            <div className="mt-5 grid grid-cols-2 gap-4 md:mt-6">
              <div>
                <div className="text-2xl font-bold text-yellow">150 000+</div>
                <div className="mt-1 text-xs text-white/60">курьеров в России</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow">700+</div>
                <div className="mt-1 text-xs text-white/60">городов присутствия</div>
              </div>
            </div>
            <p className="mt-5 text-xs text-white/50 md:mt-6">Реальный заработок зависит от количества заказов и города работы.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="bg-gray-50 py-10 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-2xl font-extrabold md:text-4xl">Начать легко</h2>
            <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">4 шага до первого заказа</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-2xl bg-white p-5 shadow-sm md:p-7">
                <span className="text-3xl font-extrabold text-yellow md:text-4xl">{s.num}</span>
                <h3 className="mt-2 text-sm font-bold md:mt-3 md:text-lg">{s.title}</h3>
                <p className="mt-1 text-xs text-gray-500 md:mt-2 md:text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:mt-10">
            <Button onClick={go} size="lg" className="w-full rounded-full bg-yellow px-10 text-base font-bold text-ink hover:bg-yellow/90 md:w-auto">
              Оставить заявку сейчас
              <Icon name="ArrowRight" size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-10 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-2xl font-extrabold md:text-4xl">Отзывы курьеров</h2>
            <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Что говорят те, кто уже работает с нами</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-600 md:mt-4 md:text-base">«{r.text}»</p>
                <div className="mt-5 flex items-center gap-3 md:mt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow font-bold text-ink md:h-11 md:w-11">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold md:text-base">{r.name}</div>
                    <div className="text-xs text-gray-500 md:text-sm">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-10 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center md:mb-10">
              <h2 className="text-2xl font-extrabold md:text-4xl">Частые вопросы</h2>
              <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Ответы на всё, что вас интересует</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-gray-100 bg-white px-4 md:px-5">
                  <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline md:text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-500 md:text-base">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 py-10 md:px-8 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center text-white md:px-8 md:py-20">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-yellow/10" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-yellow/10" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow/20 px-3 py-1 text-xs font-semibold text-yellow md:text-sm">
              <Icon name="Zap" size={14} /> Начни зарабатывать уже сегодня
            </span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-5xl">Готов?<br className="hidden md:block" /> Оставь заявку прямо сейчас</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 md:mt-4 md:text-lg">
              Оформление за 2–3 часа. Первые деньги — после первого заказа.
            </p>
            <Button onClick={go} size="lg" className="mt-6 w-full rounded-full bg-yellow px-10 text-base font-bold text-ink hover:bg-yellow/90 md:mt-8 md:w-auto">
              Стать курьером
              <Icon name="ArrowRight" size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-10 text-white md:py-14">
        <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-5 md:px-8">
          <div className="flex items-center">
            <img src={LOGO_URL} alt="Яндекс Еда" className="h-8 w-auto brightness-0 invert md:h-9" />
          </div>
          <p className="max-w-md text-xs text-white/60 md:text-sm">
            Официальный набор курьеров-партнёров. Свободный график и стабильный доход.
          </p>
          <Button onClick={go} className="w-full rounded-full bg-yellow font-bold text-ink hover:bg-yellow/90 md:w-auto">
            Стать курьером
          </Button>
        </div>
        <div className="container mt-8 border-t border-white/10 px-4 pt-5 text-center text-xs text-white/40 md:mt-10 md:px-8 md:pt-6">
          © 2026 Набор курьеров Яндекс.Еда. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;