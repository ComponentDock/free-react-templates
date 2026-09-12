import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders with default className', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-5', 'w-5')
  })

  it('renders with custom className', () => {
    const { container } = render(<BrandIcon name="x" className="h-4 w-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-4', 'w-4')
  })

  it('renders all brand names', () => {
    const names = ['facebook', 'x', 'instagram'] as const
    for (const name of names) {
      const { container, unmount } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      const path = svg?.querySelector('path')
      expect(path).toHaveAttribute('d')
      unmount()
    }
  })

  it('has aria-hidden for accessibility', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
