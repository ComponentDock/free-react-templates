import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the quote, author, and star rating', () => {
    render(<Testimonials />)
    expect(screen.getByText(/As conscious traveling Paupers/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Fanny Spencer/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/rated 4.5 out of 5/i)).toBeInTheDocument()
  })
})
