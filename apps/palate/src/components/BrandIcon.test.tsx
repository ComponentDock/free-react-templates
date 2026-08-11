import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG glyph for every brand name', () => {
    for (const name of ['twitter', 'facebook', 'instagram', 'google'] as const) {
      const { container, unmount } = render(<BrandIcon name={name} className="h-4 w-4" />)
      const svg = container.querySelector('svg')!
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.querySelector('path')).not.toBeNull()
      unmount()
    }
  })

  it('forwards className to the svg element', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-5 w-5" />)
    expect(container.querySelector('svg')!.getAttribute('class')).toBe('h-5 w-5')
  })
})
