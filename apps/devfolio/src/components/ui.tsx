import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

/** 1,232 px container — 22 px gutters below 640 px, 12 px above (no negative margins). */
export function Container({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1232px] px-[22px] sm:px-3', className)}>{children}</div>
  )
}

const EYEBROW_TONES = {
  /** Paper and `#edf1f7` grounds. */
  muted: 'text-muted',
  /** The navy hero. */
  hero: 'text-[#b9c7d9]',
  /** The blue contact panel. */
  panel: 'text-[#dbe7ff]',
} as const

/** Mono, 11.2 px, uppercase, 0.09em — the only label style on the page. */
export function Eyebrow({
  children,
  tone = 'muted',
  className,
}: {
  readonly children: ReactNode
  readonly tone?: keyof typeof EYEBROW_TONES
  readonly className?: string
}) {
  return (
    <span
      className={cn(
        'mb-[22px] block font-mono text-[0.7rem] uppercase leading-[1.75] tracking-[0.09em]',
        EYEBROW_TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

const ACTION_VARIANTS = {
  /** Hero primary: the only lime fill on the page. */
  lime: 'border-lime bg-lime text-navy hover:bg-[#c9ef5c] hover:text-navy',
  /** Hero secondary: transparent with a cool outline. */
  outlineLight: 'border-[#6b7e98] bg-transparent text-white hover:bg-white/10 hover:text-white',
  /** Every ink button below the hero. */
  ink: 'border-ink bg-ink text-white hover:bg-[#344459] hover:text-white',
  /** The contact panel's single action. */
  white: 'border-white bg-white text-brand hover:bg-[#eef3ff] hover:text-brand',
} as const

const ACTION_BASE =
  'inline-flex min-h-[47px] items-center justify-center gap-[25px] rounded-[5px] border px-[19px] py-3 text-[0.8rem] font-semibold leading-[1.4] no-underline transition-colors'

interface ActionProps {
  readonly children: ReactNode
  readonly variant?: keyof typeof ACTION_VARIANTS
  readonly className?: string
}

export function ActionLink({
  children,
  href,
  variant = 'ink',
  className,
}: ActionProps & { readonly href: string }) {
  return (
    <a href={href} className={cn(ACTION_BASE, ACTION_VARIANTS[variant], className)}>
      {children}
    </a>
  )
}

export function ActionButton({
  children,
  variant = 'ink',
  className,
  onClick,
}: ActionProps & { readonly onClick: (trigger: HTMLButtonElement) => void }) {
  return (
    <button
      type="button"
      onClick={(event) => onClick(event.currentTarget)}
      className={cn(ACTION_BASE, ACTION_VARIANTS[variant], className)}
    >
      {children}
    </button>
  )
}

/** Mono chip: 1 px hairline, 3 px radius. */
export function Tag({ children }: { readonly children: ReactNode }) {
  return (
    <li className="rounded-[3px] border border-line px-2 py-[3px] font-mono text-[0.66rem] leading-[1.75] text-[#4c5b6d]">
      {children}
    </li>
  )
}

/** Heading left, 330 px lede right — stacks below `lg` so the lede never crowds. */
export function SectionTop({
  eyebrow,
  heading,
  lede,
}: {
  readonly eyebrow: ReactNode
  readonly heading: ReactNode
  readonly lede: string
}) {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-[560px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-[clamp(2rem,4vw,3.3rem)]">{heading}</h2>
      </div>
      <p className="max-w-[330px] text-[0.88rem] leading-[1.75] text-muted">{lede}</p>
    </div>
  )
}

/** First focusable element; a white pill once focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-[10px] focus:z-[100] focus:rounded-[3px] focus:bg-white focus:p-3 focus:text-ink"
    >
      Skip to content
    </a>
  )
}
