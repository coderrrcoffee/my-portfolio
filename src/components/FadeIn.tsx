import { motion } from 'framer-motion'
import { useMemo, type CSSProperties, type ElementType, type ReactNode } from 'react'

type FadeInProps = {
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: CSSProperties
  as?: ElementType
  children?: ReactNode
} & Record<string, unknown>

/**
 * Reusable fade/slide-in wrapper.
 * `as` lets any HTML element be animated (motion.create for custom components,
 * motion[tag] for plain intrinsic tags).
 */
export default function FadeIn({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = 'div',
  children,
  ...rest
}: FadeInProps) {
  const MotionTag = useMemo(() => {
    if (typeof as === 'string') return (motion as any)[as]
    return motion.create(as as any)
  }, [as]) as ElementType

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
