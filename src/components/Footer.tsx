import FadeIn from './FadeIn'
import avatar from '../assets/avatar.jpg'

const TELEGRAM = 'https://t.me/codercoffee'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full px-5 pb-12 pt-20 text-center sm:px-8 md:px-10"
      style={{ background: '#0C0C0C', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <FadeIn
        as="h2"
        y={30}
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2rem, 7vw, 88px)' }}
      >
        Давайте работать
      </FadeIn>

      <FadeIn y={20} delay={0.15} className="mt-10 flex flex-col items-center gap-6">
        <span
          className="relative inline-flex h-24 w-24 overflow-hidden rounded-full"
          style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 20px 40px -20px #B600A8' }}
        >
          <img src={avatar} alt="Аватар" className="h-full w-full object-cover" />
        </span>

        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener"
          className="rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-opacity duration-200 hover:opacity-90 active:opacity-75"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid #E3E3E3',
            outlineOffset: -3
          }}
        >
          Написать в Telegram
        </a>

        <span className="text-sm text-white/45">Открыт для проектов</span>
      </FadeIn>

      <FadeIn y={10} delay={0.25} className="mt-14 text-xs text-white/35">
        © {new Date().getFullYear()} Портфолио. Демо-проекты вымышленные.
      </FadeIn>
    </footer>
  )
}
