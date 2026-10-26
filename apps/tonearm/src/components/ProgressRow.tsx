import type { Player } from '../hooks/usePlayer'

interface Variant {
  readonly label: string
  readonly track: string
  readonly fill: string
  readonly time: string
}

/**
 * The bar is a `progressbar`, not a `slider`: there is no audio to seek, so it
 * stays out of the tab order and a click leaves the value alone. Its unfilled
 * track is decorative — which is why the numeric times are printed next to it.
 */
const VARIANTS: Record<'podcast' | 'album', Variant> = {
  podcast: {
    label: 'Episode progress',
    track: 'bg-night-track',
    fill: 'bg-[linear-gradient(90deg,#ffb27a,#ff5f8f)]',
    time: 'text-night-muted',
  },
  album: {
    label: 'Song progress',
    track: 'bg-cream-track',
    fill: 'bg-teal',
    time: 'text-cream-muted',
  },
}

interface ProgressRowProps {
  readonly variant: 'podcast' | 'album'
  readonly player: Player
}

export function ProgressRow({ variant, player }: ProgressRowProps) {
  const theme = VARIANTS[variant]

  return (
    <div>
      <div
        role="progressbar"
        aria-label={theme.label}
        aria-valuemin={0}
        aria-valuemax={player.duration}
        aria-valuenow={player.now}
        aria-valuetext={player.valueText}
        className={`h-1.5 overflow-hidden rounded-full ${theme.track}`}
      >
        <span
          data-testid="tonearm-fill"
          style={{ width: `${player.percent}%` }}
          className={`tonearm-fill block h-full rounded-[inherit] transition-[width] duration-[250ms] ease-linear ${theme.fill}`}
        />
      </div>
      <div className={`mt-1.5 flex justify-between text-[12.5px] tabular-nums ${theme.time}`}>
        <span>{player.elapsedLabel}</span>
        <span>{player.remainingLabel}</span>
      </div>
    </div>
  )
}
