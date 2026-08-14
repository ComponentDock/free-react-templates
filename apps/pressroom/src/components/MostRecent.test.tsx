import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MostRecent } from './MostRecent'
import { MOST_RECENT } from '../data'

describe('MostRecent', () => {
  it('renders the heading and all recent cards', () => {
    render(<MostRecent />)
    expect(screen.getByRole('heading', { name: 'Most Recent' })).toBeInTheDocument()
    for (const card of MOST_RECENT) {
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getAllByText(card.byline).length).toBeGreaterThan(0)
    }
  })

  it('renders purple category badges on the cards', () => {
    const { container } = render(<MostRecent />)
    const badges = container.querySelectorAll('span.bg-badge-purple')
    expect(badges.length).toBe(MOST_RECENT.length)
    for (const badge of badges) {
      expect(MOST_RECENT.some((c) => c.badge === badge.textContent)).toBe(true)
    }
  })
})
