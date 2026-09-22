import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Guests Says')).toBeInTheDocument()
    expect(screen.getByText('Our Satisfied Guests says')).toBeInTheDocument()
  })

  it('renders testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
    expect(screen.getByText('Italy')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('Spain')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('UK')).toBeInTheDocument()
  })
})
