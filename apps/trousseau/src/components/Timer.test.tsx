import { act, render, screen } from '@testing-library/react'
import { TIMER_CLOSING, TIMER_HEADING } from '../lib/site'
import { Timer } from './Timer'

function cells(): HTMLElement[] {
  const panel = document.querySelector('[class*="bg-timer-panel"]') as HTMLElement

  return Array.from(panel.querySelectorAll(':scope > div'))
}

function numbers(): Array<string | null> {
  return cells().map((cell) => cell.firstElementChild?.textContent ?? null)
}

function labels(): Array<string | null> {
  return cells().map((cell) => cell.lastElementChild?.textContent ?? null)
}

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('the countdown band', () => {
  it('holds four cells under the heading, with the closing line beneath', () => {
    vi.setSystemTime(new Date('2027-09-01T00:00:00Z'))
    render(<Timer />)

    expect(screen.getByRole('heading', { name: TIMER_HEADING })).toBeInTheDocument()
    expect(labels()).toEqual(['days', 'hours', 'Minutes', 'seconds'])
    expect(numbers()).toEqual(['10', '14', '00', '00'])
    expect(screen.getByText(TIMER_CLOSING)).toBeInTheDocument()
  })

  it('counts the seconds down as the clock ticks', () => {
    vi.setSystemTime(new Date('2027-09-11T13:59:50Z'))
    render(<Timer />)

    expect(numbers()).toEqual(['00', '00', '00', '10'])

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(numbers()).toEqual(['00', '00', '00', '09'])
  })

  it('rests at zero once the day has passed', () => {
    vi.setSystemTime(new Date('2028-01-01T00:00:00Z'))
    render(<Timer />)

    expect(numbers()).toEqual(['00', '00', '00', '00'])
  })

  it('lays the panel over the photograph under a dark wash', () => {
    vi.setSystemTime(new Date('2027-09-01T00:00:00Z'))
    const { container } = render(<Timer />)

    const band = screen.getByRole('region', { name: 'Countdown to the wedding' })

    expect(band.style.backgroundImage).toContain('picsum.photos/seed/trousseau-23/1600/900')
    expect(container.querySelector('[class*="bg-scrim"]')).not.toBeNull()
    expect(cells()).toHaveLength(4)
  })
})
