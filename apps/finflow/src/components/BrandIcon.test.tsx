import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg?.classList.contains('h-4')).toBe(true)
    expect(svg?.classList.contains('w-4')).toBe(true)
  })

  it('supports all brand names', () => {
    const brands = ['facebook', 'twitter', 'linkedin', 'instagram'] as const
    brands.forEach((name) => {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })
  })
})
