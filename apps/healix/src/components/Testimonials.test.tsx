import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /our patient says/i })).toBeInTheDocument()
  })

  it('renders patient names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jessica Torres')).toBeInTheDocument()
    expect(screen.getByText('Rebecca Gray')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByText(/small river named duden/i)).toBeInTheDocument()
  })

  it('renders patient roles', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('Patient')
    expect(roles.length).toBeGreaterThanOrEqual(2)
  })
})
