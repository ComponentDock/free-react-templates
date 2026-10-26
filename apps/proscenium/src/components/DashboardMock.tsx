import { cn } from '@free-react-templates/ui'
import {
  BAR_HEIGHTS,
  CHART_PATH,
  CHART_VIEWBOX,
  KPIS,
  MOCK,
  RAIL_ACTIVE_INDEX,
  RAIL_ITEMS,
  TRANSACTIONS,
  type Kpi,
  type Transaction,
} from '../data/hero'

/** The fake browser bar: three traffic lights and a URL field. */
function MockChrome() {
  return (
    <div className="flex items-center gap-4 border-b border-line bg-mock-chrome px-4 py-3">
      <span className="flex gap-1.5" aria-hidden="true">
        <i className="h-2.5 w-2.5 rounded-full bg-[#fda4a4]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#fcd58a]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#9fe0b1]" />
      </span>
      <span className="max-w-[260px] flex-1 rounded-md bg-[#f0eff7] px-3 py-[3px] text-[12px] text-[#5e5f78] heroSm:text-[11px]">
        {MOCK.url}
      </span>
    </div>
  )
}

/** 56 px icon rail — deleted, not shrunk, on phones. */
function MockRail() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col items-center gap-[14px] border-r border-line bg-mock-chrome py-[18px] heroSm:hidden"
    >
      <span className="mb-[10px] h-[26px] w-[26px] rounded-lg bg-accent" />
      {Array.from({ length: RAIL_ITEMS }, (_, index) => (
        <span
          key={index}
          className={cn(
            'h-[22px] w-[22px] rounded-[7px] bg-rail-tile',
            index === RAIL_ACTIVE_INDEX &&
              'bg-[rgba(91,61,245,.22)] shadow-[0_0_0_5px_rgba(91,61,245,.08)]',
          )}
        />
      ))}
    </div>
  )
}

function KpiTile({ kpi }: { kpi: Kpi }) {
  return (
    <div
      className={cn(
        'grid gap-0.5 rounded-xl border border-line p-3',
        kpi.extra === true && 'heroSm:hidden',
      )}
    >
      <span className="text-[11.5px] font-semibold tracking-[.06em] text-kpi-label uppercase">
        {kpi.label}
      </span>
      <span className="text-[19px] font-extrabold tracking-[-.02em] heroSm:text-[17px]">
        {kpi.value}
      </span>
      <span
        className={cn(
          'justify-self-start rounded-md px-[7px] py-px text-[11.5px] font-bold',
          kpi.direction === 'up' ? 'bg-up-bg text-up-fg' : 'bg-down-bg text-down-fg',
        )}
      >
        {kpi.delta}
      </span>
    </div>
  )
}

/** Twelve bars that grow once, with a polyline laid over them. */
function RevenueChart() {
  const lastIndex = BAR_HEIGHTS.length - 1

  return (
    <div className="relative mt-3.5 h-[150px] rounded-xl bg-[linear-gradient(180deg,#faf9ff,#f3f1ff)] p-3 heroSm:h-[120px]">
      <div className="hero-bars flex h-full items-end gap-[6%] px-[2%]">
        {BAR_HEIGHTS.map((height, index) => (
          <span
            key={height}
            style={{ height: `${height}%` }}
            className={cn(
              'flex-1 origin-bottom animate-[grow_.9s_cubic-bezier(.2,.8,.2,1)_both] rounded-t-[5px] rounded-b-[2px] bg-bar',
              index === lastIndex && 'bg-accent',
            )}
          />
        ))}
      </div>
      <svg
        viewBox={CHART_VIEWBOX}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] text-accent-2"
      >
        <path
          d={CHART_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

function TransactionRow({ row }: { row: Transaction }) {
  return (
    <li className="flex items-center gap-2.5 border-b border-row-rule px-1 py-2 last:border-b-0 heroSm:[&:nth-child(3)]:hidden">
      <span
        style={{ backgroundColor: `color-mix(in srgb, ${row.color} 12%, #fff)`, color: row.color }}
        className="w-[34px] rounded-md py-0.5 text-center text-[11px] font-bold"
      >
        {row.chip}
      </span>
      <span className="flex-1 font-semibold">{row.name}</span>
      <span className="font-bold tabular-nums">{row.amount}</span>
    </li>
  )
}

/**
 * The whole right column: a dashboard that exists only as `<div>`s. It is one
 * `role="img"` to assistive tech, because none of the numbers are meant to be
 * tabbed through — the label names them instead.
 */
export function DashboardMock() {
  return (
    <div role="img" aria-label={MOCK.label} className="hero-mock">
      <MockChrome />
      <div className="grid grid-cols-[56px_1fr] heroSm:grid-cols-1">
        <MockRail />
        <div className="px-5 pt-[18px] pb-5 heroSm:p-3.5">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-bold">{MOCK.title}</span>
            <span className="rounded-lg border border-line px-[10px] py-1 text-[12px] text-range-ink">
              {MOCK.range}
            </span>
          </div>

          <div className="mt-3.5 grid grid-cols-3 gap-2.5 heroSm:grid-cols-2">
            {KPIS.map((kpi) => (
              <KpiTile key={kpi.label} kpi={kpi} />
            ))}
          </div>

          <RevenueChart />

          <ul className="mt-3 grid gap-0.5">
            {TRANSACTIONS.map((row) => (
              <TransactionRow key={row.name} row={row} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
