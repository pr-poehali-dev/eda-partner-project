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
  { icon: 'MapPin', title: 'Заказы рядом', text: 'Умное распределение подбирает заказы поблизости от тебя.' },
  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Всегда поможем в приложении или по телефону в любое время.' },
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
  { q: 'Как происходят выплаты?', a: 'Деньги поступают на вашу банковскую карту каждую неделю без задержек.' },
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
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow">
              <Icon name="UtensilsCrossed" size={20} className="text-ink" />
            </div>
            <span className="text-lg font-bold">Яндекс <span className="font-normal text-gray-500">Еда</span></span>
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
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-gray-700">
              <a href="#benefits" onClick={() => setMenuOpen(false)}>Преимущества</a>
              <a href="#requirements" onClick={() => setMenuOpen(false)}>Требования</a>
              <a href="#steps" onClick={() => setMenuOpen(false)}>Как начать</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>Вопросы</a>
              <Button onClick={go} className="rounded-full bg-ink font-semibold text-white">Стать курьером</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-yellow">
        <div className="container grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-4 py-1.5 text-sm font-semibold text-ink">
              <Icon name="Sparkles" size={16} /> Набор курьеров открыт
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Работай курьером в Яндекс.Еде
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/80">
              Свободный график, моментальные выплаты на карту Яндекс Про и доход от 5 000 ₽ в день. Начни уже сегодня.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={go} size="lg" className="rounded-full bg-ink px-8 text-base font-bold text-white hover:bg-ink/90">
                Стать курьером
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </Button>
              <Button onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="rounded-full border-ink/20 bg-white/40 px-8 text-base font-semibold text-ink hover:bg-white/70">
                Как это работает
              </Button>
            </div>
            <div className="mt-8 flex gap-8">
              <div><div className="text-2xl font-extrabold">2–3 часа</div><div className="text-sm text-ink/70">на оформление</div></div>
              <div><div className="text-2xl font-extrabold">моментально</div><div className="text-sm text-ink/70">выплаты на карту</div></div>
              <div><div className="text-2xl font-extrabold">24/7</div><div className="text-sm text-ink/70">поддержка</div></div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img src={HERO_IMG} alt="Курьер Яндекс.Еды" className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Преимущества работы курьером</h2>
          <p className="mt-3 text-gray-500">Почему тысячи людей выбирают доставку с Яндекс.Едой</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow">
                <Icon name={b.icon} size={24} className="text-ink" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-gray-500">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="bg-gray-50 py-16 md:py-24">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Требования к кандидатам</h2>
            <p className="mt-3 text-gray-500">Стать курьером может почти каждый. Вот что нужно для старта:</p>
            <ul className="mt-8 space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow">
                    <Icon name="Check" size={16} className="text-ink" />
                  </span>
                  <span className="font-medium">{r}</span>
                </li>
              ))}
            </ul>
            <Button onClick={go} size="lg" className="mt-9 rounded-full bg-ink px-8 font-bold text-white hover:bg-ink/90">
              Подать заявку
            </Button>
          </div>
          <div className="rounded-3xl bg-ink p-10 text-white">
            <Icon name="TrendingUp" size={40} className="text-yellow" />
            <div className="mt-6 text-5xl font-extrabold">от 5 000 ₽</div>
            <div className="mt-1 text-white/70">средний доход активного курьера в день</div>
            <div className="mt-8 h-px bg-white/10" />
            <p className="mt-6 text-white/80">Реальный заработок зависит от количества выполненных заказов и города работы.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Как начать работу</h2>
          <p className="mt-3 text-gray-500">Всего 4 простых шага до первого заказа</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="relative rounded-2xl border border-gray-100 p-7">
              <span className="text-4xl font-extrabold text-yellow">{s.num}</span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">Отзывы курьеров</h2>
            <p className="mt-3 text-gray-500">Что говорят те, кто уже работает с нами</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">«{r.text}»</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow font-bold text-ink">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{r.name}</div>
                    <div className="text-sm text-gray-500">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">Частые вопросы</h2>
            <p className="mt-3 text-gray-500">Собрали ответы на самые популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-gray-100 px-5">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-16 md:pb-24">
        <div className="rounded-3xl bg-yellow px-8 py-14 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Готов начать зарабатывать?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink/80">
            Оставь заявку прямо сейчас и выйди на первую смену уже на этой неделе.
          </p>
          <Button onClick={go} size="lg" className="mt-8 rounded-full bg-ink px-10 text-base font-bold text-white hover:bg-ink/90">
            Стать курьером
            <Icon name="ArrowRight" size={20} className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-14 text-white">
        <div className="container flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow">
              <Icon name="UtensilsCrossed" size={20} className="text-ink" />
            </div>
            <span className="text-lg font-bold">Яндекс Еда</span>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Официальный набор курьеров-партнёров. Свободный график и стабильный доход.
          </p>
          <Button onClick={go} className="rounded-full bg-yellow font-bold text-ink hover:bg-yellow/90">
            Стать курьером
          </Button>
        </div>
        <div className="container mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © 2026 Набор курьеров Яндекс.Еда. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;