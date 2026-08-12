import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UpcomingGames } from './UpcomingGames'
import { UPCOMING_GAMES } from '../data'

describe('UpcomingGames', () => {
  it('renders the ghost title behind the solid heading', () => {
    const { container } = render(<UpcomingGames />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Upcoming Games')
    const ghost = container.querySelector('[aria-hidden="true"]')
    expect(ghost?.textContent).toBe('Upcoming Games')
  })

  it('renders four game cards with overlay titles', () => {
    const { container } = render(<UpcomingGames />)
    expect(container.querySelectorAll('img')).toHaveLength(4)
    for (const game of UPCOMING_GAMES) {
      expect(screen.getByRole('link', { name: game.title })).toBeInTheDocument()
    }
  })
})
