import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QualityBanner } from './QualityBanner'

describe('QualityBanner', () => {
  it('renders heading', () => {
    render(<QualityBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Quality Makes the Belief for Customers',
    )
  })

  it('renders description text', () => {
    render(<QualityBanner />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders Watch Video link', () => {
    render(<QualityBanner />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<QualityBanner className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
