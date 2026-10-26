import { PODCAST } from '../data'
import { usePlayer } from '../hooks/usePlayer'
import { PodcastCover } from './icons'
import { ProgressRow } from './ProgressRow'
import { Transport } from './Transport'

/**
 * The dark half of the pair. Its cover is the card's full content width and
 * square (`aspect-ratio: 1`), so the card's height follows the grid track — the
 * two cards are the same width and the same radius, and this one is simply
 * taller. `data-playing` is the single switch the equaliser, the sun pulse and
 * the icon swap all key off.
 */
export function PodcastCard() {
  const player = usePlayer({ duration: PODCAST.duration, elapsed: PODCAST.elapsed })

  return (
    <section
      aria-labelledby="tonearm-episode"
      data-playing={player.playing}
      className="tonearm-card rounded-card bg-night p-[22px] text-[15px] leading-[1.45] text-night-ink shadow-card"
    >
      <div
        aria-hidden="true"
        className="tonearm-cover relative aspect-square overflow-hidden rounded-cover bg-[linear-gradient(160deg,#3a0ca3,#7209b7_60%,#b5179e)]"
      >
        <PodcastCover />
        <span className="absolute top-5 left-[22px] text-[clamp(30px,6vw,44px)] leading-[.95] font-bold tracking-[-.04em] text-white">
          {PODCAST.coverLines[0]}
          <br />
          {PODCAST.coverLines[1]}
        </span>
      </div>

      <div className="mt-5 mb-4">
        <p className="m-0 text-[13px] font-semibold tracking-[.04em] text-amber">
          {PODCAST.eyebrow}
        </p>
        <h2
          id="tonearm-episode"
          className="mt-1 mb-1 text-[21px] leading-[1.25] font-bold tracking-[-.01em]"
        >
          {PODCAST.title}
        </h2>
        <p className="m-0 text-[14px] text-night-muted">{PODCAST.byline}</p>
      </div>

      <ProgressRow variant="podcast" player={player} />
      <Transport player={player} />
    </section>
  )
}
