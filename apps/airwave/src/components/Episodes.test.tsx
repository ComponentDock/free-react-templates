import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Episodes } from './Episodes'

describe('Episodes', () => {
  it('renders the section heading, subtext, and six episode cards', () => {
    render(<Episodes />)

    expect(screen.getByText('Episodes')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Episodes' })).toBeInTheDocument()
    expect(screen.getByText(/catch up on the latest conversations/i)).toBeInTheDocument()

    const cards = screen.getAllByTestId('episode-card')
    expect(cards).toHaveLength(6)
    expect(cards[0]!.textContent).toContain('EP.247')
    expect(cards[0]!.textContent).toContain('Sarah Chen')
    expect(cards[5]!.textContent).toContain('EP.242')
    expect(cards[5]!.textContent).toContain('Tom Russo')
  })

  it('renders every card with a round play button', () => {
    render(<Episodes />)

    const cards = screen.getAllByTestId('episode-card')
    for (const card of cards) {
      expect(within(card).getByRole('button', { name: 'Play episode' })).toBeInTheDocument()
    }
  })

  it('renders the View All Episodes button', () => {
    render(<Episodes />)

    expect(screen.getByRole('link', { name: 'View All Episodes' })).toBeInTheDocument()
  })
})
