import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders facebook icon with title', () => {
    render(<BrandIcon name="facebook" />)

    expect(screen.getByTitle('Facebook')).toBeInTheDocument()
  })

  it('renders instagram icon with title', () => {
    render(<BrandIcon name="instagram" />)

    expect(screen.getByTitle('Instagram')).toBeInTheDocument()
  })

  it('renders twitter icon with title', () => {
    render(<BrandIcon name="twitter" />)

    expect(screen.getByTitle('Twitter')).toBeInTheDocument()
  })

  it('renders google icon with title', () => {
    render(<BrandIcon name="google" />)

    expect(screen.getByTitle('Google')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-6 w-6" />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-6', 'w-6')
  })

  it('uses default className when none provided', () => {
    const { container } = render(<BrandIcon name="facebook" />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('h-4', 'w-4')
  })
})
