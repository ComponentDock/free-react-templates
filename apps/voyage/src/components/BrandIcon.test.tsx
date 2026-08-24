import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies the className prop', () => {
    const { container } = render(<BrandIcon name="x" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-4', 'w-4')
  })

  it('has aria-hidden attribute', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders all brand icon variants without errors', () => {
    const brands = ['facebook', 'x', 'instagram', 'linkedin', 'youtube', 'tiktok'] as const
    for (const brand of brands) {
      const { unmount } = render(<BrandIcon name={brand} />)
      unmount()
    }
  })
})
