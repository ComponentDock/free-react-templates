import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders all testimonial names', () => {
    render(<Testimonials />)
    // Each name appears in the card header and in the thumbnail overlay
    expect(screen.getAllByText('Fanny Spencer').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Mark Anderson').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Lisa Chen').length).toBeGreaterThanOrEqual(1)
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/brightpath changed my career/i)).toBeInTheDocument()
    expect(screen.getByText(/i gained practical skills/i)).toBeInTheDocument()
    expect(screen.getByText(/the best online learning/i)).toBeInTheDocument()
  })
})
