import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /happy clients/i })).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our vision into reality/i)).toBeInTheDocument()
    expect(screen.getByText(/seamless experience/i)).toBeInTheDocument()
    expect(screen.getByText(/exceeded all our expectations/i)).toBeInTheDocument()
  })

  it('renders testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})
