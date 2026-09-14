import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients & Feedbacks')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Racky Henderson')).toBeInTheDocument()
    expect(screen.getByText('Henry Dee')).toBeInTheDocument()
    expect(screen.getByText('Mark Huff')).toBeInTheDocument()
    expect(screen.getByText('Rodel Golez')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-accent-400')
    expect(stars.length).toBe(20) // 4 testimonials * 5 stars
  })
})
