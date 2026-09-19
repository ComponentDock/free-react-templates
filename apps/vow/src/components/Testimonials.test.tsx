import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials')).toBeInTheDocument()
    expect(screen.getByText('only the best')).toBeInTheDocument()
  })

  it('renders a testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Absolutely love the quality/)).toBeInTheDocument()
  })

  it('renders the author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Christinne Smith')).toBeInTheDocument()
    expect(screen.getByText('client')).toBeInTheDocument()
  })
})
