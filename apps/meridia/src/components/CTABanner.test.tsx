import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders heading', () => {
    render(<CTABanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Looking for business opportunity?',
    )
  })

  it('renders subtitle', () => {
    render(<CTABanner />)
    expect(screen.getByText('Prepare for Takeoff')).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<CTABanner />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<CTABanner className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
