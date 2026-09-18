import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders the facebook icon', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders the instagram icon', () => {
    render(<BrandIcon name="instagram" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders the twitter icon', () => {
    render(<BrandIcon name="twitter" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('applies a custom className', () => {
    render(<BrandIcon name="facebook" className="h-4 w-4" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('h-4', 'w-4')
  })

  it('uses default className when none provided', () => {
    render(<BrandIcon name="facebook" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('h-5', 'w-5')
  })
})
