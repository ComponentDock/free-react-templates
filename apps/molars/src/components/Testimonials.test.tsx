import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders four testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Chad Hawkins')).toBeInTheDocument()
    expect(screen.getByText('Ayisha Atherton')).toBeInTheDocument()
    expect(screen.getByText('Riccardo Gilliam')).toBeInTheDocument()
    expect(screen.getByText('Jasleen Dunkley')).toBeInTheDocument()
  })

  it('each testimonial shows the "Customer" label', () => {
    render(<Testimonials />)
    const customers = screen.getAllByText('Customer')
    expect(customers).toHaveLength(4)
  })

  it('each testimonial has a quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Excellent dental care/)).toBeInTheDocument()
    expect(screen.getByText(/A wonderful experience/)).toBeInTheDocument()
    expect(screen.getByText(/I was nervous about my procedure/)).toBeInTheDocument()
    expect(screen.getByText(/Great service and reasonable prices/)).toBeInTheDocument()
  })

  it('each testimonial has an avatar image', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Chad Hawkins')).toBeInTheDocument()
    expect(screen.getByAltText('Ayisha Atherton')).toBeInTheDocument()
    expect(screen.getByAltText('Riccardo Gilliam')).toBeInTheDocument()
    expect(screen.getByAltText('Jasleen Dunkley')).toBeInTheDocument()
  })
})
