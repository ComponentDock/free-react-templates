import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GameSchedule } from './GameSchedule'

describe('GameSchedule', () => {
  it('shows a window of three games with prev/next navigation', async () => {
    const user = userEvent.setup()
    render(<GameSchedule />)

    expect(screen.getByText('Game Schedule')).toBeInTheDocument()
    expect(screen.getAllByText('Home @ Arena')).toHaveLength(3)
    expect(screen.getAllByText('Kickoff Warrior')).toHaveLength(3)
    expect(screen.getAllByText('April 17, 2018')).toHaveLength(3)
    expect(screen.getByText('Showing 3 of 6 games')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next games' }))
    expect(screen.getByText('Showing 3 of 6 games')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous games' }))
    expect(screen.getByText('Showing 3 of 6 games')).toBeInTheDocument()
  })

  it('wraps the window around when cycling', async () => {
    const user = userEvent.setup()
    const { container } = render(<GameSchedule />)

    const next = screen.getByRole('button', { name: 'Next games' })
    for (let i = 0; i < 6; i += 1) {
      await user.click(next)
    }
    // Six clicks = one full cycle; the window content is back to the start.
    const firstCardLogo = container.querySelectorAll('img')[0]
    expect(firstCardLogo).toHaveAttribute('src', expect.stringContaining('kickoff-game-1'))
  })
})
