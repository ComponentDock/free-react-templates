import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Our Guests Say')
  })

  it('renders three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('displays testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/incredible dining experience/i)).toBeInTheDocument()
    expect(screen.getByText(/attention to detail/i)).toBeInTheDocument()
    expect(screen.getByText(/warm ambiance/i)).toBeInTheDocument()
  })

  it('displays reviewer roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Food Critic, Gourmet Magazine')).toBeInTheDocument()
    expect(screen.getByText('Chef & Restaurateur')).toBeInTheDocument()
    expect(screen.getByText('Regular Customer')).toBeInTheDocument()
  })

  it('displays reviewer avatars', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByAltText('Emily Chen')).toBeInTheDocument()
  })
})
