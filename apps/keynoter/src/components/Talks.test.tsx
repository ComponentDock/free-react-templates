import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TALKS } from '../content'
import { Talks } from './Talks'

describe('Talks', () => {
  it('renders six focusable cards with a distinct topic and byline', () => {
    render(<Talks />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      expect(card).toHaveAttribute('tabindex', '0')
      expect(card.className).toContain('duration-[400ms]')
      expect(card.className).toContain('h-[520px]')
    }
    const topics = cards.map((card) => card.getAttribute('aria-label'))
    expect(new Set(topics).size).toBe(6)
    expect(topics).toEqual(TALKS.map((talk) => talk.topic))
  })

  it('floods the card with the pink gradient on hover and focus', () => {
    render(<Talks />)
    const overlay = document.querySelector('article span[aria-hidden="true"]') as HTMLElement
    expect(overlay.className).toContain('to_right,#fb3abe,#f149e3')
    expect(overlay.className).toContain('group-hover:opacity-100')
    expect(overlay.className).toContain('group-focus-visible:opacity-100')
  })

  it('heads the band with the reference title', () => {
    render(<Talks />)
    expect(document.getElementById('talks')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('We will speak about')
  })
})
