import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon, type BrandName } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for every brand with the default sizing', () => {
    const names: BrandName[] = ['facebook', 'instagram', 'linkedin', 'x']
    for (const name of names) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).toHaveClass('h-5 w-5')
      expect(svg?.querySelector('path')).not.toBeNull()
    }
  })

  it('applies a custom className to the svg', () => {
    const { container } = render(<BrandIcon name="x" className="h-4 w-4 text-gray-400" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-4 w-4 text-gray-400')
  })
})
