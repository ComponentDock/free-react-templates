import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { rangeFill } from '../lib/range'
import { RangeBar } from './RangeBar'

const bar = (lo: number, hi: number) => {
  const { container } = render(<RangeBar lo={lo} hi={hi} />)
  const track = container.firstElementChild as HTMLElement
  return { track, fill: track.firstElementChild as HTMLElement }
}

describe('RangeBar', () => {
  it('is decoration: hidden from assistive tech', () => {
    const { track } = bar(16, 25)

    expect(track).toHaveAttribute('aria-hidden', 'true')
    expect(track.getAttribute('class')).toContain('h-1.5')
    expect(track.getAttribute('class')).toContain('rounded-full')
    expect(track.getAttribute('class')).toContain('bg-track')
  })

  it('paints the fill from the fixed 12–28 °C window', () => {
    const { fill } = bar(16, 25)

    expect(fill.style.left).toBe(rangeFill(16, 25).left)
    expect(fill.style.width).toBe(rangeFill(16, 25).width)
    expect(fill.style.left).toBe('25%')
    expect(fill.style.width).toBe('56.25%')
    expect(fill.getAttribute('class')).toContain(
      'bg-[linear-gradient(90deg,#38bdf8,#fbbf24_60%,#f97316)]',
    )
    expect(fill.getAttribute('class')).toContain('rounded-full')
  })

  it('places the coldest and warmest days at the window edges', () => {
    expect(bar(12, 28).fill.style.left).toBe('0%')
    expect(bar(12, 28).fill.style.width).toBe('100%')
    expect(bar(14, 19).fill.style.left).toBe('12.5%')
    expect(bar(14, 19).fill.style.width).toBe('31.25%')
  })
})
