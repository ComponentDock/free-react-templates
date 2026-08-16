import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { footer } from '../data'

describe('BrandIcon', () => {
  it('renders an inline SVG for every social brand', () => {
    for (const name of footer.socials) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')!
      expect(svg).not.toBeNull()
      expect(svg.getAttribute('aria-hidden')).toBe('true')
      expect(svg.querySelector('path')).not.toBeNull()
    }
  })
})
