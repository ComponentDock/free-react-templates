import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the three testimonial quotes with authors', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'happy Customers Says' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/- Lloyd Gomez, Customer/)).toBeInTheDocument()
  })
})
