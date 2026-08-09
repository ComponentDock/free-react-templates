import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least one quote', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Customers/i })).toBeInTheDocument()
    // The original Carepair template credits every quote to Roger Scott.
    expect(screen.getAllByText(/Roger Scott/i)).toHaveLength(3)
    expect(screen.getAllByText(/behind the word mountains/i)).toHaveLength(3)
  })
})
