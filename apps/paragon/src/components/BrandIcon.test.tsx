import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SOCIAL_LINKS } from '../data'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an accessible-hidden inline SVG glyph for every social name', () => {
    for (const { name } of SOCIAL_LINKS) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).not.toBeNull()
      expect(svg?.getAttribute('aria-hidden')).toBe('true')
      expect(svg?.querySelector('path')).not.toBeNull()
    }
  })

  it('passes className through to the svg', () => {
    const { container } = render(<BrandIcon name="twitter" className="h-6 w-6 text-brand" />)
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-6 w-6 text-brand')
  })
})
