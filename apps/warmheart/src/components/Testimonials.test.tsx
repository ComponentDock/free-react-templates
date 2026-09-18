import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial from our Donors')).toBeInTheDocument()
  })

  it('renders three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Cordelia Barton')).toBeInTheDocument()
    expect(screen.getByText('Marcus Williams')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders donor roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Director at Foundation')).toBeInTheDocument()
    expect(screen.getByText('Community Leader')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Coordinator')).toBeInTheDocument()
  })
})
