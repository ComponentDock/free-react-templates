import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three quotes with author names', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Customer Testimony/i })).toBeInTheDocument()
    expect(screen.getByText(/Mike Fisher/i)).toBeInTheDocument()
    expect(screen.getByText(/Jean Stanley/i)).toBeInTheDocument()
    expect(screen.getByText(/Katie Rose/i)).toBeInTheDocument()

    const quotes = screen.getAllByRole('figure')
    expect(quotes).toHaveLength(3)
  })
})
