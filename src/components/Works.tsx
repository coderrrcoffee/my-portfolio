import FadeIn from './FadeIn'

const PROJECTS = [
  {
    tag: 'Кофейня',
    title: 'Чёрный дрозд',
    desc: 'Лендинг обжарочной кофейни: меню, галерея, хотспоты и скролл-анимации.',
    url: 'https://coderrrcoffee.github.io/coffee-landing/'
  },
  {
    tag: 'Барбершоп',
    title: 'Клинок',
    desc: 'Тёмный барбершоп: прайс, мастера, запинненная галерея и запись по телефону.',
    url: 'https://coderrrcoffee.github.io/barber-landing/'
  },
  {
    tag: 'Цветочная',
    title: 'Пион',
    desc: 'Цветочная мастерская: каталог букетов, поводы и доставка.',
    url: 'https://coderrrcoffee.github.io/flower-landing/'
  },
  {
    tag: 'Детейлинг',
    title: 'Глянец',
    desc: 'Детейлинг-центр: услуги с ценами и интерактивный слайдер «до/после».',
    url: 'https://coderrrcoffee.github.io/detailing-landing/'
  },
  {
    tag: 'Кинематографично',
    title: 'Cast & Render',
    desc: 'Скролл-скраб видео: прокрутка перебирает кадры фона, три панели сменяют друг друга.',
    url: 'https://coderrrcoffee.github.io/cast-render/'
  },
  {
    tag: 'React',
    title: 'Scroll Tied Video',
    desc: 'Vite + React + TypeScript, видео, привязанное к скроллу, и фреймбуфер на WebCodecs.',
    url: 'https://coderrrcoffee.github.io/scroll-tied-video/'
  }
]

export default function Works() {
  return (
    <section id="works" className="relative w-full px-5 sm:px-8 md:px-10 py-24 sm:py-28" style={{ background: '#0C0C0C' }}>
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn
          as="h2"
          y={30}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2rem, 7vw, 88px)' }}
        >
          Работы
        </FadeIn>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.url} y={34} delay={i * 0.07} className="h-full">
              <a
                href={p.url}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">{p.tag}</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>
                <span className="mt-auto pt-6 text-sm font-medium text-[#c46bff] transition-transform duration-200 group-hover:translate-x-1">
                  Открыть →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
