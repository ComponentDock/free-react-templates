import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for the requested brand', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg.querySelector('path')).not.toBeNull()
    expect(svg.getAttribute('class')).toContain('h-5')
  })

  it('applies a custom className when provided', () => {
    const { container } = render(<BrandIcon name="instagram" className="h-8 w-8" />)
    expect(container.querySelector('svg')!.getAttribute('class')).toContain('h-8')
  })
})
