import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders 4 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our business finances/)).toBeInTheDocument()
    expect(screen.getByText(/incredibly intuitive/)).toBeInTheDocument()
  })
})
