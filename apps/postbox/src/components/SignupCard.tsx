import { useEffect, useRef } from 'react'
import type { FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import type { CardCopy, CardVariant } from '../data'
import { useSignupForm } from '../lib/signup'
import { EnvelopeArt } from './EnvelopeArt'

/** Shared card box: both cards carry the 28 px radius and the 15.5 px re-base. */
const CARD = 'grid items-center overflow-hidden rounded-[28px] text-[15.5px] leading-[1.5]'

const SURFACE: Record<CardVariant, string> = {
  primary:
    'grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-2 bg-navy text-white shadow-[0_30px_60px_-36px_rgba(30,58,138,0.7)] max-[640px]:grid-cols-1',
  compact:
    'grid-cols-1 border border-line bg-white text-ink shadow-[0_20px_40px_-32px_rgba(30,58,138,0.5)]',
}

const HEADING: Record<CardVariant, 'h1' | 'h2'> = { primary: 'h1', compact: 'h2' }
const EYEBROW: Record<CardVariant, string> = { primary: 'text-gold', compact: 'text-navy-soft' }
const TITLE: Record<CardVariant, string> = {
  primary: 'text-[clamp(24px,2.6vw,32px)]',
  compact: 'text-[22px]',
}
const COPY: Record<CardVariant, string> = { primary: 'text-muted-navy', compact: 'text-muted' }
const INK: Record<CardVariant, string> = { primary: 'text-white', compact: 'text-ink' }
const ERROR: Record<CardVariant, string> = { primary: 'text-error-navy', compact: 'text-error' }
const BADGE: Record<CardVariant, string> = {
  primary: 'bg-error-navy text-navy',
  compact: 'bg-error text-white',
}
const FIELD: Record<CardVariant, string> = {
  primary: 'border-transparent focus:border-gold focus:shadow-[0_0_0_4px_rgba(253,224,71,0.35)]',
  compact: 'border-line-input focus:border-navy focus:shadow-[0_0_0_4px_rgba(30,58,138,0.2)]',
}
const ACTION: Record<CardVariant, string> = {
  primary: 'bg-gold text-ink focus-visible:outline-white',
  compact: 'mt-2.5 w-full bg-navy text-white focus-visible:outline-navy',
}

export interface SignupCardProps extends CardCopy {
  variant: CardVariant
}

/**
 * One signup card. The primary presentation carries the envelope art and wraps
 * its input and button in a wrapping row; the compact presentation drops both and
 * stacks a full-width button under its field. Everything else is shared, so the
 * two cards cannot drift apart.
 */
export function SignupCard({
  variant,
  eyebrow,
  title,
  body,
  label,
  placeholder,
  action,
  hint,
  doneTitle,
  doneBefore,
  doneAfter,
}: SignupCardProps) {
  const { value, error, done, address, change, submit } = useSignupForm()
  const inputRef = useRef<HTMLInputElement>(null)
  const doneRef = useRef<HTMLHeadingElement>(null)

  const headingId = `postbox-${variant}-title`
  const inputId = `postbox-${variant}-email`
  const errorId = `postbox-${variant}-error`
  const hintId = `postbox-${variant}-hint`

  useEffect(() => {
    if (done) doneRef.current!.focus()
  }, [done])

  const describedBy =
    error !== null ? (hint ? `${errorId} ${hintId}` : errorId) : hint ? hintId : undefined

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!submit()) (inputRef.current as HTMLInputElement).focus()
  }

  const Heading = HEADING[variant]

  const field = (
    <input
      ref={inputRef}
      id={inputId}
      name="email"
      type="email"
      required
      autoComplete="email"
      placeholder={placeholder}
      value={value}
      onChange={(event) => change(event.target.value)}
      aria-invalid={error !== null ? true : undefined}
      aria-describedby={describedBy}
      className={cn(
        'signup-input w-full min-w-0 flex-[1_1_220px] rounded-[14px] border-2 bg-white px-4 py-[13px] text-[16px] text-ink placeholder:text-placeholder focus:outline-none',
        error === null ? FIELD[variant] : 'border-invalid',
      )}
    />
  )

  const actionButton = (
    <button
      type="submit"
      className={cn(
        'signup-submit flex-none cursor-pointer rounded-[14px] border-0 px-[22px] py-[13px] text-[16px] font-extrabold focus-visible:outline-[3px] focus-visible:outline-offset-[3px]',
        ACTION[variant],
      )}
    >
      {action}
    </button>
  )

  const hintLine = hint && (
    <p id={hintId} className={cn('mt-2.5 text-[13px] leading-[1.5]', COPY[variant])}>
      {hint}
    </p>
  )

  const errorLine = error !== null && (
    <p
      id={errorId}
      role="alert"
      className={cn(
        'mt-2 flex items-center gap-1.5 text-[14px] font-bold leading-[1.5]',
        ERROR[variant],
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[12px] font-bold',
          BADGE[variant],
        )}
      >
        !
      </span>
      {error}
    </p>
  )

  const doneBlock = (
    <div className="signup-done">
      <span
        aria-hidden="true"
        className="mb-3.5 grid h-[52px] w-[52px] place-items-center rounded-full bg-tick"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-none stroke-white [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3]"
        >
          <path d="m5 12 5 5L20 7" />
        </svg>
      </span>
      <h3
        ref={doneRef}
        id={headingId}
        tabIndex={-1}
        className="m-0 mb-2 text-[26px] font-extrabold leading-[1.5] tracking-[-0.02em] focus:outline-none"
      >
        {doneTitle}
      </h3>
      <p className={cn('m-0 text-[15.5px] leading-[1.5]', COPY[variant])}>
        {doneBefore}
        <strong className={cn('[word-break:break-all]', INK[variant])}>{address}</strong>
        {doneAfter}
      </p>
    </div>
  )

  return (
    <section
      aria-labelledby={headingId}
      className={cn(CARD, SURFACE[variant])}
      data-variant={variant}
    >
      {variant === 'primary' && (
        <div className="grid min-h-[220px] place-items-center self-stretch bg-[radial-gradient(circle_at_50%_50%,rgba(79,110,247,0.75),transparent_62%)] p-6 max-[640px]:min-h-[160px]">
          <EnvelopeArt />
        </div>
      )}
      <div className="p-[clamp(24px,4vw,40px)]">
        {done ? (
          doneBlock
        ) : (
          <>
            <p className={cn('m-0 text-[13.5px] font-bold leading-[1.5]', EYEBROW[variant])}>
              {eyebrow}
            </p>
            <Heading
              id={headingId}
              // `leading-[1.1]` must come AFTER the size utility: tailwind-merge
              // treats a font-size class as owning the line height and would drop
              // an earlier `leading-*`, silently falling back to the card's 1.5.
              className={cn(
                'mt-2 mb-2.5 font-extrabold tracking-[-0.03em]',
                TITLE[variant],
                'leading-[1.1]',
              )}
            >
              {title}
            </Heading>
            <p className={cn('m-0 text-[15.5px] leading-[1.5]', COPY[variant])}>{body}</p>
            <form noValidate onSubmit={handleSubmit} className="mt-[22px]">
              <label htmlFor={inputId} className="mb-1.5 block text-[14px] font-bold leading-[1.5]">
                {label}
              </label>
              {variant === 'primary' ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {field}
                    {actionButton}
                  </div>
                  {hintLine}
                  {errorLine}
                </>
              ) : (
                <>
                  {field}
                  {errorLine}
                  {hintLine}
                  {actionButton}
                </>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  )
}
