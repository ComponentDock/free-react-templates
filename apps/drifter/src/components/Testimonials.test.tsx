import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    const names = screen.getAllByText('Fanny Spencer')
    expect(names).toHaveLength(3)
  })

  it('renders roles for each testimonial', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('CEO at Apple')
    expect(roles).toHaveLength(3)
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/conscious traveling Paupers/)
    expect(quotes).toHaveLength(3)
  })
})
