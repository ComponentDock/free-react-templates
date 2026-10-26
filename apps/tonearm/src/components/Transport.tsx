import { useState } from 'react'
import type { Player } from '../hooks/usePlayer'
import { BackIcon, ForwardIcon, PauseIcon, PlayIcon, QueueIcon } from './icons'

const CIRCLE =
  'tonearm-skip grid size-[46px] place-items-center rounded-full border-0 bg-transparent p-0 text-night-ink transition-colors duration-200 hover:bg-white/10 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-amber'

const SKIP_GLYPH = 'absolute text-[9px] font-bold'

interface TransportProps {
  readonly player: Player
}

/**
 * Five controls, 8 px apart: speed, −15, play, +30, queue. The row is sized so
 * that 46 + 8 + 46 + 8 + 68 + 8 + 46 + 8 + 46 = 284 leaves the play disc
 * optically centred by `justify-between` rather than by positioning — and it
 * compresses below 340 px exactly as the reference does.
 *
 * The queue button is a real toggle here; in the reference it is a drawn
 * control with no handler at all.
 */
export function Transport({ player }: TransportProps) {
  const [queued, setQueued] = useState(false)

  return (
    <div className="mt-[14px] flex items-center justify-between gap-2">
      <button
        type="button"
        aria-label={`Playback speed ${player.rateLabel}`}
        onClick={player.cycleRate}
        className="tonearm-speed relative grid size-[46px] place-items-center rounded-full border-0 bg-transparent p-0 text-[14px] font-semibold text-night-ink transition-colors duration-200 hover:bg-white/10 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-amber"
      >
        <span aria-hidden="true">{player.rateLabel}</span>
      </button>

      <button type="button" aria-label="Back 15 seconds" onClick={() => player.skip(-15)} className={CIRCLE}>
        <BackIcon className="h-[26px] w-[26px]" />
        <span aria-hidden="true" className={SKIP_GLYPH}>
          15
        </span>
      </button>

      <button
        type="button"
        aria-pressed={player.playing}
        aria-label={player.playing ? 'Pause' : 'Play'}
        onClick={player.toggle}
        className="tonearm-play grid size-[68px] place-items-center rounded-full border-0 bg-white p-0 text-night shadow-play transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-amber"
      >
        <PlayIcon className="tonearm-i-play col-start-1 row-start-1 h-7 w-7" />
        <PauseIcon className="tonearm-i-pause col-start-1 row-start-1 h-7 w-7" />
      </button>

      <button type="button" aria-label="Forward 30 seconds" onClick={() => player.skip(30)} className={CIRCLE}>
        <ForwardIcon className="h-[26px] w-[26px]" />
        <span aria-hidden="true" className={SKIP_GLYPH}>
          30
        </span>
      </button>

      <button
        type="button"
        aria-pressed={queued}
        aria-label={queued ? 'Added to queue' : 'Add to queue'}
        onClick={() => setQueued((wasQueued) => !wasQueued)}
        className="tonearm-speed grid size-[46px] place-items-center rounded-full border-0 bg-transparent p-0 text-night-ink transition-colors duration-200 hover:bg-white/10 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-amber"
      >
        <QueueIcon className="h-[22px] w-[22px]" />
      </button>
    </div>
  )
}
