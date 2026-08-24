import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Happy Customer/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Testimonials from our happy travelers/)).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
    expect(screen.getByText(/Mark Wilson/)).toBeInTheDocument()
    expect(screen.getByText(/Emily Davis/)).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.fill-current')
    expect(stars.length).toBe(15) // 3 testimonials × 5 stars each
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })
})
