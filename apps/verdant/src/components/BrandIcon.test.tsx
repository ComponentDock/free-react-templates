import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an svg for each brand name', () => {
    for (const name of ['facebook', 'twitter', 'instagram', 'linkedin'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('svg path')).not.toBeNull()
    }
  })

  it('applies the className and is hidden from assistive tech', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-4 w-4" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg.className.baseVal).toContain('h-4')
  })
})
