import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG for each brand name', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-6 w-6" />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('h-6')
  })
})
