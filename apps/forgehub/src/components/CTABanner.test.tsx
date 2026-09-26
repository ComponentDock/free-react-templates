import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders heading', () => {
    render(<CTABanner />)
    expect(screen.getByText("Let's Get Started")).toBeInTheDocument()
  })

  it('has teal background', () => {
    const { container } = render(<CTABanner />)
    const link = container.querySelector('a')
    expect(link?.className).toContain('bg-primary')
  })
})
