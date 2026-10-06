import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import FadeIn from './FadeIn'

const TEXT =
  'Более пяти лет я занимаюсь дизайном — брендинг, веб-дизайн и пользовательский опыт. Мне особенно интересно работать с бизнесами, которые хотят выделяться и выглядеть на максимум. Давайте создадим что-то впечатляющее вместе!'

const CORNERS = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    x: -80,
    delay: 0.1
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    x: -80,
    delay: 0.25
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    x: 80,
    delay: 0.15
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    x: 80,
    delay: 0.3
  }
]

function Char({
  char,
  index,
  total,
  progress
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = Math.max(0, index / total - 0.1)
  const end = Math.min(1, index / total + 0.05)
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const display = char === ' ' ? '\u00A0' : char

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }} aria-hidden="true">
        {display}
      </span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>{display}</motion.span>
    </span>
  )
}

export default function AboutMe() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'] as never
  })
  const chars = Array.from(TEXT)

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {CORNERS.map((c) => (
        <FadeIn
          key={c.src}
          as="img"
          x={c.x}
          y={0}
          delay={c.delay}
          duration={0.9}
          src={c.src}
          alt=""
          aria-hidden="true"
          className={`absolute z-0 h-auto select-none pointer-events-none ${c.className}`}
        />
      ))}

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h1"
            y={40}
            delay={0}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Обо мне
          </FadeIn>

          <p
            ref={ref}
            className="text-center font-medium leading-relaxed"
            style={{ color: '#D7E2EA', maxWidth: 560, fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            {chars.map((c, i) => (
              <Char key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
            ))}
          </p>
        </div>

        <FadeIn
          as="a"
          y={20}
          delay={0.3}
          href="#contact"
          className="rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-opacity duration-200 hover:opacity-90 active:opacity-75"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid #E3E3E3',
            outlineOffset: -3
          }}
        >
          Связаться
        </FadeIn>
      </div>
    </section>
  )
}
