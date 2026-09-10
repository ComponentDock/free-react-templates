import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed how I manage/)).toBeInTheDocument()
    expect(screen.getByText(/incredibly smooth/)).toBeInTheDocument()
    expect(screen.getByText(/great interest rates/)).toBeInTheDocument()
  })

  it('renders customer names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('David Lee')).toBeInTheDocument()
  })
})
