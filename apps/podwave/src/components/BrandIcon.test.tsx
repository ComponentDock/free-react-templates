import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG for facebook', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders an SVG for twitter', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders an SVG for linkedin', () => {
    const { container } = render(<BrandIcon name="linkedin" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders an SVG for instagram', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="text-white" />)
    expect(container.querySelector('svg')).toHaveClass('text-white')
  })

  it('applies custom size', () => {
    const { container } = render(<BrandIcon name="facebook" size={16} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')
  })
})
