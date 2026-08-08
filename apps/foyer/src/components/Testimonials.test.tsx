import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and client quotes', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { name: /Testimonial from our Clients/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Mark Alviro Wiens/i)).toBeInTheDocument()
    expect(screen.getByText(/Lina Harrington/i)).toBeInTheDocument()
  })
})
