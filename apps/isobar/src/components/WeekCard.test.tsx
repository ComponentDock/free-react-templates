import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { DAYS } from '../data'
import { WeekCard } from './WeekCard'

describe('WeekCard', () => {
  it('is a section named by its own heading', () => {
    const { container } = render(<WeekCard days={DAYS} />)

    const section = container.querySelector('section') as HTMLElement
    const heading = container.querySelector('h2') as HTMLElement
    expect(section).toHaveAttribute('aria-labelledby', 'isobar-week')
    expect(heading.id).toBe('isobar-week')
    expect(heading.textContent).toBe('5-day forecast')
    expect(section.getAttribute('class')).toContain('rounded-card')
    expect(section.getAttribute('class')).toContain('bg-card')
    expect(section.getAttribute('class')).toContain('p-6')
    expect(section.getAttribute('class')).toContain('shadow-card')
  })

  it('sets the heading as a 13 px letterspaced uppercase label with a calendar glyph', () => {
    const { container } = render(<WeekCard days={DAYS} />)

    const heading = container.querySelector('h2') as HTMLElement
    const className = heading.getAttribute('class')
    expect(className).toContain('text-[13px]')
    expect(className).toContain('font-semibold')
    expect(className).toContain('uppercase')
    expect(className).toContain('tracking-[0.08em]')
    expect(className).toContain('text-muted')
    expect(className).toContain('gap-2')

    const calendar = heading.querySelector('svg') as SVGElement
    expect(calendar).toHaveAttribute('aria-hidden', 'true')
    expect(calendar.getAttribute('class')).toContain('h-4')
    expect(calendar.getAttribute('class')).toContain('w-4')
  })

  it('lists five days and drops the border from the last row', () => {
    const { container } = render(<WeekCard days={DAYS} />)

    const rows = container.querySelectorAll('ul > li')
    expect(rows).toHaveLength(5)
    expect(Array.from(rows).map((row) => row.children[0]?.textContent)).toEqual([
      'Today',
      'Sat',
      'Sun',
      'Mon',
      'Tue',
    ])
    for (const row of rows) {
      expect(row.getAttribute('class')).toContain('border-b')
    }
  })
})
