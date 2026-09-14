import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Spaces that you'd love/i })).toBeInTheDocument()
  })

  it('renders testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Workhive transformed the way/)).toBeInTheDocument()
  })

  it('renders author name', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('renders author title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Creative Director, Pixel Studio')).toBeInTheDocument()
  })
})
