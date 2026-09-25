import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonials section', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Lisa Chen')).toBeInTheDocument()
    expect(screen.getByText('Robert Johnson')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our mining operation/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, reliable, and innovative/)).toBeInTheDocument()
    expect(screen.getByText(/best in the business/)).toBeInTheDocument()
  })
})
