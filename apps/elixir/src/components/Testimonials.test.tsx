import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
  })

  it('renders three testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Kelly Holmes/)).toBeInTheDocument()
    expect(screen.getByText(/Rebecca Morando/)).toBeInTheDocument()
    expect(screen.getByText(/Lucas Gallone/)).toBeInTheDocument()
  })

  it('renders author attribution for each testimonial', () => {
    render(<Testimonials />)
    const authors = screen.getAllByText(/— (Kelly|Rebecca|Lucas)/)
    expect(authors.length).toBe(3)
  })
})
