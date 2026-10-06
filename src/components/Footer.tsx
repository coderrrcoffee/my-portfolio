import FadeIn from './FadeIn'

export default function Footer() {
  return (
    <footer id="contact" className="w-full px-5 sm:px-8 md:px-10 pt-16 pb-12 text-center" style={{ background: '#0C0C0C' }}>
      <FadeIn
        as="h2"
        y={30}
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2rem, 7vw, 88px)' }}
      >
        Давайте работать
      </FadeIn>

      <FadeIn y={20} delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm uppercase tracking-widest text-white/70">
        <a className="transition-opacity hover:opacity-100 opacity-80" href="https://t.me/" target="_blank" rel="noopener">Telegram</a>
        <a className="transition-opacity hover:opacity-100 opacity-80" href="mailto:hello@example.com">Email</a>
        <a className="transition-opacity hover:opacity-100 opacity-80" href="https://github.com/coderrrcoffee" target="_blank" rel="noopener">GitHub</a>
      </FadeIn>

      <FadeIn y={10} delay={0.25} className="mt-14 text-xs text-white/35">
        © {new Date().getFullYear()} Портфолио. Демо-проекты вымышленные.
      </FadeIn>
    </footer>
  )
}
