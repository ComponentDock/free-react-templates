import type { RefObject } from 'react'
import { Play } from 'lucide-react'
import { DIALOG_ID, PLAY, SHOP } from '../data/site'

interface ActionRowProps {
  readonly onPlay: () => void
  readonly playRef: RefObject<HTMLButtonElement | null>
}

/**
 * A white disc that opens the film beside an outlined pill that leaves for the
 * shop. The rings around the disc are the disc's own pseudo-elements, so the
 * button's box never changes size while they expand.
 */
export function ActionRow({ onPlay, playRef }: ActionRowProps) {
  return (
    <div className="ap-actions">
      <button
        type="button"
        ref={playRef}
        className="ap-play"
        aria-haspopup="dialog"
        aria-controls={DIALOG_ID}
        onClick={onPlay}
      >
        <span className="ap-play-disc" aria-hidden="true">
          <Play size={22} fill="currentColor" strokeWidth={0} />
        </span>
        <span className="ap-play-text">
          {PLAY.label}
          <span>{PLAY.duration}</span>
        </span>
      </button>

      <a className="ap-shop" href={SHOP.href} target="_blank" rel="noreferrer noopener">
        {SHOP.label}
      </a>
    </div>
  )
}
