import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, quote, and author', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()

    expect(
      screen.getByText(/Appson helped us ship our product weeks ahead of schedule/),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'John Deo' })).toBeInTheDocument()
    expect(screen.getByText('CEO Of iphone')).toBeInTheDocument()
  })
})
