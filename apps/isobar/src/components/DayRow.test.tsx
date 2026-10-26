import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DAYS } from '../data'
import { DayRow } from './DayRow'

describe('DayRow', () => {
  it('lays one day out in the measured 56 / 40 / 34 / 1fr / 34 grid', () => {
    const { container } = render(<ul><DayRow day={DAYS[0]!} /></ul>)

    const row = container.querySelector('li') as HTMLElement
    const className = row.getAttribute('class')
    expect(className).toContain('grid-cols-[56px_40px_34px_1fr_34px]')
    expect(className).toContain('gap-2.5')
    expect(className).toContain('py-[11px]')
    expect(className).toContain('border-b')
    expect(className).toContain('border-rule')
    expect(className).toContain('last:border-b-0')
    expect(row.children).toHaveLength(5)
  })

  it('puts the label, icon, low, bar and high in that order', () => {
    const { container } = render(<ul><DayRow day={DAYS[1]!} /></ul>)

    const row = container.querySelector('li') as HTMLElement
    expect(row.children[0]?.textContent).toBe('Sat')
    expect(row.children[0]?.getAttribute('class')).toContain('font-semibold')
    expect(row.children[1]?.tagName.toLowerCase()).toBe('svg')
    expect(row.children[1]?.getAttribute('aria-label')).toBe('Rain, 80 percent chance')
    expect(row.children[1]?.getAttribute('class')).toContain('h-9')
    expect(row.children[2]?.textContent).toBe('15°')
    expect(row.children[2]?.getAttribute('class')).toContain('text-right')
    expect(row.children[2]?.getAttribute('class')).toContain('text-muted')
    expect(row.children[3]?.getAttribute('aria-hidden')).toBe('true')
    expect(row.children[4]?.textContent).toBe('21°')
    expect(row.children[4]?.getAttribute('class')).toContain('font-semibold')
  })

  it('keeps both range numbers as real text', () => {
    render(<ul><DayRow day={DAYS[4]!} /></ul>)

    expect(screen.getByText('17°')).toBeInTheDocument()
    expect(screen.getByText('27°')).toBeInTheDocument()
  })
})
