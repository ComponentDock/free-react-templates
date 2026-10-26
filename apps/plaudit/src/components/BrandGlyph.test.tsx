import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrandGlyph } from './BrandGlyph'

describe('BrandGlyph', () => {
  it('draws the freight triangle as a 24-unit closed path', () => {
    const { container } = render(<BrandGlyph mark="freight" />)

    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg.querySelector('path')).toHaveAttribute('d', 'M4 18 12 4l8 14Z')
    expect(svg.querySelectorAll('circle')).toHaveLength(0)
  })

  it('draws the software rings as two interlocking circles', () => {
    const { container } = render(<BrandGlyph mark="rings" />)

    const circles = container.querySelectorAll('circle')
    expect(circles).toHaveLength(2)
    expect(circles[0]).toHaveAttribute('cx', '9')
    expect(circles[1]).toHaveAttribute('cx', '15')
    expect(container.querySelector('path')).toBeNull()
  })

  it('draws the clinic plate with its cross', () => {
    const { container } = render(<BrandGlyph mark="clinics" />)

    const rect = container.querySelector('rect')!
    expect(rect).toHaveAttribute('rx', '4')
    expect(container.querySelector('path')).toHaveAttribute('d', 'M12 8v8M8 12h8')
  })

  it('is decoration for assistive technology', () => {
    const { container } = render(<BrandGlyph mark="clinics" />)

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
