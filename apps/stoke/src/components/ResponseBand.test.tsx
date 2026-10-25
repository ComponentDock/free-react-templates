import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ResponseBand } from './ResponseBand'
import { ARRIVAL_WINDOWS, FALLBACK_CLOCK, PHONE_HREF } from '../content'

function rows(container: HTMLElement) {
  return Array.from(container.querySelectorAll('[data-window-row]'))
}

afterEach(() => {
  vi.useRealTimers()
})

describe('ResponseBand', () => {
  it('renders the three window rows in the reference order', () => {
    const { container } = render(<ResponseBand hour={9} />)
    expect(rows(container).map((row) => row.getAttribute('data-window-row'))).toEqual([
      '7-17',
      '17-22',
      '22-7',
    ])
    expect(screen.getByText(ARRIVAL_WINDOWS[2]!.note)).toBeInTheDocument()
  })

  it('shows the daytime promise in brand red with the daytime row active', () => {
    const { container } = render(<ResponseBand hour={9} />)
    const promise = container.querySelector('[data-clock-promise]')
    expect(promise).toHaveTextContent('within 2 hours')
    expect(promise).toHaveClass('text-primary-400')
    expect(promise).toHaveAttribute('aria-live', 'polite')
    expect(screen.getAllByText('Weekday daytime').length).toBe(2)

    const active = rows(container).filter((row) => row.getAttribute('data-active') === 'true')
    expect(active).toHaveLength(1)
    expect(active[0]).toHaveAttribute('data-window-row', '7-17')
    expect(active[0]).toHaveClass('border-primary-500')
  })

  it('shows the evening promise', () => {
    const { container } = render(<ResponseBand hour={19} />)
    expect(container.querySelector('[data-clock-promise]')).toHaveTextContent('within 3 hours')
    const [rowLabel] = screen.getAllByText('Evenings to 10pm')
    expect(rowLabel).toHaveClass('text-white')
    const active = rows(container).filter((row) => row.getAttribute('data-active') === 'true')
    expect(active[0]).toHaveAttribute('data-window-row', '17-22')
  })

  it('paints the overnight promise ice-blue, not red', () => {
    const { container } = render(<ResponseBand hour={23} />)
    const promise = container.querySelector('[data-clock-promise]')
    expect(promise).toHaveTextContent('first call at 7am')
    expect(promise).toHaveClass('text-ice-300')
    expect(promise).not.toHaveClass('text-primary-400')
    const active = rows(container).filter((row) => row.getAttribute('data-active') === 'true')
    expect(active[0]).toHaveAttribute('data-window-row', '22-7')
  })

  it('treats the early hours as the same overnight window', () => {
    const { container } = render(<ResponseBand hour={4} />)
    expect(container.querySelector('[data-clock-promise]')).toHaveTextContent('first call at 7am')
  })

  it('carries the pre-hydration pair when the hour is not yet resolved', () => {
    const { container } = render(<ResponseBand hour={null} />)
    expect(container.querySelector('[data-clock-promise]')).toHaveTextContent(
      FALLBACK_CLOCK.promise,
    )
    expect(container.querySelector('[data-clock-label]')).toHaveTextContent(FALLBACK_CLOCK.label)
    expect(container.querySelector('[data-clock-note]')).toHaveTextContent(FALLBACK_CLOCK.note)
    expect(rows(container).filter((row) => row.getAttribute('data-active') === 'true')).toHaveLength(
      0,
    )
  })

  it('reads the visitor clock when no hour is injected', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 9, 25, 20, 15, 0))
    const { container } = render(<ResponseBand />)
    expect(container.querySelector('[data-clock-promise]')).toHaveTextContent('within 3 hours')

    act(() => {
      vi.setSystemTime(new Date(2026, 9, 25, 23, 15, 0))
      vi.advanceTimersByTime(60_000)
    })
    expect(container.querySelector('[data-clock-promise]')).toHaveTextContent('first call at 7am')
  })

  it('offers the call and the answered-by-a-technician line', () => {
    render(<ResponseBand hour={9} />)
    expect(screen.getByRole('link', { name: /Call \(555\) 060-0600/ })).toHaveAttribute(
      'href',
      PHONE_HREF,
    )
    expect(
      screen.getByText('Answered by a technician, not an answering service.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Sample windows, shown for the demo.')).toBeInTheDocument()
  })
})
