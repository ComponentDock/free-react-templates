import { cn } from '@free-react-templates/ui'
import type { Track } from '../data'

interface TrackListProps {
  readonly tracks: readonly Track[]
  readonly currentIndex: number
  readonly onSelect: (index: number) => void
}

/**
 * Five rows, each one button. The number and the equaliser both sit in grid
 * cell 1 / 1 and swap by visibility, so selecting a track never shifts its name;
 * the name column is `min-width: 0` so a long title ellipses instead of
 * widening the row.
 */
export function TrackList({ tracks, currentIndex, onSelect }: TrackListProps) {
  return (
    <ol className="m-0 mb-4 list-none p-0">
      {tracks.map((track, index) => {
        const current = index === currentIndex
        return (
          <li key={track.n}>
            <button
              type="button"
              aria-current={current ? 'true' : undefined}
              aria-label={`${track.n}. ${track.name}, ${track.length}`}
              onClick={() => onSelect(index)}
              className={cn(
                'tonearm-row grid w-full grid-cols-[22px_1fr_auto] items-center gap-3 rounded-row border-0 px-3 py-2.5 text-left transition-colors duration-200',
                'hover:bg-row-hover aria-[current=true]:bg-teal-row aria-[current=true]:text-teal-ink aria-[current=true]:font-semibold aria-[current=true]:hover:bg-teal-row',
              )}
            >
              <span className="tonearm-num col-start-1 row-start-1 text-center text-[13px] tabular-nums text-cream-muted">
                {track.n}
              </span>
              <span
                aria-hidden="true"
                className="tonearm-eq col-start-1 row-start-1 h-3.5 items-end justify-center gap-0.5 [&>i]:h-full [&>i]:w-[3px] [&>i]:origin-bottom [&>i]:rounded-sm [&>i]:bg-teal"
              >
                <i />
                <i />
                <i />
              </span>
              <span className="col-start-2 row-start-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {track.name}
              </span>
              <span className="col-start-3 row-start-1 text-[13px] tabular-nums text-cream-muted">
                {track.length}
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}
