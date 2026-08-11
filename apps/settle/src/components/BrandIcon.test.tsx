import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon, type BrandIconName } from './BrandIcon'

const NAMES: BrandIconName[] = ['github', 'x', 'linkedin']

describe('BrandIcon', () => {
  it('renders an accessible-hidden SVG with a path for every brand', () => {
    for (const name of NAMES) {
      const { container } = render(<BrandIcon name={name} className="h-4 w-4" />)
      const svg = container.querySelector('svg')!
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg.querySelector('path')).not.toBeNull()
      expect(svg.getAttribute('class')).toContain('h-4 w-4')
    }
  })
})
