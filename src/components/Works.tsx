import FadeIn from './FadeIn'

type Project = {
  index: string
  tag: string
  title: string
  desc: string
  tags: string[]
  url: string
  accent: string
  image?: string
  gradient?: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    tag: 'Кофейня',
    title: 'Чёрный дрозд',
    desc: 'Лендинг обжарочной кофейни: меню с ценами, галерея, зелёные хотспоты на герое и запинненная горизонтальная галерея.',
    tags: ['Лендинг', 'Скролл-анимации', 'Параллакс', 'Адаптив'],
    url: 'https://coderrrcoffee.github.io/coffee-landing/',
    accent: '#c06a34',
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=70'
  },
  {
    index: '02',
    tag: 'Барбершоп',
    title: 'Клинок',
    desc: 'Тёмный барбершоп: прайс-лист, команда мастеров, ч/б фото и запись по телефону. Отдельный блок цифр с анимацией.',
    tags: ['Тёмная тема', 'Прайс', 'Счётчики', 'Хотспоты'],
    url: 'https://coderrrcoffee.github.io/barber-landing/',
    accent: '#c9a24b',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=70'
  },
  {
    index: '03',
    tag: 'Цветочная мастерская',
    title: 'Пион',
    desc: 'Светлая цветочная мастерская: каталог букетов, поводы, шаги заказа и запинненная галерея из фото.',
    tags: ['Пастель', 'Каталог', 'Галерея', 'Шаги заказа'],
    url: 'https://coderrrcoffee.github.io/flower-landing/',
    accent: '#b2757f',
    image:
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=70'
  },
  {
    index: '04',
    tag: 'Детейлинг-центр',
    title: 'Глянец',
    desc: 'Детейлинг: услуги с ценами и интерактивный слайдер «до/после», плюс тёмная неоновая подача и цифры.',
    tags: ['Интерактив', 'Слайдер «до/после»', 'Тёмная тема'],
    url: 'https://coderrrcoffee.github.io/detailing-landing/',
    accent: '#ff4a3d',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=70'
  }
]

function ProjectSection({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <FadeIn as="article" y={44} className="group">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className={flip ? 'md:order-2' : ''}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener"
            className="block overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-white/30"
            style={{ boxShadow: `0 30px 60px -40px ${p.accent}` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{ background: p.gradient }}
                >
                  <span
                    className="font-black uppercase tracking-tight opacity-70"
                    style={{
                      fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                      color: p.index === '05' ? '#2b3a46' : '#dbe6ee'
                    }}
                  >
                    {p.title}
                  </span>
                </div>
              )}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: `linear-gradient(180deg, transparent 55%, ${p.accent}26 100%)` }}
              />
            </div>
          </a>
        </div>

        <div className={flip ? 'md:order-1' : ''}>
          <div className="flex items-center gap-4">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)' }}
            >
              {p.index}
            </span>
            <span className="text-xs uppercase tracking-[0.28em] text-white/40">{p.tag}</span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{p.title}</h3>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">{p.desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={p.url}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            Открыть сайт
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Works() {
  return (
    <section
      id="works"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-28 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn as="p" className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
          Портфолио
        </FadeIn>
        <FadeIn
          as="h2"
          y={30}
          delay={0.05}
          className="hero-heading mt-4 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 7vw, 88px)' }}
        >
          Работы
        </FadeIn>
        <FadeIn
          as="p"
          y={20}
          delay={0.1}
          className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-white/55"
        >
          Четыре проекта для локального бизнеса — кофейня, барбершоп, цветочная и детейлинг. Разные
          ниши и настроения, один подход: понятно и по делу.
        </FadeIn>

        <div className="mt-20 flex flex-col gap-24 sm:gap-28 md:gap-32">
          {PROJECTS.map((p, i) => (
            <ProjectSection key={p.url} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
