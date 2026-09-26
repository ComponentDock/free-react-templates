import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonials />)
    const authors = screen.getAllByText('Fanny Spencer')
    expect(authors).toHaveLength(3)
  })

  it('renders star ratings with ARIA labels', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByLabelText('4.5 out of 5 stars')
    expect(ratings).toHaveLength(3)
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    const texts = screen.getAllByText(/conscious traveling/i)
    expect(texts.length).toBe(3)
  })
})
