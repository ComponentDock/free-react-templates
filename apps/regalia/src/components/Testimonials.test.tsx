import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('displays the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Guest Reviews')).toBeInTheDocument()
  })

  it('displays all testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('displays roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Travel Blogger')).toBeInTheDocument()
    expect(screen.getByText('Business Executive')).toBeInTheDocument()
    expect(screen.getByText('Food Critic')).toBeInTheDocument()
  })

  it('displays star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-accent-gold')
    expect(stars.length).toBe(15)
  })

  it('displays quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/breathtaking experience/)).toBeInTheDocument()
  })
})
