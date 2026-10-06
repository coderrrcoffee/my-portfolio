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
        Есть задача?
      </FadeIn>

      <FadeIn y={20} delay={0.15} className="mt-10 flex flex-col items-center gap-6">
        <span
          className="relative inline-flex h-24 w-24 overflow-hidden rounded-full"
          style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 24px 50px -30px rgba(0,0,0,0.9)' }}
        >
          <img src={avatar} alt="Аватар" className="h-full w-full object-cover" />
        </span>

        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener"
          className="rounded-full border border-white/20 bg-white/[0.04] text-white/90 font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.08] active:bg-white/[0.06]"
        >
          Написать в Telegram
        </a>

        <span className="text-sm text-white/45">На связи в Telegram</span>
      </FadeIn>

      <FadeIn y={10} delay={0.25} className="mt-14 text-xs text-white/35">
        © {new Date().getFullYear()} Портфолио. Демо-проекты вымышленные.
      </FadeIn>
    </footer>
  )
}
