import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'
import { CATEGORIES, PROMO_LINE } from '../data'

describe('Categories', () => {
  it('renders six category cards with icons, titles, and distinct blurbs', () => {
    render(<Categories />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(CATEGORIES.length)
    for (const category of CATEGORIES) {
      expect(screen.getByRole('heading', { name: category.title })).toBeInTheDocument()
      expect(screen.getByText(category.blurb)).toBeInTheDocument()
    }
  })

  it('renders the promo line with a green quote-anchor link', () => {
    render(<Categories />)
    expect(
      screen.getByText(/Check out our list of service for your garden and/),
    ).toBeInTheDocument()
    const link = screen.getByRole('link', { name: PROMO_LINE.link })
    expect(link).toHaveAttribute('href', PROMO_LINE.href)
  })
})
