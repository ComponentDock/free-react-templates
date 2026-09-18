import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows testimonial quote and author', () => {
    render(<Testimonials />)
    expect(screen.getByText(/wonderful stay/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('shows 5-star rating', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Guests Love Us')).toBeInTheDocument()
  })
})
