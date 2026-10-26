import { ALBUM } from '../data'
import { usePlayer } from '../hooks/usePlayer'
import { AlbumCover, PauseIcon, PlayIcon } from './icons'
import { ProgressRow } from './ProgressRow'
import { TrackList } from './TrackList'

/**
 * The cream half. Its head is a 120 px cover plus a text column whose stack
 * (eyebrow, title, byline, 44 px disc) is 133 px tall by arithmetic, and its
 * `<ol>` of five rows is the list whose play state moves in place. The card has
 * its own clock: the two players never share state.
 */
export function AlbumCard() {
  const player = usePlayer({
    duration: ALBUM.tracks[0]!.duration,
    elapsed: 0,
    tracks: ALBUM.tracks,
  })

  return (
    <section
      aria-labelledby="tonearm-album"
      data-playing={player.playing}
      className="tonearm-card rounded-card bg-cream p-[22px] text-[15px] leading-[1.45] text-cream-ink shadow-card"
    >
      <div className="mb-4 flex items-center gap-[18px]">
        <div
          aria-hidden="true"
          className="tonearm-cover size-[120px] flex-none overflow-hidden rounded-cover-sm bg-[linear-gradient(180deg,#14b8a6,#5eead4_55%,#fde68a)]"
        >
          <AlbumCover />
        </div>
        <div>
          <p className="m-0 text-[13px] font-semibold tracking-[.04em] text-teal">
            {ALBUM.eyebrow}
          </p>
          <h2
            id="tonearm-album"
            className="mt-1 mb-1 text-[24px] leading-[1.25] font-bold tracking-[-.01em]"
          >
            {ALBUM.title}
          </h2>
          <p className="m-0 text-[14px] text-cream-muted">{ALBUM.byline}</p>
          <button
            type="button"
            aria-pressed={player.playing}
            aria-label={player.playing ? 'Pause' : 'Play'}
            onClick={player.toggle}
            className="tonearm-play mt-3 grid size-[44px] place-items-center rounded-full border-0 bg-teal p-0 text-white shadow-play-sm transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            <PlayIcon className="tonearm-i-play col-start-1 row-start-1 h-5 w-5" />
            <PauseIcon className="tonearm-i-pause col-start-1 row-start-1 h-5 w-5" />
          </button>
        </div>
      </div>

      <TrackList
        tracks={ALBUM.tracks}
        currentIndex={player.currentIndex}
        onSelect={player.selectTrack}
      />
      <ProgressRow variant="album" player={player} />
    </section>
  )
}
