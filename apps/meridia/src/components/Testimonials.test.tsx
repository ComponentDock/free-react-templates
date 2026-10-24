import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Customers')
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('David Park')).toBeInTheDocument()
  })

  it('renders quote marks', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/"/)
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })

  it('applies custom className', () => {
    const { container } = render(<Testimonials className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
