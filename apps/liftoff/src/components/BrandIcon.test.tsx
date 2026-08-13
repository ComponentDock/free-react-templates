import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an accessible-hidden SVG for each brand name', () => {
    const { container } = render(
      <div>
        <BrandIcon name="facebook" />
        <BrandIcon name="twitter" className="h-8 w-8" />
        <BrandIcon name="instagram" />
      </div>,
    )

    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(3)
    for (const svg of svgs) {
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.getAttribute('fill')).toBe('currentColor')
    }
    expect(svgs[1]).toHaveAttribute('class', 'h-8 w-8')
  })
})
