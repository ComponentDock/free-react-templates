import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG with the facebook path', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg!.querySelector('path')).toBeTruthy()
  })

  it('renders an SVG with the x path', () => {
    const { container } = render(<BrandIcon name="x" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg!.querySelector('path')).toBeTruthy()
  })

  it('renders an SVG with the linkedin path', () => {
    const { container } = render(<BrandIcon name="linkedin" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg!.querySelector('path')).toBeTruthy()
  })

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-8 w-8" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('class', expect.stringContaining('h-8'))
  })
})
