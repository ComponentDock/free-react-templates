import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { NOW } from '../data'
import { HourStrip } from './HourStrip'

describe('HourStrip', () => {
  it('renders five hours in an ordered list named "Next hours"', () => {
    const { container } = render(<HourStrip hours={NOW.hours} />)

    const list = container.querySelector('ol') as HTMLElement
    expect(list).toHaveAttribute('aria-label', 'Next hours')
    expect(list.getAttribute('class')).toContain('grid-cols-5')
    expect(list.getAttribute('class')).toContain('gap-1.5')
    expect(list.getAttribute('class')).toContain('pt-4')
    expect(list.getAttribute('class')).toContain('border-t')
    expect(list.getAttribute('class')).toContain('border-white/25')
    expect(list.getAttribute('class')).toContain('text-center')
    expect(list.querySelectorAll('li')).toHaveLength(5)
  })

  it('carries the time, a labelled icon and the temperature of each cell', () => {
    const { container } = render(<HourStrip hours={NOW.hours} />)

    const cells = container.querySelectorAll('li')
    expect(cells[0]?.textContent).toBe('15:0024°')
    expect(cells[4]?.textContent).toBe('19:0019°')

    const times = Array.from(cells).map((cell) => cell.querySelector('span')?.textContent)
    expect(times).toEqual(['15:00', '16:00', '17:00', '18:00', '19:00'])
    expect(cells[0]?.querySelector('span')?.getAttribute('class')).toContain('text-muted')

    const temps = Array.from(cells).map((cell) => cell.querySelector('strong')?.textContent)
    expect(temps).toEqual(['24°', '25°', '23°', '21°', '19°'])
    expect(cells[0]?.querySelector('strong')?.getAttribute('class')).toContain('text-[15px]')

    const labels = Array.from(cells).map((cell) => cell.querySelector('svg')?.getAttribute('aria-label'))
    expect(labels).toEqual(['Sunny', 'Sunny', 'Partly cloudy', 'Cloudy', 'Light rain'])
  })

  it('sizes every hourly glyph at 34 px and never spins one', () => {
    const { container } = render(<HourStrip hours={NOW.hours} />)

    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(5)
    for (const icon of icons) {
      expect(icon.getAttribute('class')).toContain('h-[34px]')
      expect(icon.getAttribute('class')).toContain('w-[34px]')
    }
    expect(container.querySelectorAll('.isobar-spin')).toHaveLength(0)
  })
})
