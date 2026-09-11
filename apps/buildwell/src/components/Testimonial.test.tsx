import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the Testimonial heading', () => {
    render(<Testimonial />)
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
  })

  it('renders all three testimonial quotes', () => {
    render(<Testimonial />)
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
    expect(screen.getByText(/Jane Smith/)).toBeInTheDocument()
    expect(screen.getByText(/Bob Wilson/)).toBeInTheDocument()
  })
})
