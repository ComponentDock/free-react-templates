import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Kind Words From Readers' })).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Porter')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/captivating read/)).toBeInTheDocument()
    expect(screen.getByText(/redefines what modern fiction/)).toBeInTheDocument()
    expect(screen.getByText(/couldn't put it down/)).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
  })
})
