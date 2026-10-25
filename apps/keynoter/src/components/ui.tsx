import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

/** The reference's 1140px container with a 15px gutter. */
export function Container({
  className,
  children,
}: {
  readonly className?: string
  readonly children: ReactNode
}) {
  return <div className={cn('shell', className)}>{children}</div>
}

/**
 * 60px / weight 900 `#272727` band heading with the reference's 88px of
 * breathing room below it.
 */
export function SectionTitle({
  id,
  className,
  children,
}: {
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
}) {
  return (
    <h2
      id={id}
      className={cn(
        'text-center text-[36px] leading-[1.2] font-black text-ink md:text-[48px] lg:text-[60px]',
        'mb-[50px] lg:mb-[88px]',
        className,
      )}
    >
      {children}
    </h2>
  )
}

/**
 * Magenta→indigo grade over a neutral photo. The reference bakes the tint into
 * its JPEGs; the recreation lays one CSS gradient over a placeholder instead so
 * the duotone reads identically on every band.
 */
export function Duotone({
  src,
  alt,
  className,
  imgClassName,
}: {
  readonly src: string
  readonly alt: string
  readonly className?: string
  readonly imgClassName?: string
}) {
  return (
    <div className={cn('duotone', className)}>
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  )
}
