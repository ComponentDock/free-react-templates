import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
  })

  it('renders all three testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Christine Aguilar')).toBeInTheDocument()
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our online presence/i)).toBeInTheDocument()
    expect(screen.getByText(/absolute pleasure/i)).toBeInTheDocument()
    expect(screen.getByText(/unmatched/i)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })
})
