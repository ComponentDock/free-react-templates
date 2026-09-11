import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG for facebook', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders an SVG for twitter', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders an SVG for instagram', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders an SVG for linkedin', () => {
    const { container } = render(<BrandIcon name="linkedin" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom size', () => {
    const { container } = render(<BrandIcon name="facebook" size={24} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
  })

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="text-red-500" />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('text-red-500')
  })

  it('has aria-hidden', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('has correct viewBox', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })
})
