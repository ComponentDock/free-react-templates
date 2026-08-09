import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders a Facebook svg', () => {
    const { container } = render(<BrandIcon name="facebook" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(screen.getByTitle('Facebook')).toBeInTheDocument()
  })

  it('renders an Instagram svg', () => {
    const { container } = render(<BrandIcon name="instagram" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(screen.getByTitle('Instagram')).toBeInTheDocument()
  })

  it('renders a Twitter svg', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(screen.getByTitle('Twitter')).toBeInTheDocument()
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
