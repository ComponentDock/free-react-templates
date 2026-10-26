import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Tick } from './Tick'

describe('Tick', () => {
  it('draws the same 20-unit check glyph the list reuses 13 times', () => {
    const { container } = render(<Tick />)

    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg).toHaveAttribute('viewBox', '0 0 20 20')
    expect(svg?.querySelector('path')).toHaveAttribute('d', 'm5 10.5 3 3 7-7')
  })

  it('is decorative: hidden from assistive tech and untitled', () => {
    const { container } = render(<Tick />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg?.querySelector('title')).toBeNull()
    expect(container.textContent).toBe('')
  })

  it('is a round 20px disc whose glyph is drawn at 16px', () => {
    const { container } = render(<Tick />)

    expect(container.querySelector('svg')).toHaveClass('plan-tick')
  })
})
