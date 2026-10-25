import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  /** Footer treatment on the dark ground. */
  light?: boolean
}

/**
 * The mark is drawn here rather than shipped as a file: an orange vessel glyph
 * beside `Kettle` with a letterspaced `WATER HEATERS` under it. The subtitle is
 * deliberately monospaced — it reads as a plate on an appliance.
 */
export function Wordmark({ light = false }: WordmarkProps) {
  return (
    <span className="flex items-center gap-2.5" data-testid="wordmark">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 flex-none">
        <rect width="32" height="32" rx="8" fill={light ? '#e99c31' : '#ae6211'} />
        <path d="M8 14h12a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H8z" fill="#fff8ec" />
        <path
          d="M23 16h1.6a2 2 0 0 1 0 4H23"
          stroke="#fff8ec"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M13 9c0 1.3-1.8 1.7-1.8 3M17 9c0 1.3-1.8 1.7-1.8 3"
          stroke="#ffedd0"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-xl font-bold tracking-tight',
            light ? 'text-white' : 'text-ink-800',
          )}
        >
          Kettle
        </span>
        <span
          className={cn(
            'mt-1 font-mono text-[10px] font-medium tracking-[0.22em] uppercase',
            light ? 'text-white/60' : 'text-ink-400',
          )}
        >
          Water Heaters
        </span>
      </span>
    </span>
  )
}
