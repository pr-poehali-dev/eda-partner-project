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

const HERO_IMG =
  'https://cdn.poehali.dev/projects/8e0ffd89-1049-4107-9ee2-4f408e4b556f/files/859201a6-1ded-43a2-b73d-94c2149cd4cc.jpg';

const benefits = [
  { icon: 'Wallet', title: 'От 5 000 ₽ в день', text: 'Чем больше заказов выполняешь — тем выше доход. Никаких ограничений.' },
  { icon: 'CalendarClock', title: 'Свободный график', text: 'Сам решаешь, когда выходить на смену. Совмещай с учёбой или другой работой.' },
  { icon: 'Banknote', title: 'Моментальные выплаты', text: 'Деньги поступают моментально на карту Яндекс Про после каждого заказа.' },
  { icon: 'Bike', title: 'Любой способ передвижения', text: 'Пешком, на самокате, велосипеде, скутере или автомобиле — выбираешь сам.' },
  { icon: 'PackageCheck', title: 'Техника в аренду', text: 'В приложении Яндекс Про можно арендовать технику — велосипед, самокат или скутер для доставки.' },
  { icon: 'MapPin', title: 'Заказы рядом', text: 'Умное распределение подбирает заказы поблизости от тебя.' },
  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Всегда поможем в приложении или по телефону в любое время.' },
  { icon: 'ShoppingBag', title: 'Без тяжестей', text: 'Заказы только из ресторанов, магазинов и аптек — ничего тяжёлого.' },
  { icon: 'HandCoins', title: 'Чаевые — только ваши', text: 'Мы не берём комиссию с чаевых. Всё, что оставил клиент — ваше.' },
];

const requirements = [
  'Возраст от 18 до 55 лет',
  'Гражданство РФ, Беларуси или разрешение на работу',
  'Смартфон на Android или iOS',
  'Желание работать и зарабатывать',
];

