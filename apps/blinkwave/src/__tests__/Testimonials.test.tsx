import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from '../components/Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/what our clients think/i)).toBeInTheDocument()
  })

  it('renders both testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/blinkwave transformed our office/i)).toBeInTheDocument()
    expect(screen.getByText(/the installation was quick/i)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Ortega')).toBeInTheDocument()
  })

  it('renders the testimonial image', () => {
    render(<Testimonials />)
    expect(screen.getByAltText(/happy blinkwave customer/i)).toBeInTheDocument()
  })
})
