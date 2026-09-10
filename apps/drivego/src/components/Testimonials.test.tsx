import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three cards with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()

    const quotes = screen.getAllByRole('figure')
    expect(quotes).toHaveLength(3)

    expect(screen.getByText(/Mike Fisher/i)).toBeInTheDocument()
    expect(screen.getByText(/Owner Ford/i)).toBeInTheDocument()
    expect(screen.getByText(/Jean Stanley/i)).toBeInTheDocument()
    expect(screen.getByText(/Traveler/i)).toBeInTheDocument()
    expect(screen.getByText(/Katie Rose/i)).toBeInTheDocument()
    expect(screen.getByText(/Customer/i)).toBeInTheDocument()
  })

  it('renders avatar images for each testimonial', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars).toHaveLength(3)
    expect(avatars[0]).toHaveAttribute('alt', 'Mike Fisher')
    expect(avatars[1]).toHaveAttribute('alt', 'Jean Stanley')
    expect(avatars[2]).toHaveAttribute('alt', 'Katie Rose')
  })
})
