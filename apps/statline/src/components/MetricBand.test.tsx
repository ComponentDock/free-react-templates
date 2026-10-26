import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MetricBand } from './MetricBand'

describe('MetricBand', () => {
  it('renders one grid of four metric cards', () => {
    render(<MetricBand />)

    const grid = screen.getByRole('main').querySelector('ul')
    expect(grid).not.toBeNull()
    expect(grid?.children).toHaveLength(4)
    expect(Array.from(grid?.children ?? []).every((child) => child.tagName === 'LI')).toBe(true)
  })

  it('uses an intrinsic auto-fit track with an 18px gap and no breakpoint prefix', () => {
    render(<MetricBand />)

    const grid = screen.getByRole('main').querySelector('ul') as HTMLElement
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(240px,1fr))]')
    expect(grid.className).toContain('gap-[18px]')
    expect(grid.className).toContain('list-none')

    const breakpoints = /\b(sm|md|lg|xl|2xl):/
    expect(grid.className).not.toMatch(breakpoints)
    expect(screen.getByRole('main').innerHTML).not.toMatch(breakpoints)
  })

  it('counts columns from the track maths only', () => {
    // 240·n + 18·(n − 1) fits in the 1,014px grid at 1,046 → 4 columns
    expect(240 * 4 + 18 * 3).toBeLessThanOrEqual(1014)
    expect(240 * 5 + 18 * 4).toBeGreaterThan(1014)
  })

  it('is the only content band', () => {
    render(<MetricBand />)

    expect(screen.getByRole('main').childElementCount).toBe(2)
    expect(screen.queryByRole('contentinfo')).toBeNull()
  })
})
