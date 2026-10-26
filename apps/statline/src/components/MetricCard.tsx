import type { CSSProperties } from 'react'
import type { Metric } from '../content'
import { Sparkline } from './Sparkline'

const TONE: Record<Metric['tone'], string> = {
  good: 'bg-[#dcfce7] text-[#15803d]',
  bad: 'bg-[#ffe4e6] text-[#be123c]',
}

const ARROW: Record<Metric['direction'], string> = {
  up: 'M8 13V3M4 7l4-4 4 4',
  down: 'M8 3v10M4 9l4 4 4-4',
}

interface MetricCardProps {
  metric: Metric
}

/**
 * One metric plate. The stack is fixed — 34 icon row, value, pill, 56 spark,
 * hairline footnote — so all four cards are the same height at every width
 * without a spacer. Hover moves only the border and the shadow.
 */
export function MetricCard({ metric }: MetricCardProps) {
  return (
    <li
      className="relative flex flex-col rounded-2xl border border-[#e2e8f0] bg-white px-5 pb-4 pt-5 text-[14px] leading-[1.4] text-[#0f172a] shadow-[0_1px_2px_rgba(15,23,42,.04)] transition-[border-color,box-shadow] duration-200 ease-[ease] hover:border-[#cbd5e1] hover:shadow-[0_10px_28px_-18px_rgba(15,23,42,.35)] motion-reduce:transition-none motion-reduce:duration-0"
      style={{ '--accent': metric.accent } as CSSProperties}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="m-0 text-[14px] font-medium text-[#475569]">{metric.label}</h2>
        <span
          className="metric-icon grid h-[34px] w-[34px] place-items-center rounded-[10px]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] fill-none stroke-current"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {metric.icon.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
        </span>
      </div>

      <p className="mb-[6px] mt-[10px] text-[30px] font-bold leading-[1.1] tracking-[-.03em] tabular-nums">
        {metric.value}
      </p>

      <p
        className={`inline-flex items-center gap-1 self-start rounded-full pb-[3px] pl-[6px] pr-[8px] pt-[3px] text-[13px] font-semibold tabular-nums ${TONE[metric.tone]}`}
      >
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="h-[14px] w-[14px] fill-none stroke-current"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={ARROW[metric.direction]} />
        </svg>
        {metric.delta}
        <span className="absolute h-px w-px overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)] [clip-path:inset(50%)]">
          {metric.deltaNote}
        </span>
      </p>

      <Sparkline accent={metric.accent} path={metric.sparkPath} label={metric.sparkLabel} />

      <p className="m-0 border-t border-[#eef2f7] pt-3 text-[13px] text-[#64748b]">{metric.foot}</p>
    </li>
  )
}
