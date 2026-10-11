import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'
import { COLOR_LABELS, OUTLINE_COLORS } from './KitButton'

const BAR_FILLS: Record<string, string> = {
  success: 'bg-flair-success',
  info: 'bg-flair-info',
  warning: 'bg-flair-warning',
  danger: 'bg-flair-danger',
}

const PROGRESS_BARS: { color: string; value: number }[] = [
  { color: 'success', value: 25 },
  { color: 'info', value: 50 },
  { color: 'warning', value: 75 },
  { color: 'danger', value: 100 },
]

const BADGE_FILLS: Record<string, string> = {
  primary: 'bg-flair-primary',
  secondary: 'bg-flair-secondary',
  success: 'bg-flair-success',
  danger: 'bg-flair-danger',
  warning: 'bg-flair-warning',
  info: 'bg-flair-info',
  light: 'bg-flair-light text-body',
  dark: 'bg-flair-dark',
}

type Pager = 'primary' | 'secondary' | 'info'

const PAGER_ACTIVE: Record<Pager, string> = {
  primary: 'bg-flair-primary shadow-page-primary',
  secondary: 'bg-flair-secondary shadow-page-secondary',
  info: 'bg-flair-info shadow-page-info',
}

const PAGERS: { variant: Pager; initial: number; pages: (number | 'gap')[] }[] = [
  { variant: 'info', initial: 1, pages: [1, 2, 3] },
  { variant: 'primary', initial: 1, pages: [1, 2, 3] },
  { variant: 'secondary', initial: 5, pages: ['gap', 5, 6, 7, 8, 9, 'gap'] },
]

const PREV_LABEL: Record<Pager, string> = { primary: '«', secondary: 'Prev', info: '«' }
const NEXT_LABEL: Record<Pager, string> = { primary: '»', secondary: 'Next', info: '»' }

/** One pagination row: 40px round page links whose active page is filled. */
function PagerRow({
  variant,
  pages,
  active,
  onSelect,
}: {
  variant: Pager
  pages: (number | 'gap')[]
  active: number
  onSelect: (page: number) => void
}) {
  const values = pages.filter((page): page is number => typeof page === 'number')
  const first = Math.min(...values)
  const last = Math.max(...values)

  return (
    <nav aria-label={`${variant} pagination`} className="mb-4">
      <ul className="flex items-center">
        <li>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => onSelect(Math.max(first, active - 1))}
            className="h-10 w-10 cursor-pointer text-[13px] tracking-wider text-flair-secondary"
          >
            {PREV_LABEL[variant]}
          </button>
        </li>
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <li key={page}>
              <button
                type="button"
                onClick={() => onSelect(page)}
                aria-current={page === active ? 'page' : undefined}
                className={cn(
                  'h-10 w-10 cursor-pointer rounded-full text-[13px] text-black transition-colors',
                  page === active && cn('text-white', PAGER_ACTIVE[variant]),
                )}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={`gap-${index}`}>
              <span className="flex h-10 w-10 items-center justify-center text-[13px] tracking-wider text-flair-secondary">
                ...
              </span>
            </li>
          ),
        )}
        <li>
          <button
            type="button"
            aria-label="Next"
            onClick={() => onSelect(Math.min(last, active + 1))}
            className="h-10 w-10 cursor-pointer text-[13px] tracking-wider text-flair-secondary"
          >
            {NEXT_LABEL[variant]}
          </button>
        </li>
      </ul>
    </nav>
  )
}

/** Sliders, badges, progress bars and pagination in a two-row two-column band. */
export function SliderBadgePagerProgress() {
  const [rows, setRows] = useState(() =>
    PAGERS.map((pager) => ({ ...pager, active: pager.initial })),
  )

  const select = (pagerIndex: number, page: number) =>
    setRows((previous) =>
      previous.map((row, i) => (i === pagerIndex ? { ...row, active: page } : row)),
    )

  return (
    <Band>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading className="mb-5">Sliders</SectionHeading>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            aria-label="Slider"
            className="h-1 w-full cursor-pointer appearance-none bg-hairline accent-flair-primary"
          />
          <div aria-hidden="true" className="relative mb-8 h-1 translate-y-8 bg-hairline">
            <span className="absolute top-0 left-1/4 h-1 w-1/2 bg-flair-primary" />
            <span className="absolute -top-1.5 left-1/4 h-4 w-4 rounded-full border border-gray-200 bg-white shadow" />
            <span className="absolute -top-1.5 left-3/4 h-4 w-4 rounded-full border border-gray-200 bg-white shadow" />
          </div>
        </div>

        <div>
          <SectionHeading className="mb-5">Default Badges</SectionHeading>
          <div className="mb-8 flex flex-wrap gap-1">
            {OUTLINE_COLORS.map((color) => (
              <span
                key={color}
                className={cn(
                  'inline-block px-3 py-1 text-[11px] font-normal tracking-wide text-white uppercase',
                  BADGE_FILLS[color],
                )}
              >
                {COLOR_LABELS[color]}
              </span>
            ))}
          </div>

          <SectionHeading className="mb-4">Pill Badges</SectionHeading>
          <div className="flex flex-wrap gap-1">
            {OUTLINE_COLORS.map((color) => (
              <span
                key={color}
                className={cn(
                  'inline-block rounded-full px-3 py-1 text-[11px] font-normal tracking-wide text-white uppercase',
                  BADGE_FILLS[color],
                )}
              >
                {COLOR_LABELS[color]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading className="mb-5">Pagination</SectionHeading>
          {rows.map((row, index) => (
            <PagerRow
              key={row.variant}
              variant={row.variant}
              pages={row.pages}
              active={row.active}
              onSelect={(page) => select(index, page)}
            />
          ))}
        </div>

        <div>
          <SectionHeading className="mb-5">Progress Bars</SectionHeading>
          <div className="mb-8 space-y-4">
            {PROGRESS_BARS.map(({ color, value }) => (
              <div key={color} className="h-[7px] w-full bg-gray-200">
                <div
                  role="progressbar"
                  aria-label={`${color} progress`}
                  aria-valuenow={value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: `${value}%` }}
                  className={cn('h-[7px]', BAR_FILLS[color])}
                />
              </div>
            ))}
          </div>

          <SectionHeading className="mb-1">Progress Bars with percent</SectionHeading>
          <div className="flex">
            <span>WordPress</span>
            <strong className="ml-auto font-normal">94%</strong>
          </div>
          <div className="h-[7px] w-full bg-gray-200">
            <div
              role="progressbar"
              aria-label="WordPress progress"
              aria-valuenow={94}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '94%' }}
              className="h-[7px] bg-flair-success"
            />
          </div>
        </div>
      </div>
    </Band>
  )
}
