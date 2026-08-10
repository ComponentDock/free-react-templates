import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'
import { socialLinks } from '../data'

describe('BrandIcon', () => {
  it('renders an SVG glyph for every social brand', () => {
    for (const name of socialLinks) {
      const { container } = render(<BrandIcon name={name} className="h-4 w-4" />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg!.querySelector('path')).toBeInTheDocument()
      expect(svg).toHaveClass('h-4', 'w-4')
    }
  })
})
