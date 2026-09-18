import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an SVG element', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders with the aria-hidden attribute', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the facebook icon with a path', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders the twitter icon with a path', () => {
    render(<BrandIcon name="twitter" />)
    const svg = document.querySelector('svg')
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders the instagram icon with a path', () => {
    render(<BrandIcon name="instagram" />)
    const svg = document.querySelector('svg')
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders the youtube icon with a path', () => {
    render(<BrandIcon name="youtube" />)
    const svg = document.querySelector('svg')
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<BrandIcon name="facebook" className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('h-4', 'w-4')
  })

  it('uses the default className when none provided', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('h-5', 'w-5')
  })

  it('has viewBox="0 0 24 24"', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('uses fill="currentColor"', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('fill', 'currentColor')
  })
})
