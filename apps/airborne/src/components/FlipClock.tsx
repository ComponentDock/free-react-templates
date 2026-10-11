import { Fragment, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { resolveTarget } from '../lib/countdown'

export interface FlipClockProps {
  className?: string
}

interface ClockGroup {
  key: 'days' | 'hours' | 'minutes' | 'seconds'
  caption: string
  colon: boolean
  first: 0 | 2 | 4 | 6
  second: 1 | 3 | 5 | 7
}

/** Four groups of two cards, separated by a divider that carries the caption. */
const GROUPS: readonly ClockGroup[] = [
  { key: 'days', caption: 'days', colon: false, first: 0, second: 1 },
  { key: 'hours', caption: 'hrs', colon: true, first: 2, second: 3 },
  { key: 'minutes', caption: 'min', colon: true, first: 4, second: 5 },
  { key: 'seconds', caption: 'sec', colon: true, first: 6, second: 7 },
]

interface FlipDividerProps {
  testId: string
  caption: string
  colon: boolean
}

/**
 * The 26×54 separator between two card pairs: a white monospaced colon (absent
 * before the day pair) plus a tiny uppercase caption sitting just past the
 * divider's bottom-right corner, which is where the design anchors it.
 */
function FlipDivider({ testId, caption, colon }: FlipDividerProps) {
  return (
    <div data-testid={testId} className="relative h-[54px] w-[26px]">
      {colon ? (
        <span className="flex h-full w-full items-center justify-center font-clock text-[30px] leading-none text-white">
          :
        </span>
      ) : null}

      <span
        className={cn(
          'absolute top-full left-full w-[90px] pt-[16px]',
          'text-center font-sans text-[12px] leading-none text-white uppercase',
        )}
      >
        {caption}
      </span>
    </div>
  )
}

interface FlipCardProps {
  testId: string
  value: string
  previous: string
  changed: boolean
  tick: number
}

/**
 * One flip card: a static pair of windows showing the current digit, plus — on
 * a change — the design's falling old upper half and rising new lower half,
 * each with its own shading overlay. The leaves are keyed on the tick so a
 * change replays the animation while untouched cards stay put.
 */
function FlipCard({ testId, value, previous, changed, tick }: FlipCardProps) {
  return (
    <div
      data-testid={testId}
      className="relative z-[1] m-[2px] mb-[50px] h-[54px] w-[41px] [perspective:200px]"
    >
      <div className="flip-half flip-half-up">
        <span className="flip-digit font-clock text-[35px] leading-none text-white">{value}</span>
      </div>

      <div className="flip-half flip-half-down">
        <span className="flip-digit font-clock text-[35px] leading-none text-white">
          {changed ? previous : value}
        </span>
      </div>

      {changed ? (
        <Fragment key={tick}>
          <div
            data-testid={`${testId}-fall`}
            className="flip-half flip-half-up z-[2] animate-flip-turn-back"
          >
            <span className="flip-digit font-clock text-[35px] leading-none text-white">
              {previous}
            </span>
            <span
              data-testid={`${testId}-shadow-up`}
              className="flip-shadow animate-flip-show bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),#000000)]"
            />
          </div>

          <div
            data-testid={`${testId}-rise`}
            className="flip-half flip-half-down z-[3] animate-flip-turn"
          >
            <span className="flip-digit font-clock text-[35px] leading-none text-white">
              {value}
            </span>
            <span
              data-testid={`${testId}-shadow-down`}
              className="flip-shadow animate-flip-hide bg-[linear-gradient(to_bottom,#000000,rgba(0,0,0,0.1))]"
            />
          </div>
        </Fragment>
      ) : null}
    </div>
  )
}

/**
 * Eight dark navy cards in four digit pairs, ticking once a second toward the
 * design's launch offset. The whole row wraps inside the design's max width.
 */
export function FlipClock({ className }: FlipClockProps) {
  const [target] = useState(() => resolveTarget())
  const { digits, previous, changed, tick } = useCountdown(target)

  return (
    <div
      data-testid="flip-clock"
      className={cn(
        'relative flex max-w-full flex-wrap mb-[20px]',
        'max-[1200px]:justify-center max-[576px]:mr-[26px] max-[576px]:max-w-[240px]',
        className,
      )}
    >
      {GROUPS.map((group) => (
        <Fragment key={group.key}>
          <FlipDivider
            testId={`flip-divider-${group.key}`}
            caption={group.caption}
            colon={group.colon}
          />

          <FlipCard
            testId={`flip-card-${group.key}-0`}
            value={digits[group.first]}
            previous={previous[group.first]}
            changed={Boolean(changed[group.first])}
            tick={tick}
          />

          <FlipCard
            testId={`flip-card-${group.key}-1`}
            value={digits[group.second]}
            previous={previous[group.second]}
            changed={Boolean(changed[group.second])}
            tick={tick}
          />
        </Fragment>
      ))}
    </div>
  )
}
