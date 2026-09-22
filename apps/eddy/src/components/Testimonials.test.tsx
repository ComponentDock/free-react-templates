import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonial quote with name and role', () => {
    render(<Testimonials />)

    expect(screen.getByText(/An absolutely stunning resort/)).toBeInTheDocument()

    expect(screen.getByText('Samantha Brown')).toBeInTheDocument()
    expect(screen.getByText('Travel Blogger')).toBeInTheDocument()
  })
})
