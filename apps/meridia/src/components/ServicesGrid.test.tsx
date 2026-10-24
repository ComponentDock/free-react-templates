import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders section heading', () => {
    render(<ServicesGrid />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Our Exclusive Services We Offer For You',
    )
  })

  it('renders all 8 service cards', () => {
    render(<ServicesGrid />)
    const titles = [
      'Financial Planning',
      'Investments Management',
      'Business Loan',
      'Taxes Consulting',
      'Insurance Consulting',
      'Retirement Planning',
      'Risk Management',
      'Technology Consulting',
    ]
    for (const t of titles) {
      expect(screen.getByText(t)).toBeInTheDocument()
    }
  })

  it('applies custom className', () => {
    const { container } = render(<ServicesGrid className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
