import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the first testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Matthew Smith')).toBeInTheDocument()
    expect(screen.getByText('CEO — Stack, Inc.')).toBeInTheDocument()
  })

  it('renders the second testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Mike Smith')).toBeInTheDocument()
    expect(screen.getByText('CTO — Stack, Inc.')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })
})
