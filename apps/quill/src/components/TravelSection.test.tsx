import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TravelSection } from './TravelSection'
import { travelPosts } from '../data'

describe('TravelSection', () => {
  it('renders the heading and a two-column grid of travel cards with date boxes', () => {
    render(<TravelSection />)
    expect(
      screen.getByRole('heading', { name: /Hot topics from Travel Section/i }),
    ).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    for (const [index, post] of travelPosts.entries()) {
      const card = within(cards[index]!)
      expect(card.getByText(post.day)).toBeInTheDocument()
      expect(card.getByText(post.month)).toBeInTheDocument()
      expect(card.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(card.getByText(`${post.comments} Comments`)).toBeInTheDocument()
    }
  })
})
