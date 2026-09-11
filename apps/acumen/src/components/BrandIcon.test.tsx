import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders github icon', () => {
    render(<BrandIcon name="github" className="h-5 w-5" />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders facebook icon', () => {
    render(<BrandIcon name="facebook" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders with default className', () => {
    render(<BrandIcon name="github" />)
    const svg = document.querySelector('svg')
    expect(svg).toHaveClass('h-5', 'w-5')
  })
})
