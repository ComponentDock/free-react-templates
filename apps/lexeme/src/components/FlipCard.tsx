import { useState } from 'react'
import type { CSSProperties, KeyboardEvent, PointerEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { DECK_SIZE, type DeckCard } from '../data/deck'

interface FlipCardProps {
  card: DeckCard
  /** Position in the deck, printed as `Card N of DECK_SIZE`. */
  index: number
}

/** Two per-card custom properties, re-set inline on every list item. */
type FlipVars = CSSProperties & { '--face': string; '--ink': string }

/**
 * A pointer that can hover is a mouse or a pen; a finger cannot. The hover flip
 * itself is pure CSS (`.flip-card:hover` inside `@media (hover: hover)`), so
 * this only exists to keep `aria-hidden` on the *visible* face — without it a
 * screen reader reads the back while the eye sees the front.
 */
function hovers(event: PointerEvent<HTMLButtonElement>) {
  return event.pointerType !== 'touch'
}

/**
 * One flashcard: a coloured front (pill, word, pronunciation, flip hint) and a
 * white back (meaning, example, translation, counter). Both faces share one grid
 * cell and one 3D context, so the card is 320 px tall until copy genuinely needs
 * more room — it grows rather than clipping the counter.
 */
export function FlipCard({ card, index }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [manual, setManual] = useState(false)
  const [hovered, setHovered] = useState(false)

  /** The face a sighted user is looking at: a manual flip, or a mouse hovering a card that is not latched yet. */
  const showBack = flipped || (hovered && !manual)

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape' && flipped) setFlipped(false)
  }

  return (
    <li
      data-flipped={flipped ? '' : undefined}
      data-manual={manual ? '' : undefined}
      style={{ '--face': card.face, '--ink': card.ink } as FlipVars}
      className="flip-card relative min-h-80 text-[15px] leading-[1.45] [perspective:1200px]"
    >
      {/* The whole tile is the control: absolute, transparent, tile-radius, so a
          click anywhere — pill, word, hint — lands on it. */}
      <button
        type="button"
        aria-pressed={flipped}
        onClick={() => {
          setManual(true)
          setFlipped(!flipped)
        }}
        onKeyDown={handleKeyDown}
        onPointerEnter={(event) => {
          if (hovers(event)) setHovered(true)
        }}
        onPointerLeave={(event) => {
          if (hovers(event)) setHovered(false)
        }}
        className="flip-card__toggle absolute inset-0 z-[3] w-full rounded-3xl bg-transparent"
      >
        <span className="sr-only">Flip card: {card.word}</span>
      </button>

      <div className="flip-card__inner grid min-h-[inherit] [transform-style:preserve-3d]">
        <div
          data-face="front"
          aria-hidden={showBack}
          className="flip-card__face flip-card__front relative col-start-1 row-start-1 flex flex-col overflow-hidden rounded-3xl bg-[var(--face)] p-6 text-[var(--ink)] shadow-[0_18px_36px_-20px_rgba(30,27,46,.5)] [backface-visibility:hidden]"
        >
          <span className="m-0 self-start rounded-full border-[1.5px] border-current px-2.5 py-1 text-[13px] font-semibold">
            {card.pos}
          </span>
          <p
            className="mb-1 mt-auto text-[clamp(32px,3vw,40px)] font-extrabold leading-none tracking-[-0.03em]"
            lang="es"
          >
            {card.word}
          </p>
          <p
            data-say
            className={cn('mb-auto mt-0 text-[15px] font-semibold', card.quietSay && 'opacity-85')}
          >
            {card.say}
          </p>
          <span className="relative z-[1] inline-flex items-center gap-1.5 self-end text-sm font-semibold">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[18px] w-[18px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"
            >
              <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5" />
            </svg>
            Flip
          </span>
          {/* A quarter disc parked 40 px outside the face: clipped on purpose,
              so the front's scrollHeight always reads 40 px more than its height. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/[0.18]"
          />
        </div>

        <div
          data-face="back"
          aria-hidden={!showBack}
          className="flip-card__face flip-card__back col-start-1 row-start-1 flex flex-col overflow-hidden rounded-3xl border-2 border-[var(--face)] bg-white p-6 text-ink shadow-[0_18px_36px_-20px_rgba(30,27,46,.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="m-0 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent">
            Meaning
          </p>
          <p className="mb-3.5 mt-2 text-[19px] font-semibold leading-[1.3]">{card.meaning}</p>
          <p className="m-0 rounded-xl bg-well px-3 py-2.5 text-[15px] font-semibold" lang="es">
            {card.example}
          </p>
          <p className="mb-0 mt-1.5 text-sm text-muted">{card.translation}</p>
          <span className="mt-auto pt-3 text-[13px] font-semibold text-muted">
            Card {index + 1} of {DECK_SIZE}
          </span>
        </div>
      </div>
    </li>
  )
}
