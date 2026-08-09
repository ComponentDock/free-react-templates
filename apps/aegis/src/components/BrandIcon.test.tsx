import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for each supported brand', () => {
    for (const name of ['twitter', 'linkedin', 'github'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).not.toBeNull()
      expect(svg!.getAttribute('viewBox')).toBe('0 0 24 24')
      expect(svg!.querySelector('path')).not.toBeNull()
    }
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="github" className="h-4 w-4" />)
    expect(container.querySelector('svg')!.getAttribute('class')).toBe('h-4 w-4')
  })
})
