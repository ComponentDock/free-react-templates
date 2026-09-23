import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { name: /Our satisfied customer says/i }),
    ).toBeInTheDocument()
  })

  it('renders testimonial items', () => {
    render(<Testimonials />)
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })
})
