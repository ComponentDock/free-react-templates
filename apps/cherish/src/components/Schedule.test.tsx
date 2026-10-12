import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'
import { SCHEDULE_BODY, SCHEDULE_EVENTS, SCHEDULE_EYEBROW, SCHEDULE_HEADING } from '../lib/site'
import { dotClass, scheduleItemClass, scheduleTrackClass } from '../lib/styles'

describe('Schedule — the day’s running order', () => {
  it('opens with the design’s own title block over the rail', () => {
    render(<Schedule />)

    const block = screen.getByTestId('schedule')

    expect(block).toHaveAttribute('aria-labelledby', 'schedule-heading')
    expect(within(block).getByText(SCHEDULE_EYEBROW)).toBeInTheDocument()
    expect(within(block).getByRole('heading', { level: 2 }).textContent).toBe(SCHEDULE_HEADING)
    expect(within(block).getByText(SCHEDULE_BODY)).toBeInTheDocument()
  })

  it('stands every moment of the day on the one rail, each with its time and its glyph', () => {
    const { container } = render(<Schedule />)

    const track = screen.getByTestId('schedule-track')

    expect(track.className).toBe(scheduleTrackClass)
    expect(track.style.transform).toBe(`translateX(calc(-100% / ${SCHEDULE_EVENTS.length} * 0))`)

    const moments = within(track).getAllByRole('listitem')

    expect(moments).toHaveLength(SCHEDULE_EVENTS.length)
    expect(moments[0]?.className).toBe(scheduleItemClass)
    expect(
      moments.map((moment) => within(moment).getByRole('heading', { level: 3 }).textContent),
    ).toEqual(SCHEDULE_EVENTS.map((moment) => moment.title))
    expect(moments.map((moment) => within(moment).getByText(momentTime(moment)) )).toBeDefined()

    for (const [index, moment] of moments.entries()) {
      const event = SCHEDULE_EVENTS[index]

      expect(within(moment).getByText(event?.time as string)).toBeInTheDocument()
      expect(within(moment).getByText(event?.body as string)).toBeInTheDocument()
      expect(moment.querySelectorAll('svg')).toHaveLength(1)
    }

    expect(container.querySelectorAll('svg')).toHaveLength(SCHEDULE_EVENTS.length + 3)
  })

  it('walks the rail forward and back, wrapping round at both ends', async () => {
    const user = userEvent.setup()

    render(<Schedule />)

    await user.click(screen.getByRole('button', { name: 'Next moment' }))

    expect(screen.getByTestId('schedule-track').style.transform).toContain('* 1')

    await user.click(screen.getByRole('button', { name: 'Previous moment' }))

    expect(screen.getByTestId('schedule-track').style.transform).toContain('* 0')

    await user.click(screen.getByRole('button', { name: 'Previous moment' }))

    expect(screen.getByTestId('schedule-track').style.transform).toContain(
      `* ${SCHEDULE_EVENTS.length - 1}`,
    )
  })

  it('jumps straight to a moment from its own dot', async () => {
    const user = userEvent.setup()

    render(<Schedule />)

    const dots = screen.getAllByRole('button', { name: /^Show / })

    expect(dots).toHaveLength(SCHEDULE_EVENTS.length)
    expect(dots.map((dot) => dot.getAttribute('aria-label'))).toEqual(
      SCHEDULE_EVENTS.map((event) => `Show ${event.title}`),
    )
    expect(dots[0]?.className).toBe(dotClass(true))
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]?.className).toBe(dotClass(false))
    expect(dots[1]).not.toHaveAttribute('aria-current')

    await user.click(dots[3] as HTMLElement)

    expect(screen.getByTestId('schedule-track').style.transform).toContain('* 3')

    const after = screen.getAllByRole('button', { name: /^Show / })

    expect(after[3]?.className).toBe(dotClass(true))
    expect(after[0]?.className).toBe(dotClass(false))
  })
})

/** The time one moment of the run prints, as the data itself has it. */
function momentTime(moment: HTMLElement): string {
  const index = Array.from(moment.parentElement?.children ?? []).indexOf(moment)

  return String(SCHEDULE_EVENTS[index]?.time)
}
