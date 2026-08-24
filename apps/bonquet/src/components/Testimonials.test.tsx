import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /what our customer says/i }),
    ).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/wonderful dining experience/i)).toBeInTheDocument()
    expect(screen.getByText(/best restaurant in town/i)).toBeInTheDocument()
    expect(screen.getByText(/from start to finish/i)).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)
    // Each testimonial has 5 stars, 3 testimonials = 15 stars
    // Stars are SVG elements with fill="currentColor" rendered by lucide-react
    const stars = document.querySelectorAll('svg.lucide-star')
    expect(stars.length).toBe(15)
  })

  it('renders testimonial avatars', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    // 3 testimonial avatars
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })
})
