import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sermons } from './Sermons'
import { sermons } from '../data'

describe('Sermons', () => {
  it('renders the centered section heading', () => {
    render(<Sermons />)
    expect(screen.getByText(sermons.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: sermons.heading })).toBeInTheDocument()
  })

  it('renders three sermon cards with date, title, copy, and Read more', () => {
    render(<Sermons />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(screen.getAllByText(sermons.date)).toHaveLength(3)
    expect(screen.getAllByText(sermons.title)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: sermons.ctaLabel })).toHaveLength(3)
    for (const card of sermons.cards) {
      expect(screen.getByRole('img', { name: card.alt })).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${card.seed}/800/600`,
      )
    }
  })
})
