import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG element', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('applies custom className', () => {
    render(<BrandIcon name="x" className="h-8 w-8" />)
    const svg = document.querySelector('svg')
    expect(svg?.className.baseVal).toContain('h-8 w-8')
  })

  it('renders all brand icon types', () => {
    const brands = ['facebook', 'x', 'instagram', 'linkedin'] as const
    const { unmount } = render(<BrandIcon name="facebook" />)
    for (const brand of brands) {
      unmount()
      const { unmount: u } = render(<BrandIcon name={brand} />)
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
      u()
    }
  })
})
