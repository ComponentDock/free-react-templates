import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials section', () => {
    render(<Testimonials />)
    expect(screen.getByText('What People Say')).toBeInTheDocument()
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('displays testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Yoga Practitioner')).toBeInTheDocument()
    expect(screen.getByText('Meditation Student')).toBeInTheDocument()
    expect(screen.getByText('Fitness Enthusiast')).toBeInTheDocument()
  })
})
