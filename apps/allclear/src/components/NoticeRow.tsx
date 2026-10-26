import type { CSSProperties, ReactElement } from 'react'
import { Check, Clock, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TONE_TOKENS, type Notice, type Tone } from '../data/notices'

/**
 * One 20 px glyph per tone: sun, tick, clock and — measured from the reference —
 * a bare exclamation with no ring around it, which is why the last one is drawn
 * here rather than taken from the icon set.
 */
const GLYPHS: Record<Tone, () => ReactElement> = {
  violet: () => <Sun aria-hidden="true" size={20} strokeWidth={2} className="block" />,
  green: () => <Check aria-hidden="true" size={20} strokeWidth={2.4} className="block" />,
  amber: () => <Clock aria-hidden="true" size={20} strokeWidth={2.2} className="block" />,
  rose: () => (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      className="block"
    >
      <path d="M12 7v6M12 16.5v.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  ),
}

interface NoticeRowProps {
  notice: Notice
  /** The row is collapsing and already out of the count. */
  leaving: boolean
  onDismiss: (notice: Notice) => void
  /** The collapse has finished — the row can be removed. */
  onSettled: (id: string) => void
  register: (button: HTMLButtonElement | null) => void
}

/**
 * One notice: a white 16 px-radius row with a tinted 40 × 40 icon tile, a title,
 * two lines of copy and a 36 × 36 dismiss button pinned to its top-right corner.
 *
 * The row is a `grid-template-rows: 1fr` track wrapped around an inner box with
 * `min-height: 0` and a 12 px `padding-bottom`; dismissing flips the track to
 * `0fr`, which is what animates the height. The 12 px padding sits outside the
 * track, so a sliver survives until the row is removed.
 */
export function NoticeRow({ notice, leaving, onDismiss, onSettled, register }: NoticeRowProps) {
  const tokens = TONE_TOKENS[notice.tone]
  const Glyph = GLYPHS[notice.tone]
  const vars = {
    '--tone': tokens.tone,
    '--soft': tokens.soft,
  } as CSSProperties

  return (
    <li
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'grid-template-rows') {
          onSettled(notice.id)
        }
      }}
      className={cn('notice-item', leaving && 'is-leaving')}
    >
      <div className="relative min-h-0 overflow-hidden pb-3">
        <div
          role={notice.role}
          data-tone={notice.tone}
          style={vars}
          className="flex items-start gap-3.5 rounded-2xl bg-white pt-4 pr-14 pb-4 pl-4 shadow-[0_1px_2px_rgba(28,26,51,.06),0_8px_20px_-12px_rgba(28,26,51,.25)] compact:gap-3 compact:p-[14px_48px_14px_14px]"
        >
          <span
            aria-hidden="true"
            className="grid size-10 flex-none place-items-center rounded-xl bg-[var(--soft)] text-[var(--tone)] compact:size-[34px] compact:rounded-[10px]"
          >
            <Glyph />
          </span>
          <div className="min-w-0 text-sm leading-[21px] text-muted">
            <p className="mt-0 mr-0 mb-0.5 ml-0 text-[15px] leading-[22.5px] font-bold text-ink">
              {notice.title}
            </p>
            <p className="m-0">{notice.text}</p>
          </div>
        </div>
        <button
          ref={register}
          type="button"
          aria-label={`Dismiss: ${notice.title}`}
          onClick={() => onDismiss(notice)}
          className="absolute top-2.5 right-2.5 grid size-9 place-items-center rounded-[10px] bg-transparent text-muted hover:bg-[#f0eef9] hover:text-ink active:bg-[#e4e0f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
            focusable="false"
            className="block"
          >
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}
