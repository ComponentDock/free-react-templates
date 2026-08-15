import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { newsCards, newsSubtext, newsTitle } from '../data'
import { News } from './News'

describe('News', () => {
  it('renders the section heading and subtext', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: newsTitle })).toBeInTheDocument()
    expect(screen.getByText(newsSubtext)).toBeInTheDocument()
  })

  it('renders a card for every news item with image, title and text', () => {
    render(<News />)
    for (const card of newsCards) {
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.text)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: card.alt })).toHaveAttribute('src', card.image)
    }
  })
})
