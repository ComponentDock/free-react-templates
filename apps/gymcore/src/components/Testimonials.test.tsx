import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /what our members say/i })).toBeInTheDocument()
    expect(screen.getByText('Jessica Adams')).toBeInTheDocument()
    expect(screen.getByText('David Park')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
  })
})
