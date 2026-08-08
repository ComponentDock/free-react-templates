import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Concept } from './Concept'

describe('Concept', () => {
  it('renders the heading, blurb, and call to action', () => {
    render(<Concept />)
    expect(
      screen.getByRole('heading', { name: /Precise Concept Design for Stylish Living/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/difference in price/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More About Us/i })).toBeInTheDocument()
  })

  it('shows the concept image with an accessible name', () => {
    render(<Concept />)
    expect(screen.getByAltText(/concept/i)).toBeInTheDocument()
  })
})