const steps = [
  { num: '01', title: 'Оставь заявку', text: 'Заполни короткую анкету — это займёт пару минут.' },
  { num: '02', title: 'Пройди регистрацию', text: 'Загрузи документы и дождись подтверждения.' },
  { num: '03', title: 'Получи экипировку', text: 'Забери термосумку и начни принимать заказы.' },
  { num: '04', title: 'Начни зарабатывать', text: 'Выходи на смену и получай выплаты каждую неделю.' },
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
  { q: 'Нужна ли своя машина или велосипед?', a: 'Нет. Вы можете доставлять заказы пешком, на самокате, велосипеде, скутере или автомобиле — как вам удобнее.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = () => window.open(REG_URL, '_blank');

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="container flex h-14 items-center justify-between px-4 md:h-16 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow md:h-9 md:w-9">
              <Icon name="UtensilsCrossed" size={18} className="text-ink" />
            </div>
            <span className="text-base font-bold md:text-lg">Яндекс <span className="font-normal text-gray-500">Еда</span></span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
            <a href="#benefits" className="transition hover:text-ink">Преимущества</a>
            <a href="#requirements" className="transition hover:text-ink">Требования</a>
            <a href="#steps" className="transition hover:text-ink">Как начать</a>
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
              <a href="#requirements" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Требования</a>
              <a href="#steps" className="py-1 text-base font-medium" onClick={() => setMenuOpen(false)}>Как начать</a>
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
              Работай курьером в Яндекс.Еде
            </h1>
            <p className="mt-3 text-base text-ink/80 md:mt-5 md:max-w-md md:text-lg">
              Свободный график, моментальные выплаты на карту Яндекс Про и доход от 5 000 ₽ в день. Начни уже сегодня.
            </p>
            <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row">
              <Button onClick={go} size="lg" className="w-full rounded-full bg-ink px-8 text-base font-bold text-white hover:bg-ink/90 md:w-auto">
                Стать курьером
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
              <Button
                onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}
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
              <div className="rounded-xl bg-ink/10 p-3 text-center md:rounded-none md:bg-transparent md:p-0 md:text-left">
                <div className="text-base font-extrabold md:text-2xl">моментально</div>
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

      {/* Benefits */}
      <section id="benefits" className="container px-4 py-10 md:px-8 md:py-24">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-2xl font-extrabold md:text-4xl">Преимущества работы курьером</h2>
          <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Почему тысячи людей выбирают доставку с Яндекс.Едой</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg md:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow md:h-12 md:w-12">
                <Icon name={b.icon} size={22} className="text-ink" />
              </div>
              <h3 className="mt-4 text-base font-bold md:mt-5 md:text-lg">{b.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500 md:mt-2">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="bg-gray-50 py-10 md:py-24">
        <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:gap-10 md:px-8">
          <div>
            <h2 className="text-2xl font-extrabold md:text-4xl">Требования к кандидатам</h2>
            <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Стать курьером может почти каждый. Вот что нужно для старта:</p>
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
              Подать заявку
            </Button>
          </div>
          <div className="rounded-3xl bg-ink p-7 text-white md:p-10">
            <Icon name="TrendingUp" size={36} className="text-yellow" />
            <div className="mt-5 text-4xl font-extrabold md:mt-6 md:text-5xl">от 5 000 ₽</div>
            <div className="mt-1 text-sm text-white/70 md:text-base">средний доход активного курьера в день</div>
            <div className="mt-6 h-px bg-white/10 md:mt-8" />
            <p className="mt-5 text-sm text-white/80 md:mt-6 md:text-base">Реальный заработок зависит от количества выполненных заказов и города работы.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="container px-4 py-10 md:px-8 md:py-24">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-2xl font-extrabold md:text-4xl">Как начать работу</h2>
          <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Всего 4 простых шага до первого заказа</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {steps.map((s) => (
            <div key={s.num} className="relative rounded-2xl border border-gray-100 p-5 md:p-7">
              <span className="text-3xl font-extrabold text-yellow md:text-4xl">{s.num}</span>
              <h3 className="mt-2 text-sm font-bold md:mt-3 md:text-lg">{s.title}</h3>
              <p className="mt-1 text-xs text-gray-500 md:mt-2 md:text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-10 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-2xl font-extrabold md:text-4xl">Отзывы курьеров</h2>
            <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Что говорят те, кто уже работает с нами</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-5 shadow-sm md:p-7">
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
      <section id="faq" className="container px-4 py-10 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center md:mb-10">
            <h2 className="text-2xl font-extrabold md:text-4xl">Частые вопросы</h2>
            <p className="mt-2 text-sm text-gray-500 md:mt-3 md:text-base">Собрали ответы на самые популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-gray-100 px-4 md:px-5">
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline md:text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 md:text-base">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 pb-10 md:px-8 md:pb-24">
        <div className="rounded-3xl bg-yellow px-6 py-10 text-center md:px-8 md:py-14">
          <h2 className="text-2xl font-extrabold md:text-4xl">Готов начать зарабатывать?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/80 md:mt-4 md:text-lg">
            Оставь заявку прямо сейчас и выйди на первую смену уже на этой неделе.
          </p>
          <Button onClick={go} size="lg" className="mt-6 w-full rounded-full bg-ink px-10 text-base font-bold text-white hover:bg-ink/90 md:mt-8 md:w-auto">
            Стать курьером
            <Icon name="ArrowRight" size={20} className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-10 text-white md:py-14">
        <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-5 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow md:h-9 md:w-9">
              <Icon name="UtensilsCrossed" size={18} className="text-ink" />
            </div>
            <span className="text-base font-bold md:text-lg">Яндекс Еда</span>
          </div>
          <p className="max-w-md text-xs text-white/60 md:text-sm">
            Официальный набор курьеров-партнёров. Свободный график и стабильный доход.
          </p>
          <Button onClick={go} className="w-full rounded-full bg-yellow font-bold text-ink hover:bg-yellow/90 md:w-auto">
            Стать курьером
          </Button>
        </div>
        <div className="container mt-8 border-t border-white/10 px-4 pt-5 text-center text-xs text-white/40 md:mt-10 md:px-8 md:pt-6 md:text-sm">
          © 2026 Набор курьеров Яндекс.Еда. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;