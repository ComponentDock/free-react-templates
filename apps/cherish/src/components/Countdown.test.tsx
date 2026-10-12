import { render, screen, within } from '@testing-library/react'
import { Countdown } from './Countdown'
import {
  COUNTDOWN_DONE,
  COUNTDOWN_EYEBROW,
  COUNTDOWN_HEADING,
  COUNTDOWN_LEAD,
  COUNTDOWN_TARGET,
  COUNTDOWN_UNIT_LABELS,
} from '../lib/site'
import { counterClass, counterLabelClass, counterValueClass, countdownDoneClass } from '../lib/styles'

/** The clock the counters read: a little under a day and a bit before the day itself. */
const BEFORE = new Date('2027-06-11T08:56:56')

function freeze(at: Date) {
  vi.useFakeTimers()
  vi.setSystemTime(at)
}

describe('Countdown — the wait for the day', () => {
  it('opens with the design’s own title block', () => {
    freeze(BEFORE)

    render(<Countdown />)

    const block = screen.getByTestId('countdown-section')

    expect(block).toHaveAttribute('aria-labelledby', 'countdown-heading')
    expect(within(block).getByText(COUNTDOWN_EYEBROW)).toBeInTheDocument()
    expect(within(block).getByRole('heading', { level: 2 }).textContent).toBe(COUNTDOWN_HEADING)
    expect(within(block).getByText(COUNTDOWN_LEAD)).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('counts the days, hours, minutes and seconds down to the minute', () => {
    freeze(BEFORE)

    render(<Countdown />)

    expect(screen.getByTestId('counter-days').textContent).toBe('01')
    expect(screen.getByTestId('counter-hours').textContent).toBe('02')
    expect(screen.getByTestId('counter-minutes').textContent).toBe('03')
    expect(screen.getByTestId('counter-seconds').textContent).toBe('04')

    const counters = screen.getAllByRole('listitem')

    expect(counters).toHaveLength(COUNTDOWN_UNIT_LABELS.length)
    expect(counters.map((counter) => counter.className)).toEqual(
      COUNTDOWN_UNIT_LABELS.map((_, index) => counterClass(index === COUNTDOWN_UNIT_LABELS.length - 1)),
    )
    expect(counters[0]?.className).toContain('counter-colon')
    expect(counters[3]?.className).not.toContain('counter-colon')

    const first = within(counters[0] as HTMLElement)

    expect(first.getByText('01').className).toBe(counterValueClass)
    expect(first.getByText(COUNTDOWN_UNIT_LABELS[0]).className).toBe(counterLabelClass)

    vi.useRealTimers()
  })

  it('hands the counters over to a single line once the day has arrived', () => {
    freeze(new Date(COUNTDOWN_TARGET))

    render(<Countdown />)

    expect(screen.queryByTestId('countdown')).toBeNull()

    const done = screen.getByTestId('countdown-done')

    expect(done.textContent).toBe(COUNTDOWN_DONE)
    expect(done.className).toBe(countdownDoneClass)

    vi.useRealTimers()
  })
})
