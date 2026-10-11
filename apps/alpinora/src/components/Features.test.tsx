import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section title and subtitle', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Some Features that Made us Unique',
    )
    expect(
      screen.getByText('Who are in extremely love with eco friendly system.'),
    ).toBeInTheDocument()
  })

  it('renders six lavender feature cards with icons, titles, and blurbs', () => {
    render(<Features />)
    const cards = screen.getAllByText(/Usage of the Internet is becoming more common/)
    expect(cards).toHaveLength(6)
    for (const title of [
      'Expert Technicians',
      'Professional Service',
      'Great Support',
      'Technical Skills',
      'Highly Recomended',
      'Positive Reviews',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const card = screen.getByRole('heading', { name: 'Expert Technicians' }).closest('div')
    expect(card).toHaveClass('feature-card')
  })
})
