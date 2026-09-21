import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading.textContent).toContain('Happy')
    expect(heading.textContent).toContain('Clients')
    expect(heading.textContent).toContain('Say')
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeDefined()
    expect(screen.getByText('Michael Chen')).toBeDefined()
    expect(screen.getByText('Emma Davis')).toBeDefined()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Bride')).toBeDefined()
    expect(screen.getByText('Real Estate Agent')).toBeDefined()
    expect(screen.getByText('Fashion Designer')).toBeDefined()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(15)
  })
})
