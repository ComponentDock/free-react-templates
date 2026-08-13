import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trending } from './Trending'
import { trending } from '../data'

describe('Trending', () => {
  it('renders the section title and subline', () => {
    render(<Trending />)
    expect(screen.getByRole('heading', { level: 2, name: trending.eyebrow })).toBeInTheDocument()
    expect(screen.getByText(trending.subline)).toBeInTheDocument()
  })

  it('renders four listing cards with ratings, addresses, and status pills', () => {
    const { container } = render(<Trending />)
    expect(container.querySelectorAll('article').length).toBe(4)
    for (const card of trending.cards) {
      expect(screen.getByRole('heading', { level: 3, name: card.title })).toBeInTheDocument()
      expect(screen.getAllByText(card.rating).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(card.address).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(card.status).length).toBeGreaterThanOrEqual(1)
      if (card.statusAlt) {
        expect(screen.getAllByText(card.statusAlt).length).toBeGreaterThanOrEqual(1)
      }
      expect(screen.getAllByText(card.tag).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('colors each FEATURED tag with its category color', () => {
    const { container } = render(<Trending />)
    expect(container.querySelector('.bg-tag-yellow')).not.toBeNull()
    expect(container.querySelector('.bg-tag-blue')).not.toBeNull()
    expect(container.querySelector('.bg-tag-green')).not.toBeNull()
    expect(container.querySelector('.bg-tag-purple')).not.toBeNull()
  })
})
