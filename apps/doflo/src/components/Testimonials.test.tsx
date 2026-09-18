import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument()
  })

  it('renders testimonial cards with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Justine Miller')).toBeInTheDocument()
    expect(screen.getByText('Danny Jonson')).toBeInTheDocument()
    expect(screen.getByText('Web Developer at Envato')).toBeInTheDocument()
    expect(screen.getByText('Creative Director at Apple')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our digital presence/i)).toBeInTheDocument()
    expect(screen.getByText(/game-changer/i)).toBeInTheDocument()
  })
})
