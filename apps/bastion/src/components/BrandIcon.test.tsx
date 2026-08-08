import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon, type BrandName } from './BrandIcon'

const brands: BrandName[] = ['x', 'facebook', 'linkedin', 'youtube', 'instagram', 'github']

describe('BrandIcon', () => {
  it('renders an inline SVG for every supported brand', () => {
    for (const name of brands) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg!.querySelector('path')).toHaveAttribute('d')
    }
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="x" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
