import { useId } from 'react'

interface SparklineProps {
  accent: string
  /** The polyline's 120 × 40 unit coordinates; the area path is derived from it. */
  path: string
  label: string
}

/**
 * A stretched polyline with a fade-out area fill. `preserveAspectRatio="none"`
 * makes the stroke 2.04× thicker horizontally, so the line keeps its 2 px width
 * only through `vector-effect: non-scaling-stroke`.
 */
export function Sparkline({ accent, path, label }: SparklineProps) {
  const gradientId = `spark-${useId().replace(/[^A-Za-z0-9_-]/g, '')}`

  return (
    <svg
      viewBox="0 0 120 40"
      preserveAspectRatio="none"
      role="img"
      aria-label={label}
      className="mt-[14px] mb-[10px] block h-[56px] w-full overflow-visible"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity=".28" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={`${path} L120 40 L0 40 Z`} />
      <path
        d={path}
        fill="none"
        stroke={accent}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
