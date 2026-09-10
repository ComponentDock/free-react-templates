import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Proton delivered exactly what we needed/i)).toBeInTheDocument()
  })

  it('renders the author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })

  it('renders the decorative quotation mark', () => {
    render(<Testimonials />)
    expect(screen.getByText('\u201C')).toBeInTheDocument()
  })
})
